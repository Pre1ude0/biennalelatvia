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

  window.addEventListener("hashchange", function (e) {
    if (window.location.hash === "#statement") {
      document
        .getElementById("statementId")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (window.location.hash === "#team") {
      document
        .getElementById("teamId")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (window.location.hash === "#events") {
      document
        .getElementById("eventsId")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (window.location.hash === "#press") {
      document.getElementById("pressId").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});

window.scrollToTop = scrollToTop;
