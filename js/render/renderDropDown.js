
import renderDropDownLists from "./renderDropdownLists.js";


// render dropdown menu
export default function renderDropDown(data) {

    renderDropDownLists("#rooms", "rooms", data)
    renderDropDownLists("#suites", "suites", data)
    renderDropDownLists("#spaces", "spaces", data)
    renderDropDownLists("#restaurants", "restaurants", data)
    renderDropDownLists("#facilities", "facilities", data)

}

