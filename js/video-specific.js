import renderMessage from "./render/renderMessage.js";
import { fetchVideos } from "./index.js";
import { BASE_URL } from "./settings.js";

fetchVideos();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


(async function fetchSingleVideo() {

    const url = BASE_URL + `waldorf-astorias/${id}?populate=*`
    const response = await fetch(url)


    try {
        if (response.ok) {
            const result = await response.json();

            console.log(result)
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

    const { videoTitle, link } = data;
    console.log(data)
    const videoContainer = document.querySelector("#video-container");

    videoContainer.innerHTML = "";

    videoContainer.innerHTML = `<div class="container">
                                        <h1 class="center-align white-text flow-text">${videoTitle}</h1>
                                        <iframe
                                            id="video-player"
                                            class="col s12"
                                            width="600"
                                            height="600"
                                            src="https://player.vimeo.com/video/${link}?h=482549461c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479 frameborder="0" allow="autoplay; fullscreen; picture-in-picture">
                                        </iframe>
                                    </div>`

}