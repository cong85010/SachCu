function openMenuMobile() {
    bodyToLeft('left')

    let menuH = document.querySelector('.menuHeader')
        menuH.style.right = '0px'
        menuH.style.visibility = 'visible'
        menuH.style.opacity = '1'
    
}
function closeMenuMobile() {
    bodyToLeft('right')
    let menuH = document.querySelector('.menuHeader')
    menuH.style.right = '-200px'
    menuH.style.visibility = 'hidden'
    menuH.style.opacity = '0'
}
function bodyToLeft(temp) {
    let body = document.querySelector('body')
    let opacity = document.querySelector('.menuOverlay')
    body.style.transition = '0.3s'
    if(temp == 'left') {
        body.style.marginLeft = '-20px'
        opacity.style.visibility = 'visible'
    } else {
        body.style.marginLeft = '0px'
        opacity.style.visibility = 'hidden'
    }
}