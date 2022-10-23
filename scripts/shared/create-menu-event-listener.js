/**
 * Always adds menu-transition class when button is clicked and remove it after.
 * This fixes the problem with the transition also taking place when switching between desktop and mobile menu.
 * Manually remove transition-delay with timeOut so that it only delays on closing.
 * @param element {HTMLElement}
 */
export function createMenuEventListener(element) {
    const navigation = document.querySelector("nav");
    element.addEventListener("click", () => {
        if (navigation.classList.contains("menu-transition")) {
            navigation.style.transitionDelay = "0.35s";
            setTimeout(() => {
                navigation.style.transitionDelay = "0s";
                navigation.classList.remove("menu-transition");
            }, 200);
        } else {
            navigation.classList.add("menu-transition");
        }
        navigation.classList.toggle("menu-open");
    });
}