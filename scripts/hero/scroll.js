export class ContentSlider {
    currentIndex = null;

    constructor(elements, childClass) {
        this.elements = elements;
        this.childClass = childClass;
    }

    scrollInDirection(direction = "down") {
        let newIndex;

        if (direction === "up") {
            newIndex = this.currentIndex -1 < 0 ? 0 : this.currentIndex -1;
        } else {
            newIndex = this.currentIndex +1 >= this.elements.length ? this.currentIndex : this.currentIndex +1;
        }

        if (newIndex !== this.currentIndex) {
            const currentElement = this.elements[this.currentIndex].querySelector(`.${this.childClass}`)
            const nextElement = this.elements[newIndex].querySelector(`.${this.childClass}`)

            this.handleScrolling(currentElement, nextElement);
            this.currentIndex = newIndex;
        }
    }

    scrollToIndex(index) {
        if (index !== this.currentIndex) {
            const currentElement = this.elements[this.currentIndex]?.querySelector(`.${this.childClass}`)
            const nextElement = this.elements[index].querySelector(`.${this.childClass}`)

            this.handleScrolling(currentElement, nextElement);
            this.currentIndex = index;
        }
    }

    handleScrolling(currentElement, nextElement) {
        if (currentElement !== nextElement) {
            currentElement?.classList.remove("active");
            nextElement.classList.add("active");
            nextElement.scrollIntoView({block: "center", inline: "center"});
        }
    }

}