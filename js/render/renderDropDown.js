

// render dropdown menu
export default function renderDropDown(data) {

    renderDropDownLists("#rooms", "rooms", data)
    renderDropDownLists("#suites", "suites", data)
    renderDropDownLists("#spaces", "spaces", data)
    renderDropDownLists("#restaurants", "restaurants", data)
    renderDropDownLists("#facilities", "facilities", data)

}

function renderDropDownLists(dropdownContainer, categoryName, data) {

    const element = document.querySelector(`${dropdownContainer}`);

    const filteredElement = data.filter(link => link.attributes.category === `${categoryName}`)

    filteredElement.forEach(item => {

        const title = item.attributes.videoTitle;
        const id = item.id

        element.innerHTML += `<a href="video-specific.html?id=${id}"<li id="links"  class="sidenav-close" data-id="${item.id}">${title}</li> 
                                <li class="divider" tabindex="-1"></li></a>
                               `
    })

}