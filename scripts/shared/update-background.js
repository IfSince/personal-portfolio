export function updateBackground(element, xValue, yValue, multiplier) {
    element.style.setProperty("--x", xValue * multiplier + "px");
    element.style.setProperty("--y", yValue * multiplier + "px");
}