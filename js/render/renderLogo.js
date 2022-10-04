export default function renderLogo(results) {

    const logoContainer = document.querySelector("#logo-container");
    const titleContainer = document.querySelector("#title-container");
    const { companyName } = results;

    const image = results.logo.data.attributes.url

    logoContainer.innerHTML = `<img src=${image} alt=${image} class="logo responsive-img""/>`
    titleContainer.innerHTML = `${companyName}`

}
