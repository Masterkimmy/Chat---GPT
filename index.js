function showSideBar() {
    const navlinks = document.querySelector('nav .navlinks')
    const overlay = document.querySelector('.overlay')
    overlay.style.display = "block"
    navlinks.style.left = "0px"
}
function hideSideBar() {
    const navlinks = document.querySelector('nav .navlinks')
    const overlay = document.querySelector('.overlay')
    overlay.style.display = "none"
    navlinks.style.left = "100%"
}  