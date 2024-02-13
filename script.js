const hamburgerMenu = document.querySelector('#hmburger-menu')

const BodyElement = document.querySelector('body')


const headerElement = document.querySelector('#header')

const overlayElement = document.querySelector('#overlayElement')

const mobileLinks = document.querySelector('.mobile-links')


//Toggling the menu and close button
hamburgerMenu.addEventListener('click', () => {

    console.log("Open sesame")

    headerElement.classList.toggle('toggle-menu')
    BodyElement.classList.toggle('no-scroll')
    overlayElement.classList.add('overlay')
    
    fadeInOut(overlayElement)
    fadeInOut(mobileLinks)
    
})

//Function to control animation of mobile menu links appearance
function fadeInOut(element) {
    if (headerElement.classList.contains('toggle-menu')) {
        console.log('Yesirrrrr')
        element.classList.add('fade-in')
        element.classList.remove('fade-out')
    } else {
        console.log('Fade-out')
        element.classList.add('fade-out')
        element.classList.remove('fade-in')
    }
}