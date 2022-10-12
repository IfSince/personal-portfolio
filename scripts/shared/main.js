
// add event listener for svg elements
const planetElement = document.getElementById('planets');
const starElement = document.getElementById('stars');

function updateBackground(element, xValue, yValue, multiplicator) {
    element.style.setProperty("--x", xValue * multiplicator + "px");
    element.style.setProperty("--y", yValue * multiplicator + "px");
}

document.body.addEventListener("mousemove", (e) => {
    updateBackground(planetElement, e.pageX, e.pageY, -0.02);
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});