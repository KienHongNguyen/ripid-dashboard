const expandIcon = document.querySelector("#expand-icon");
expandIcon.addEventListener("click", () => {
    console.log();
})

const menu = document.querySelector("#expand-icon")

menu.addEventListener("click", function() {
    expandSideBar()
})

function expandSideBar() {
    document.querySelector("body").classList.toggle("short")

}
