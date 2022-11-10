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
        let activeSlide = this.slides[this.activeSlideIndex];

        console.log(activeSlide)

        activeSlide.addEventListener("click", () => this.changeSlide(-1))

        this.play();
        this.activeSlide = activeSlide;
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
        this.slides.forEach(slide => slide.classList.remove("active"))

        this.activeSlide = this.slides[this.activeSlideIndex];
        console.log(this.slides);
        console.log(this.activeSlide)


        this.activeSlide.classList.add("active");
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