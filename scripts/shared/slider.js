export class Slider {
    activeSlideIndex = 0
    activeSlide = null;
    interval = null;

    /**
     *
     * @param container {HTMLElement}
     * @param slides {Object[]}
     * @param autoTime {number || null}
     * @param animationOffset {number}
     */
    constructor(container, slides, autoTime, animationOffset = 0) {
        this.container = container;
        this.slides = slides;
        this.autoTime = autoTime;
        this.animationOffset = animationOffset;
    }

    /**
     * Initialises Slider-DOM and loads some DOM-Elements
     */
    init() {
        this.slides.forEach(slide => slide.addEventListener('click', () => this.changeSlide(1)));
        this.activeSlide = this.slides[this.activeSlideIndex];
        this.slideAnimationImage = this.container.querySelector('[data-slide-animation-image]')
        this.autoTimeDisplayElement = this.container.querySelector('.slide-time');
        this.slideCountElement = this.container.querySelector('.slide-count');

        this.updateSlideCount();
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
        this.updateAnimationImage();
        this.resetAnimationElements();
        this.updateSlideCount();

        this.slides.forEach(slide => slide.classList.remove('active'))
        this.activeSlide = this.slides[this.activeSlideIndex];
        this.activeSlide.classList.add('active');
    }

    updateSlideCount() {
        this.slideCountElement.innerHTML = `0${this.activeSlideIndex + 1}`;
    }

    updateAnimationImage() {
        this.slideAnimationImage.setAttribute('src', this.activeSlide.getAttribute('src'));
        this.slideAnimationImage.classList.add('visible');
    }

    resetAnimationElements() {
        const animationDivs = this.container.querySelectorAll('.image__cover')
        animationDivs.forEach((div) => {
            div.classList.remove('active');
            div.classList.remove('image__cover');

            // Timeout is necessary to reset the styles for animation
            setTimeout(() => {
                div.classList.add('image__cover');
                div.classList.add('active');
            }, 10)
        })
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

            clearInterval(this.timingInterval);
            this.timingInterval = null;
        }
    }

    /**
     * start auto slide
     */
    play() {
        if (this.autoTime) {
            setTimeout(() => {
                let timePassedPercentage = 0;
                const multiplier = this.autoTime * 0.1;
                this.interval = setInterval(() => this.changeSlide(1), this.autoTime);

                this.timingInterval = setInterval(() => {
                    timePassedPercentage += 100 / multiplier;
                    this.autoTimeDisplayElement.style.setProperty('--time-passed-percentage', `${timePassedPercentage}%`)
                }, 10);
            }, this.animationOffset - 500);
        }
    }

}