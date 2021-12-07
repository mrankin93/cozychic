// Object to store variables

let app = {
  // 1. toggleMenu()
  xMenuButton: document.getElementById("x-menu-button"),
  xMenuText: document.getElementById("x-menu-text"),
  navMenuButton: document.getElementById("nav-menu-button"),
  navMenuText: document.getElementById("nav-menu-text"),
  secondaryNav: document.getElementById("secondary-nav"),
  pageMain: document.getElementById("page-main"),
  pageFooter: document.getElementById("page-footer"),
  navMenu: document.getElementById("nav-menu"),
  // 2. hideSecondaryNav()
  clickOutsideNav: document.getElementsByClassName("close-secondary-nav"),
  // 3 & 4. figcaption
  coverCaption: document.getElementById("cover-caption"),
  // 5. checkHover()
  // 5.1. isHover() checks if element is hovered
  isHover: e => e.parentElement.querySelector(':hover') === e,
  latestLooksList: document.getElementById('latest-looks-list'),
  scrollbarDiv: document.getElementById('scrollbar-div'),
  // 5.2 addScroll() toggles classes to show scrollbar and hide empty div of same size to create overlay effect
  addScroll: e => {
    app.latestLooksList.classList.add('visible-scroll');
    app.scrollbarDiv.classList.remove('scrollbar-div-visible');
  },
  // 5.3 removeScroll() does the opposite of addScroll()
  removeScroll: e => {
    app.latestLooksList.classList.remove('visible-scroll');
    app.scrollbarDiv.classList.add('scrollbar-div-visible');
  }
};