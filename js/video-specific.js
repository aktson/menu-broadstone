import renderMessage from "./render/renderMessage.js";
import { fetchVideos } from "./script.js";

fetchVideos();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


(async function fetchSingleVideo() {
    const response = await fetch(`http://localhost:1337/api/videos/${id}?populate=*`)


    try {
        if (response.ok) {
            const result = await response.json();
            const data = result.data.attributes

            renderVideo(data)

        } else {
            renderMessage("Unknown error occured")
        }

    } catch (error) {

        console.log(error)
        renderMessage("ERROR: Failed to fetch")
    }
})();

function renderVideo(data) {

    const { title, link } = data;
    console.log(title)
    const videoContainer = document.querySelector("#video-container");

    videoContainer.innerHTML = "";

    videoContainer.innerHTML = `<div class="container">
                                        <h1 class="center-align white-text flow-text">${title}</h1>
                                        <iframe
                                            id="video-player"
                                            class="col s12"
                                            width="600"
                                            height="600"
                                            src="https://player.vimeo.com/video/${link}?h=482549461c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 frameborder="0" allow="autoplay; fullscreen; picture-in-picture">
                                        </iframe>
                                    </div>`

}