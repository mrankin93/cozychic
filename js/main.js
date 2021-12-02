/*
1. Function for toggling the mobile nav menu
Classes are added and removed when nav-menu element is clicked
CSS Styles these classes to show or hide elements
*/

function toggleMenu() {
  if (app.xMenuButton.classList.contains("x-menu-hidden")) {
    app.xMenuButton.classList.remove("x-menu-hidden"); 
    app.xMenuText.classList.remove("x-menu-hidden");
    app.secondaryNav.classList.remove("secondary-nav-hidden");
    app.pageMain.classList.remove("close-secondary-nav");
    app.pageFooter.classList.remove("close-secondary-nav");
    app.navMenuText.classList.add("nav-menu-hidden");
    app.navMenuButton.classList.add("nav-menu-hidden");
    app.pageMain.classList.add("second-nav-open");
    app.pageFooter.classList.add("second-nav-open");
  } else {
    app.xMenuButton.classList.add("x-menu-hidden");
    app.xMenuText.classList.add("x-menu-hidden");
    app.secondaryNav.classList.add("secondary-nav-hidden");
    app.pageMain.classList.add("close-secondary-nav");
    app.pageFooter.classList.add("close-secondary-nav");
    app.navMenuText.classList.remove("nav-menu-hidden");
    app.navMenuButton.classList.remove("nav-menu-hidden");
    app.pageMain.classList.remove("second-nav-open");
    app.pageFooter.classList.remove("second-nav-open");
  }
}

app.navMenu.onclick = toggleMenu;

/*
2. Event listener for clicking outside of mobile nav & header
Function detects clicks for main and footer elements with .close-secondary-nav
*/

for (let i = 0; i < app.clickOutsideNav.length; i++) {
  app.clickOutsideNav[i].addEventListener("click",
    function hideSecondaryNav () {
      app.xMenuButton.classList.add("x-menu-hidden");
      app.xMenuText.classList.add("x-menu-hidden");
      app.secondaryNav.classList.add("secondary-nav-hidden");
      app.pageMain.classList.add("close-secondary-nav");
      app.pageFooter.classList.add("close-secondary-nav");
      app.navMenuText.classList.remove("nav-menu-hidden");
      app.navMenuButton.classList.remove("nav-menu-hidden");
      app.pageMain.classList.remove("second-nav-open");
      app.pageFooter.classList.remove("second-nav-open");
    });
}

/*
3. When page is loaded, different figcaptions appear with the cover picture in index.html
Two different figcaptions display depending on screen width
*/

window.onload = function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley reading a book` + `&rdquo;`;
  } else {
    app.coverCaption.innerHTML = `&ldquo;` + `Hayley holding a cup of tea` + `&rdquo;`;
  }
}

/*
4. When window is resized, the figcaption will change at the 768px breakpoint
*/

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
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
