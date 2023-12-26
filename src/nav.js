function renderNav(content) {
    const nav = document.createElement("div")
    nav.classList.add("nav")

    // Add links when the corresponding pages are ready

    const aboutLink = document.createElement("a")
    const aboutUs = document.createElement("div")
    aboutUs.innerText = "About Us"

    aboutUs.classList.add("nav-option")
    aboutLink.appendChild(aboutUs)

    const menuLink = document.createElement("a")
    const menu = document.createElement("div")
    menu.innerText = "Menu"

    menu.classList.add("nav-option")
    menuLink.appendChild(menu)

    const contactLink = document.createElement("a")
    const contact = document.createElement("div")
    contact.innerText = "Contact"

    contact.classList.add("nav-option")
    contactLink.appendChild(contact)

    nav.appendChild(aboutLink)
    nav.appendChild(menuLink)
    nav.appendChild(contactLink)

    content.appendChild(nav)
}

export { renderNav }
