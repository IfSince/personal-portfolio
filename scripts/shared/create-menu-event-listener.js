export function createMenuEventListener(element) {
    const navigation = document.querySelector("nav");
    element.addEventListener("click", () => navigation.classList.toggle("menu-open"));
}