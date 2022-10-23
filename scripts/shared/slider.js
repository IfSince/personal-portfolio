import {createDomElement} from "../util/createDomElement.js";

export class Slider {
    activeSlideIndex = 0
    activeSlide = null;
    interval = null;
    /**
     *
     * @param container {HTMLElement}
     * @param slides {string[]}
     * @param autoTime {number?}
     */
    constructor(container, slides, autoTime) {
        this.container = container;
        this.slides = slides;
        this.autoTime = autoTime;

        this.init()
    }

    /**
     * Initialises Slider-DOM
     */
    init() {
        const imageSlide = createDomElement("img", null, ["project-slider__img"])
        imageSlide.src = this.slides[this.activeSlideIndex]
        imageSlide.addEventListener("click", () => this.toggleTimer())

        const prevBtn = createDomElement("div", null, ["project-slider__btn", "prev"])
        prevBtn.addEventListener("click", () => this.changeSlide(-1))

        const nextBtn = createDomElement("div", null, ["project-slider__btn", "next"])
        nextBtn.addEventListener("click", () => this.changeSlide(1))

        this.activeSlide = imageSlide
        this.container.appendChild(imageSlide)
        this.container.appendChild(prevBtn)
        this.container.appendChild(nextBtn)
        this.play()
    }

    changeSlide(direction) {
        const newIndex = this.activeSlideIndex + direction
        const maxIndex = this.slides.length - 1

        if (newIndex < 0) {
            this.activeSlideIndex = maxIndex
        } else if (newIndex > maxIndex) {
            this.activeSlideIndex = 0
        } else {
            this.activeSlideIndex = newIndex
        }

        this.updateSlide()
        this.pause()
        this.play()
    }

    updateSlide() {
        this.activeSlide.src = this.slides[this.activeSlideIndex]
    }

    toggleTimer() {
        if (this.interval) {
            this.pause()
        } else {
            this.play()
        }
    }

    pause() {
        if (this.autoTime) {
            clearInterval(this.interval)
            this.interval = null
        }
    }

    play() {
        if (this.autoTime) {
            this.interval = setInterval(() => this.changeSlide(1), this.autoTime)
        }
    }

}