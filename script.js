let backToTopButton = document.getElementById("btt");
let content = document.getElementsByClassName("content")[0];
const yOffset = -50;

let lang = "en";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    backToTopButton.classList.remove("down");
}

function setLanguage(language) {
    if (language === "en") {
        document.body.classList.remove("lang-it");
        document.body.classList.remove("lang-lv");
        document.body.classList.add("lang-en");
        lang = "en";
        document.documentElement.lang = "en";
    } else if (language === "it") {
        document.body.classList.add("lang-it");
        document.body.classList.remove("lang-lv");
        document.body.classList.remove("lang-en");
        lang = "it";
        document.documentElement.lang = "it";
    } else if (language === "lv") {
        document.body.classList.remove("lang-it");
        document.body.classList.add("lang-lv");
        document.body.classList.remove("lang-en");
        lang = "lv";
        document.documentElement.lang = "lv";
    } else {
        document.body.classList.remove("lang-it");
        document.body.classList.remove("lang-lv");
        document.body.classList.add("lang-en");
        lang = "en";
        document.documentElement.lang = "en";
    }
}

function generateMobileLayout() {
    const blocks = Array.from(document.getElementsByClassName("block"));

    const logos = document.querySelectorAll(".logos");
    for (let i = 0; i < logos.length; i++) {
        blocks.push(logos[i]);

    }

    let mobileSection = document.getElementById("mobile-section");

    blocks.forEach((block) => {
        if (!block.hasAttribute("ordernum")) {
            block.setAttribute("ordernum", 0);
        }
    });

    blocks.sort((a, b) => {
        const orderA = parseInt(a.getAttribute("ordernum"), 10);
        const orderB = parseInt(b.getAttribute("ordernum"), 10);
        return orderA - orderB;
    });

    blocks.forEach((block) => {
        mobileSection.appendChild(block.cloneNode(true));
        block.id = block.id + "-bookmark";
    });

    // mobileSection.appendChild(document.querySelector(".logos").cloneNode(true));
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

    let y =
        document.getElementById(`${item}-${lang}`).getBoundingClientRect().top +
        window.scrollY +
        yOffset;

    scrollTo({ top: y, behavior: "smooth", block: "start" });
}

function toggleBackground() {
    let background = document.getElementsByClassName("bg")[0];
    background.classList.toggle("hidden");
    let accessibility = document.getElementsByClassName("accessibility-options")[0];
    accessibility.classList.toggle("hidden");
}

function togglePause() {
    let background = document.getElementsByClassName("bg")[0];
    background.classList.toggle("paused");
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

    setLanguage(window.location.hash.substring(1));

    generateMobileLayout();

    document.getElementById("pause-toggle").addEventListener("click", togglePause);
    document.getElementById("background-toggle").addEventListener("click", toggleBackground);
});

window.scrollToTop = scrollToTop;
window.scrollToItem = scrollToItem;
