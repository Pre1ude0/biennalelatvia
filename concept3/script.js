let backToTopButton = document.getElementById("btt");
let content = document.getElementsByClassName("content")[0];
const yOffset = -50;

let lang = "en";

function setSize() {
  if (window.innerWidth > 768) {
    content.style.width = `${530 * Math.floor(window.innerWidth / 530)}px`;
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  backToTopButton.classList.remove("down");
}

function setLanguage(language) {
  console.log(language);
  if (language === "en") {
    document.body.classList.remove("lang-it");
    document.body.classList.remove("lang-lv");
    document.body.classList.add("lang-en");
    lang = "en";
  } else if (language === "it") {
    document.body.classList.add("lang-it");
    document.body.classList.remove("lang-lv");
    document.body.classList.remove("lang-en");
    lang = "it";
  } else if (language === "lv") {
    document.body.classList.remove("lang-it");
    document.body.classList.add("lang-lv");
    document.body.classList.remove("lang-en");
    lang = "lv";
  } else {
    document.body.classList.remove("lang-it");
    document.body.classList.remove("lang-lv");
    document.body.classList.add("lang-en");
    lang = "en";
  }
}

function scrollToItem(item) {
  // if (item === "statement") {
  //   let y =
  //     document.getElementById("statementId").getBoundingClientRect().top +
  //     window.scrollY +
  //     yOffset;
  //   scrollTo({ top: y, behavior: "smooth", inline: "start", block: "start" });
  // } else if (item === "team") {
  //   let y =
  //     document.getElementById("teamId").getBoundingClientRect().top +
  //     window.scrollY +
  //     yOffset;
  //   scrollTo({ top: y, behavior: "smooth", inline: "start", block: "start" });
  // } else if (item === "events") {
  //   let y =
  //     document.getElementById("eventsId").getBoundingClientRect().top +
  //     window.scrollY +
  //     yOffset;
  //   scrollTo({ top: y, behavior: "smooth", inline: "start", block: "start" });
  // } else if (item === "press") {
  //   let y =
  //     document.getElementById("pressId").getBoundingClientRect().top +
  //     window.scrollY +
  //     yOffset;
  //   scrollTo({ top: y, behavior: "smooth", inline: "start", block: "start" });
  // }

  console.log(`${item}Id-${lang}`);
  let y =
    document.getElementById(`${item}Id-${lang}`).getBoundingClientRect().top +
    window.scrollY +
    yOffset;

  scrollTo({ top: y, behavior: "smooth", inline: "start", block: "start" });
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

  window.addEventListener("hashchange", function () {
    if (window.location.hash) {
      setLanguage(window.location.hash.substring(1));
    }
  });

  setSize();

  setLanguage(window.location.hash.substring(1));
  console.log(window.location.hash.substring(1));

  window.addEventListener("resize", setSize);
});

window.scrollToTop = scrollToTop;
window.scrollToItem = scrollToItem;
