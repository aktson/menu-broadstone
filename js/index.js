import { BASE_URL } from "./settings.js";
import renderDropDown from "./render/renderDropDown.js";
import renderLogo from "./render/renderLogo.js";
import renderMessage from "./render/renderMessage.js";

fetchVideos();
fetchPdf();

export async function fetchVideos() {

    const url = BASE_URL + "companies/1?populate=*";
    const response = await fetch(url)


    try {
        if (response.ok) {
            const result = await response.json();
            const data = result.data.attributes;

            const videos = data.waldorf_astorias.data;

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



async function fetchPdf() {

    const url = BASE_URL + "companies/1?populate=*";
    const response = await fetch(url)


    try {
        if (response.ok) {
            const result = await response.json();
            const data = result.data.attributes;
            const pdf = data.pdf.data.attributes.url

            const pdfContainer = document.querySelector(".pdf-container");

            pdfContainer.innerHTML = "";

            pdfContainer.innerHTML = `<embed src="${pdf}" type="application/pdf" width="100%" height="600px"  />`


        } else {
            renderMessage("Unknown error occured")
        }

    } catch (error) {

        console.log(error)
        // renderMessage("ERROR: Failed to fetch")
    }
}
