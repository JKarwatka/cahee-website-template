document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("li>a").forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector(element.hash).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const navbar = document.querySelector(".header__navbar");

  window.addEventListener("scroll", e => {
    e.preventDefault();
    if (window.pageYOffset > 100) {
      navbar.classList += " header__navbar--shrink";
    } else {
      navbar.classList = "header__navbar";
    }
  });
});

console.log(document.querySelectorAll("a"));
