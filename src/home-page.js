import Pancakes from "./pancakes.jpg"
import "./style.css"

function renderHomePage() {
    const content = document.querySelector("#content")

    renderNav(content)
    heroSection(content)
}

function renderNav(content) {
    const nav = document.createElement("div")
    nav.classList.add("nav")

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

function heroSection(content) {
    const hero = document.createElement("div")
    hero.classList.add("hero")

    const pancakeWrapper = document.createElement("div")
    pancakeWrapper.className = "pancake"

    const pancakes = new Image()
    pancakes.src = Pancakes
    pancakes.className = "pancake"

    content.appendChild(pancakes)

    const heroText = document.createElement("div")
    heroText.classList.add("hero-text")

    const heroHeader = document.createElement("div")
    heroHeader.innerText = "Pancake House"

    const heroBody = document.createElement("div")
    heroBody.innerText =
        "Come taste the greatest pancakes you ever had!\nMy mom says so, so it must be true"

    heroText.appendChild(heroHeader)
    heroText.appendChild(heroBody)

    hero.appendChild(pancakeWrapper)
    hero.appendChild(heroText)

    content.appendChild(hero)
}

export { renderHomePage }
