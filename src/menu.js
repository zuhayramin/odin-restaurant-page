import { renderNav } from "./nav"
import "./index.css"
import "./menu.css"
import Blueberry from "./blueberry.jpg"
import Chocolate from "./chocolate.jpg"
import Berries from "./berries.jpg"
import BlueberryWaffles from "./blueberryWaffles.jpg"
import ChocolateWaffles from "./chocolateWaffles.jpg"

function renderMenuItems(content) {
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    const menuItems = [
        {
            image: Blueberry,
            name: "Blueberry Pancakes",
            description:
                "Indulge in the perfect harmony of flavors with our Blueberry Pancakes – a culinary masterpiece featuring our signature house pancakes drizzled with a luscious blueberry compote, elegantly crowned with fresh, plump blueberries.",
            price: "$7",
        },
        {
            image: Chocolate,
            name: "Chocolate Pancakes",
            description:
                "Indulge in a decadent delight with our Chocolate Pancakes – a luscious stack of fluffy pancakes generously drizzled with rich chocolate syrup, creating a heavenly harmony of sweetness and warmth.",
            price: "$5",
        },
        {
            image: Berries,
            name: "Berry Pancakes",
            description:
                "Indulge in the perfect harmony of flavors with our Berry Pancakes – a delightful fusion of fluffy pancakes adorned with a medley of fresh berries and a drizzle of sweet compote.",
            price: "$10",
        },
        {
            image: ChocolateWaffles,
            name: "Chocolate Waffles",
            description:
                "Indulge in the rich and decadent experience of our chocolate waffles – a delightful harmony of fluffy waffle perfection generously infused with velvety chocolate goodness.",
            price: "$8",
        },
        {
            image: BlueberryWaffles,
            name: "Blueberry Waffles",
            description:
                "Savor the delightful union of golden, fluffy waffles and plump, juicy blueberries in our Blueberry Waffles. Topped with a luscious blueberry compote and whipped cream, it's a perfect harmony of sweet and crispy bliss.",
            price: "$12",
        },
    ]

    menuItems.forEach((menuItem) => {
        const itemCard = document.createElement("div")
        itemCard.className = "menu-card"

        const imageContainer = document.createElement("div")
        imageContainer.className = "item-image"

        // Create an image element
        const image = new Image()
        image.src = menuItem.image
        image.alt = menuItem.name
        imageContainer.appendChild(image)

        // Create elements for name and description
        const name = document.createElement("h2")
        name.className = "item-name"
        name.textContent = menuItem.name

        const description = document.createElement("p")
        description.className = "item-description"
        description.textContent = menuItem.description

        const price = document.createElement("h2")
        price.className = "item-price"
        price.textContent = menuItem.price

        // Append image, name, and description to the menu item element
        itemCard.appendChild(imageContainer)
        itemCard.appendChild(name)
        itemCard.appendChild(description)
        itemCard.appendChild(price)

        // Append the menu item element to the menu container
        menuContainer.appendChild(itemCard)
    })

    content.appendChild(menuContainer)
}

export { renderMenuItems }
