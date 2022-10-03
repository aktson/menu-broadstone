export default function renderLogo(results) {

    const logoContainer = document.querySelector("#logo-container");
    const titleContainer = document.querySelector("#title-container");
    const { companyName } = results;

    const image = results.logo.data.attributes.url
    const imageUrl = "http://localhost:1337" + image;

    logoContainer.innerHTML = `<img src=${imageUrl} alt=${image} class="logo responsive-img""/>`
    titleContainer.innerHTML = `${companyName}`

}
