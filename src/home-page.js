import Pancakes from "./french-toast.jpg"

function renderHomePage() {
    const content = document.querySelector("#content")

    pancakeImage(content)
}

function pancakeImage(content) {
    const pancakes = new Image()
    pancakes.src = Pancakes
    pancakes.classList.add("pancake")

    content.appendChild(pancakes)
}

export { renderHomePage }
