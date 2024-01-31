const hamburgerMenu = document.querySelector('#hmburger-menu')

const headerElement = document.querySelector('#header')

const overlayElement = document.querySelector('#overlayElement')

hamburgerMenu.addEventListener('click', () => {

    console.log("Open sesame")

    headerElement.classList.toggle('toggle-menu')
    overlayElement.classList.add('overlay')
    
    if (headerElement.classList.contains('toggle-menu')) {
        console.log('Yesirrrrr')
        overlayElement.classList.add('fade-in')
        overlayElement.classList.remove('fade-out')
    } else {
        console.log('Fade-out')
        overlayElement.classList.add('fade-out')
        overlayElement.classList.remove('fade-in')
    }
})
