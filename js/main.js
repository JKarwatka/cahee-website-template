document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector('a').forEach(element => {
    element.scrollIntoView({behavior: 'smooth'});
});
});
