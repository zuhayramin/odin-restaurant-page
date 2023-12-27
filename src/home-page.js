import Pancakes from "./pancakes.webp"
import "./home-page.css"
import "./index.css"

function renderHomePage(content) {
    heroSection(content)
    testimonials(content)
}

function heroSection(content) {
    const hero = document.createElement("div")
    hero.classList.add("hero-section")

    // Pancake Image
    const pancakesContainer = document.createElement("div")
    pancakesContainer.classList.add("pancakes-container")
    const pancakes = new Image()
    pancakes.src = Pancakes
    pancakes.id = "pancakes"
    pancakesContainer.appendChild(pancakes)

    // Hero Text
    const heroText = document.createElement("div")
    heroText.classList.add("hero-text")

    const heroHeader = document.createElement("div")
    heroHeader.classList.add("hero-header")
    heroHeader.innerText = "Pancake & Waffle House"

    const heroBody = document.createElement("div")
    heroBody.classList.add("hero-body")
    heroBody.innerHTML =
        "Come try our world famous pancakes. <br />They're absolutely delicious....my mom said so"

    const menuBtn = document.createElement("div")
    menuBtn.classList.add("menu-btn")
    menuBtn.innerText = "Menu"

    heroText.appendChild(heroHeader)
    heroText.appendChild(heroBody)
    heroText.appendChild(menuBtn)

    hero.appendChild(pancakesContainer)
    hero.appendChild(heroText)

    content.appendChild(hero)
}

function testimonials(content) {
    const Users = [
        {
            name: "Michelle",
            comment:
                "Absolutely Amazing, my favourite were the blueberry pancakes",
        },
        {
            name: "Jon",
            comment:
                "Best pancakes I've ever had. I usually have them with marmalade and cream",
        },
        {
            name: "Henry",
            comment: "Ehhh...could be better. These guys skimp on the nutella",
        },
    ]

    const testimonials = document.createElement("div")
    testimonials.classList.add("testimonials")

    for (const user of Users) {
        // Create user card
        const card = document.createElement("div")
        card.classList.add("card")

        // Create heading section of card
        const cardHeading = document.createElement("div")
        cardHeading.classList.add("card-heading")
        cardHeading.innerText = user.name

        // Create comment of user
        const cardComments = document.createElement("p")
        cardComments.classList.add("card-comments")
        cardComments.innerText = user.comment

        // Add heading and comments to card
        card.appendChild(cardHeading)
        card.appendChild(cardComments)

        // Add card to testimonial dic
        testimonials.appendChild(card)
    }

    // update the DOM
    content.appendChild(testimonials)
}

export { renderHomePage }
