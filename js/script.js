import { companyUrl } from "../js/settings.js";
import renderDropDown from "./render/renderDropDown.js";
import renderLogo from "./render/renderLogo.js";
import renderMessage from "./render/renderMessage.js";



export async function fetchVideos() {
    const response = await fetch(companyUrl)


    try {
        if (response.ok) {
            const result = await response.json();
            const data = result.data.attributes;
            const videos = data.videos.data;

            renderLogo(data)
            renderDropDown(videos)

        } else {

            renderMessage("Unknown error occured")
        }

    } catch (error) {

        console.log(error)
        renderMessage("ERROR: Failed to fetch")
    }
};

fetchVideos();


