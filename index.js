function showSideBar() {
    const navlinks = document.querySelector('nav .navlinks')
    const overlay = document.querySelector('.overlay')
    navlinks.style.display = "block"
    overlay.style.display = "block"
}
function hideSideBar() {
    const navlinks = document.querySelector('nav .navlinks')
    const overlay = document.querySelector('.overlay')
    navlinks.style.display = "none"
    overlay.style.display = "none"
}   