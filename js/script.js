let range = document.getElementById("range")
let container = document.querySelector(".container")

function setFilter(value) {
    container.style.filter = "brightness(" + value + "%)"
}
window.onload = () => {
    range.value = localStorage.getItem("range")
    setFilter(range.value)
};
range.oninput = () => {
    localStorage.setItem("range", range.value)
    setFilter(range.value)
}
document.querySelector(".far").onclick = () => {
    range.value = 10;
    setFilter(range.value)
}
document.querySelector(".fas").onclick = () => {
    range.value = 100;
    setFilter(range.value)
}