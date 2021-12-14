// Object to store variables for Functions 3, 5, 6, 7, & 9

let app = {
  // Function 3 ( window onload ) & Function 4 ( window resize )
  coverCaption: document.getElementById("cover-caption"),
  // Function 5 ( checkHover() )
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
  },
  // Function 6 ( loadNewsletter() & hideNewsletter() )
  newsletterPopup: document.getElementById('newsletter-popup'),
  loadPopup: document.getElementById('newsletter-sign-up-load'),
  hidePopup: document.getElementById('hide-popup'),
  // Function 7 ( validateEmail() )
  inputEmail: document.getElementById('email-text-field'),
  // Function 9 ( addEventListener() mouseover/mouseleave )
  portraits: document.getElementsByClassName("gallery-image")
};
