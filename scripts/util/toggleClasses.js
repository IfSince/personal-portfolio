/**
 * Toggles between different classes
 * @param firstClass
 * @param secondClass
 * @param target {Element || null}
 */
export function toggleClasses(firstClass, secondClass, target) {
    if (!!target) {
        const classList = target.classList
        if (classList.contains(firstClass)) {
            classList.remove(firstClass)
            classList.add(secondClass)
        } else {
            classList.add(firstClass)
            classList.remove(secondClass)
        }
    }
}