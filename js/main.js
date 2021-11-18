// Function for toggling the mobile nav menu
// Classes are added and removed with a click of the nav-menu element
// CSS Styles these classes to show or hide elements
function toggleMenu() {
  if (document.getElementById("x-menu-button").classList.contains("x-menu-hidden")) {
    document.getElementById("x-menu-button").classList.remove("x-menu-hidden");
    document.getElementById("x-menu-text").classList.remove("x-menu-hidden");
    document.getElementById("secondary-nav").classList.remove("secondary-nav-hidden");
    document.getElementById("page-main").classList.remove("close-secondary-nav");
    document.getElementById("page-footer").classList.remove("close-secondary-nav");
    document.getElementById("nav-menu-text").classList.add("nav-menu-hidden");
    document.getElementById("nav-menu-button").classList.add("nav-menu-hidden");
    document.getElementById("page-main").classList.add("second-nav-open");
    document.getElementById("page-footer").classList.add("second-nav-open");
  } else {
    document.getElementById("x-menu-button").classList.add("x-menu-hidden");
    document.getElementById("x-menu-text").classList.add("x-menu-hidden");
    document.getElementById("secondary-nav").classList.add("secondary-nav-hidden");
    document.getElementById("page-main").classList.add("close-secondary-nav");
    document.getElementById("page-footer").classList.add("close-secondary-nav");
    document.getElementById("nav-menu-text").classList.remove("nav-menu-hidden");
    document.getElementById("nav-menu-button").classList.remove("nav-menu-hidden");
    document.getElementById("page-main").classList.remove("second-nav-open");
    document.getElementById("page-footer").classList.remove("second-nav-open");
  }
}
let x = document.getElementById('nav-menu');
x.onclick = toggleMenu;

// Function for closing mobile nav menu when the homepage logo,
// main, or footer elements are clicked.
// Function detects clicks for elements with close-secondary-nav class
// Function then adds and removes classes upon click.
btns = document.getElementsByClassName("close-secondary-nav");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",
    function hideSecondaryNav () {
      document.getElementById("x-menu-button").classList.add("x-menu-hidden");
      document.getElementById("x-menu-text").classList.add("x-menu-hidden");
      document.getElementById("secondary-nav").classList.add("secondary-nav-hidden");
      document.getElementById("page-main").classList.add("close-secondary-nav");
    document.getElementById("page-footer").classList.add("close-secondary-nav");
      document.getElementById("nav-menu-text").classList.remove("nav-menu-hidden");
      document.getElementById("nav-menu-button").classList.remove("nav-menu-hidden");
      document.getElementById("page-main").classList.remove("second-nav-open");
      document.getElementById("page-footer").classList.remove("second-nav-open");
    });
}