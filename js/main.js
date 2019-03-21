document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".header__navbar");

  window.addEventListener("scroll", e => {
    if (window.pageYOffset > 100) {
      if (!navbar.classList.contains(" header__navbar--shrink")){
        navbar.classList += " header__navbar--shrink";
      }
    } else {
      navbar.classList = "header__navbar";
    }
  }, {
      capture: true,
      passive: true
    });
});

console.log(document.querySelectorAll("a"));
