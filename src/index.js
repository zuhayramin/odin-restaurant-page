import { renderHomePage } from "./home-page"
import { renderMenuItems } from "./menu"
import { renderNav } from "./nav"

const content = document.querySelector(".content")
const contentNav = document.querySelector(".content-nav")

renderNav(contentNav)
renderHomePage(content)

const aboutBtn = document.querySelector("#about")
aboutBtn.addEventListener("click", () => {
    content.innerHTML = ""
    renderHomePage(content)
})

const menuBtn = document.querySelector("#menu")
menuBtn.addEventListener("click", () => {
    content.innerHTML = ""
    renderMenuItems(content)
})
