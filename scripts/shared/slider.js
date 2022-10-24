import {createDomElement} from "../util/createDomElement.js";

export class Slider {
    activeSlideIndex = 0
    activeSlide = null;
    interval = null;

    /**
     *
     * @param container {HTMLElement}
     * @param slides {Object[]}
     * @param autoTime {number?}
     */
    constructor(container, slides, autoTime) {
        this.container = container;
        this.slides = slides;
        this.autoTime = autoTime;

        this.init();
    }

    /**
     * Initialises Slider-DOM
     */
    init() {
        const imageSlide = createDomElement("img", null, ["project-slider__img"]);
        let activeSlide = this.slides[this.activeSlideIndex];
        imageSlide.src = activeSlide.image;
        imageSlide.addEventListener("click", () => {
            this.focusSlide()
        });

        const description = createDomElement('div', null, ['project-slider__description-container']);
        const slideDescription = createDomElement('h3', activeSlide.description, ['project-slider__description']);
        description.appendChild(slideDescription);

        const prevBtn = createDomElement("div", null, ["project-slider__btn", "prev"]);
        prevBtn.addEventListener("click", () => this.changeSlide(-1));

        const nextBtn = createDomElement("div", null, ["project-slider__btn", "next"]);
        nextBtn.addEventListener("click", () => this.changeSlide(1));

        this.buttons = [prevBtn, nextBtn]

        this.activeSlide = imageSlide;
        this.slideDescription = slideDescription;
        this.container.appendChild(imageSlide);
        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
        this.container.appendChild(description);
        this.play();
    }

    /**
     * Zooms into current slide and disables slide function
     */
    focusSlide() {
        this.container.classList.toggle("active")
        this.buttons.forEach((btn) => btn.classList.toggle("disabled"))
        this.toggleTimer();
    }

    /**
     * Changes slide based on direction
     * @param direction {1 || -1}
     */
    changeSlide(direction) {
        const newIndex = this.activeSlideIndex + direction;
        const maxIndex = this.slides.length - 1;

        if (newIndex < 0) {
            this.activeSlideIndex = maxIndex;
        } else if (newIndex > maxIndex) {
            this.activeSlideIndex = 0;
        } else {
            this.activeSlideIndex = newIndex;
        }

        this.updateSlide();
        this.pause();
        this.play();
    }

    updateSlide() {
        this.activeSlide.src = this.slides[this.activeSlideIndex].image;
        this.slideDescription.innerText = this.slides[this.activeSlideIndex].description;
    }

    /**
     * toggles auto slide if interval is set
     */
    toggleTimer() {
        if (this.interval) {
            this.pause();
        } else {
            this.play();
        }
    }

    /**
     * stop auto slide
     */
    pause() {
        if (this.autoTime) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    /**
     * start auto slide
     */
    play() {
        if (this.autoTime) {
            this.interval = setInterval(() => this.changeSlide(1), this.autoTime);
        }
    }

}