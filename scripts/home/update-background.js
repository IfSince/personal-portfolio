/**
 * Updates properties according to x and y values and given multiplier
 * @param element {Object} element to be transitioned
 * @param xValue {number}
 * @param yValue {number}
 * @param multiplier {number} multiplier for x and y values
 */
export function updateBackground(element, xValue, yValue, multiplier) {
    element.style.setProperty("--x", xValue * multiplier + "px");
    element.style.setProperty("--y", yValue * multiplier + "px");
}