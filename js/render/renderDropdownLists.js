export default function renderDropDownLists(dropdownContainer, categoryName, data) {

    const element = document.querySelector(`${dropdownContainer}`);

    const filteredElement = data.filter(link => link.attributes.category === `${categoryName}`)


    filteredElement.forEach(item => {
        const title = item.attributes.title;
        const id = item.id

        element.innerHTML += `<a href="video-specific.html?id=${id}"<li id="links"  class="sidenav-close" data-id="${item.id}">${title}</li> 
                                <li class="divider" tabindex="-1"></li></a>
                                <a href="/images/image-name.jpg" download="new-image-name.jpg"> `
    })

}