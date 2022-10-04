import { BASE_URL } from "./settings.js";
import renderDropDown from "./render/renderDropDown.js";
import renderLogo from "./render/renderLogo.js";
import renderMessage from "./render/renderMessage.js";

fetchVideos();

export async function fetchVideos() {

    const url = BASE_URL + "companies/1?populate=*";
    const response = await fetch(url)


    try {
        if (response.ok) {
            const result = await response.json();
            const data = result.data.attributes;
            const videos = data.waldorf_astorias.data;

            const pdf = data.pdf.data.attributes.url
            renderPdf(pdf)
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




function renderPdf(pdf) {
    const pdfContainer = document.querySelector(".pdf-container")

    pdfContainer.innerHTML = `<a href="${pdf}" download target="_blank"><i class="material-icons">get_app</i>Download PDF</a>`
}

