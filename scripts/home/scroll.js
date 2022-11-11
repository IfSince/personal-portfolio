const TIME_OUT = 1800 // It should be the same transition time of the sections
const body = document.querySelector('body')
const sectionsQty = document.querySelectorAll('section').length
const sideNav = document.querySelector('.side-nav')
const sideNavEntries = sideNav.querySelectorAll('li')

let startFlag = true
let initialScroll = window.scrollY
let qty = 1
let main = null
let next = null


// Listening to scroll event
window.onscroll = () => {
    if (startFlag) {
        const scrollDown = this.scrollY >= initialScroll
        const scrollLimit = qty >= 1 && qty <= sectionsQty

        // Verify that the scroll does not exceed the number of sections
        if (scrollLimit) {
            body.style.overflowY = 'hidden' // Lock el scroll

            if (scrollDown && qty < sectionsQty) {
                main = document.querySelector(`section.s${qty}`)
                next = document.querySelector(`section.s${qty + 1}`)

                main.style.transform = 'translateY(-100vh)'
                next.style.transform = 'translateY(0)'

                qty++
            } else if (!scrollDown && qty > 1) {
                main = document.querySelector(`section.s${qty - 1}`)
                next = document.querySelector(`section.s${qty}`)

                main.style.transform = 'translateY(0)'
                next.style.transform = 'translateY(100vh)'

                qty--
            }

            // Side nav
            sideNavEntries.forEach((entry) => {
                entry.classList.remove('active');
            })
            sideNavEntries[qty-1].classList.add('active');
        }

        // Wait for the scrolling to finish to reset the values
        setTimeout(() => {
            initialScroll = this.scrollY
            startFlag = true
            body.style.overflowY = 'scroll' // Unlock scroll
        }, TIME_OUT)

        startFlag = false
    }

    // Keep scrollbar in the middle of the viewport
    window.scroll(0, window.screen.height)
}