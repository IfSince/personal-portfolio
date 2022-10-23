export class ContentSlider {
    currentIndex = null;

    constructor(elements, childClass) {
        this.elements = elements;
        this.childClass = childClass;

        this.scrollToIndex(0)
    }

    scrollInDirection(direction = "down") {
        let newIndex;

        if (direction === "up") {
            newIndex = this.currentIndex -1 < 0 ? 0 : this.currentIndex -1;
        } else {
            newIndex = this.currentIndex +1 >= this.elements.length ? this.currentIndex : this.currentIndex +1;
        }

        if (newIndex !== this.currentIndex) {
            const currentElement = this.elements[this.currentIndex]
            const nextElement = this.elements[newIndex]

            this.handleScrolling(currentElement, nextElement, newIndex);
            this.currentIndex = newIndex;
        }
    }

    scrollToIndex(index) {
        if (index !== this.currentIndex) {
            const currentElement = this.elements[this.currentIndex]
            const nextElement = this.elements[index]

            this.handleScrolling(currentElement, nextElement, index);
            this.currentIndex = index;
        }
    }

    handleScrolling(currentContainer, nextContainer, index) {
        const currentHero = currentContainer?.querySelector(`.${this.childClass}`)
        const nextHero = nextContainer.querySelector(`.${this.childClass}`)

        const currentFeature = currentContainer?.querySelector(".side-container")?.querySelector(".side-container__content")
        const nextFeature = nextContainer.querySelector(".side-container")?.querySelector(".side-container__content")
        if (currentHero !== nextHero) {
            currentHero?.classList.remove("active");
            nextHero.classList.add("active");

            currentFeature?.classList.remove("active");
            nextFeature?.classList.add("active");

            nextContainer.scrollIntoView({block: "center", inline: "center"});
        }
    }

}