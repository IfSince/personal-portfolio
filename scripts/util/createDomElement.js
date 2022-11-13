/**
 * Creates and returns new DOM-Element with given definitions
 * @param type {string}
 * @param innerHTML {string | null}
 * @param classes {string[]?}
 * @param styles {Object?}
 * @returns {HTMLElement}
 */
export function createDomElement(type, innerHTML = null, classes = [], styles = {}) {
    const element = document.createElement(type);
    element.innerHTML = innerHTML;
    if (classes) element.classList.add(...classes);

    Object.keys(styles).forEach((key) => {
        element.style[key] = styles[key];
    });

    return element;
}