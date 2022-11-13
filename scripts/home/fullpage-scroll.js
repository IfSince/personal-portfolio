import {createDomElement} from '../util/createDomElement.js';

const TIME_OUT = 1800 // Scroll animation time
const sectionCount = document.querySelectorAll('section').length
const sideNav = document.querySelector('.side-nav')

let sideNavEntries = [];
let scrollAllowed = true
let initialScroll = window.scrollY
let currentSlideIndex = 1

function createSideNavEntries(count) {
    for (let i = 1; i <= count; i++) {
        const element = createDomElement('li')
        if (i === 1) element.classList.add('active')
        element.addEventListener('click', () => scroll(i));
        sideNav.appendChild(element)

        sideNavEntries = [...sideNavEntries, element]
    }
}

function updateSlides(nextSlideIndex) {
    for (let i = 1; i < nextSlideIndex; i++) {
        const slide = document.querySelector(`section.s${i}`)
        slide.style.transform = 'translateY(-100vh)';
    }

    for (let i = sectionCount; i > nextSlideIndex; i--) {
        const slide = document.querySelector(`section.s${i}`)
        slide.style.transform = 'translateY(100vh)'
    }

    const current = document.querySelector(`section.s${nextSlideIndex}`)
    current.style.transform = 'translateY(0)'
}

function scroll(index = null) {
    if (scrollAllowed) {
        const isScrollDirectionDown = window.scrollY >= initialScroll && (index == null || index > currentSlideIndex)

        if (currentSlideIndex >= 1 && currentSlideIndex <= sectionCount) {
            if (isScrollDirectionDown && currentSlideIndex < sectionCount) {
                const nextSlideIndex = index || currentSlideIndex + 1
                updateSlides(nextSlideIndex)
                currentSlideIndex = nextSlideIndex
            } else if (!isScrollDirectionDown && currentSlideIndex > 1) {
                const nextSlideIndex = index || currentSlideIndex - 1
                updateSlides(nextSlideIndex)
                currentSlideIndex = nextSlideIndex
            }

            sideNavEntries.forEach((entry) => entry.classList.remove('active'))
            sideNavEntries[currentSlideIndex - 1].classList.add('active');
        }

        // Wait for the scrolling to finish before scrolling again
        setTimeout(() => {
            initialScroll = window.scrollY
            scrollAllowed = true
        }, TIME_OUT)

        scrollAllowed = false
    }
}

// Add scroll event listener
window.addEventListener('scroll', () => scroll())

// Side nav
createSideNavEntries(sectionCount)