

export default function renderMessage(message) {
    const messageContainer = document.querySelector("#message-container");
    const cardContainer = document.querySelector(".card-container");

    cardContainer.style.display = "flex";

    messageContainer.innerHTML = "";
    messageContainer.innerHTML = `<p class="white-text center  ">${message}</p>`

}

