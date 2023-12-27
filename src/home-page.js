import Pancakes from "./pancakes.webp"
import "./home-page.css"
import "./index.css"
import renderMenuItems from "./menu"

function renderHomePage(content) {
    heroSection(content)
    testimonials(content)
    contactSection(content)
    footer(content)
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
        "Indulge your taste buds in a symphony of flavors at our pancake and waffle haven! Our passion lies in crafting the perfect plain pancakes and waffles, elevated to new heights with the freshest, most delectable toppings."

    heroText.appendChild(heroHeader)
    heroText.appendChild(heroBody)

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

function contactSection(content) {
    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info")

    const phoneTitle = document.createElement("div")
    phoneTitle.classList.add("contact-title")
    phoneTitle.innerText = "Phone"

    const phoneValue = document.createElement("div")
    phoneValue.classList.add("contact-value")
    phoneValue.innerText = "+(1) 234 567 8910"

    const emailTitle = document.createElement("div")
    emailTitle.classList.add("contact-title")
    emailTitle.innerText = "Email"

    const emailValue = document.createElement("div")
    emailValue.classList.add("contact-value")
    emailValue.innerText = "contact@paw.com"

    const addressTitle = document.createElement("div")
    addressTitle.classList.add("contact-title")
    addressTitle.innerText = "Address"

    const addressValue = document.createElement("div")
    addressValue.classList.add("contact-value")
    addressValue.innerText =
        "Shop #78, North Eastern Boulevard, Narnia Lane, Narnia"

    contactInfo.appendChild(phoneTitle)
    contactInfo.appendChild(phoneValue)
    contactInfo.appendChild(emailTitle)
    contactInfo.appendChild(emailValue)
    contactInfo.appendChild(addressTitle)
    contactInfo.appendChild(addressValue)

    content.appendChild(contactInfo)
}

function footer(content) {
    const footer = document.createElement("footer")
    footer.innerText = "2023 © Zuhayr Amin"

    content.appendChild(footer)
}
export { renderHomePage }
