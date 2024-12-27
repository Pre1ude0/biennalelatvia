let backToTopButton = document.getElementById("btt");

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  backToTopButton.classList.remove("down");
}

document.addEventListener("DOMContentLoaded", function () {
  let startTime = Math.random() * 100;
  let background = document.getElementsByClassName("bg")[0];

  background.style.animationDelay = `-${startTime}s`;

  document.addEventListener("scroll", function () {
    if (window.innerWidth < 768) {
      if (window.scrollY < 100) {
        backToTopButton.classList.add("down");
      } else {
        backToTopButton.classList.remove("down");
      }
    }
  });
});

window.scrollToTop = scrollToTop;
