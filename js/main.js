/*
1. Toggles Mobile Nav Dropdown Menu
*/

function toggleMenu() {
  if (app.xMenuButton.classList.contains('x-menu-hidden')) {
    app.xMenuButton.classList.remove('x-menu-hidden');
    app.xMenuText.classList.remove('x-menu-hidden');
    app.secondaryNav.classList.remove('secondary-nav-hidden');
    app.pageMain.classList.remove('close-secondary-nav');
    app.pageFooter.classList.remove('close-secondary-nav');
    app.navMenuText.classList.add('nav-menu-hidden');
    app.navMenuButton.classList.add('nav-menu-hidden');
    app.pageMain.classList.add('second-nav-open');
    app.pageFooter.classList.add('second-nav-open');
  } else {
    app.xMenuButton.classList.add('x-menu-hidden');
    app.xMenuText.classList.add('x-menu-hidden');
    app.secondaryNav.classList.add('secondary-nav-hidden');
    app.pageMain.classList.add('close-secondary-nav');
    app.pageFooter.classList.add('close-secondary-nav');
    app.navMenuText.classList.remove('nav-menu-hidden');
    app.navMenuButton.classList.remove('nav-menu-hidden');
    app.pageMain.classList.remove('second-nav-open');
    app.pageFooter.classList.remove('second-nav-open');
  }
}

app.navMenu.onclick = toggleMenu;

/*
2. Function hides Mobile Dropdown Menu when click is detected outside of nav area
*/

// Defines what hideSecondaryNav does
function hideSecondaryNav() {
  app.xMenuButton.classList.add('x-menu-hidden');
  app.xMenuText.classList.add('x-menu-hidden');
  app.secondaryNav.classList.add('secondary-nav-hidden');
  app.pageMain.classList.add('close-secondary-nav');
  app.pageFooter.classList.add('close-secondary-nav');
  app.navMenuText.classList.remove('nav-menu-hidden');
  app.navMenuButton.classList.remove('nav-menu-hidden');
  app.pageMain.classList.remove('second-nav-open');
  app.pageFooter.classList.remove('second-nav-open');
}

// Calls hideSecondaryNav when main/footer are clicked
for (let i = 0; i < app.clickOutsideNav.length; i++) {
  app.clickOutsideNav[i].addEventListener('click', hideSecondaryNav);
}

// Calls hideSecondaryNav when window reaches tablet sized screens
window.addEventListener('resize', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    hideSecondaryNav();
  } 
})

/*
3. When page is loaded, different figcaptions appear with the cover picture in index.html
Two different figcaptions display depending on screen width
*/

window.onload = function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley reading a book` + `&rdquo;`;
  } else {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley holding a cup of tea` + `&rdquo;`;
  }
}

/*
4. When window is resized, the figcaption will change at the 768px breakpoint
*/

window.addEventListener('resize', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley reading a book` + `&rdquo;`;
  } else {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley holding a cup of tea` + `&rdquo;`;
  }
})

/*
5. When user hovers over #latest-looks-list on medium-sized screens, an always visible scrollbar is toggled
*/

document.addEventListener('mousemove', function checkHover() {
  const hovered = app.isHover(app.latestLooksList);
  hovered ? app.addScroll() : app.removeScroll();
});

/*
6. Load and Hide Newsletter Popup
*/

function loadNewsletter() {
  app.newsletterPopup.style.display = "flex";
}
app.loadPopup.onclick = loadNewsletter;

function hideNewsletter() {
  app.newsletterPopup.style.display = "none";
}
app.hidePopup.onclick = hideNewsletter;

/* 
7. Email Input Border turns green if value matches pattern below and red if it doesn't match
*/

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const email = $('#email-text-field').val();
  app.inputEmail.classList.remove('error');
  app.inputEmail.classList.remove('correct');

  if (validateEmail(email)) {
    app.inputEmail.classList.add('correct');
  } else {
    app.inputEmail.classList.add('error');
  }
}

$('#email-text-field').on('input', validate);

/* 
8. Back to top scroll animation
*/

$(document).ready(function() {
  
  $('#back-to-top-button').click(function() {
  $('html, body').animate({scrollTop: 0}, 500);
  });
});

/* 
9. looks.html - Function to toggle caption when mouse moves over and leaves gallery-image
*/

Array.from(app.portraits).forEach(v => v.addEventListener('mouseover', function() {
  this.parentElement.getElementsByClassName('gallery-caption')[0].classList.remove('gal-caption-hidden');
}));

Array.from(app.portraits).forEach(v => v.addEventListener('mouseleave', function() {
  this.parentElement.getElementsByClassName('gallery-caption')[0].classList.add('gal-caption-hidden');
}));
