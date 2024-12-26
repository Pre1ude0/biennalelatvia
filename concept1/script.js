const screens = [
  ["0", "0"],
  ["-100", "-80"],
  ["-20", "-120"],
];

let screenIndex = 0;
let lastScrollTop = 0;

function updateScreen(screenIndex) {
  let screen = screens[screenIndex];
  console.log(screen, screenIndex);
  document.getElementById("screen").style.transform =
    `translate(${screen[0]}vw, ${screen[1]}vh)`;
  if (
    !document
      .querySelector(`#container${screenIndex + 1}`)
      .classList.contains("visible")
  ) {
    document
      .querySelector(`#container${screenIndex + 1}`)
      .classList.add("visible");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("wheel", (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      screenIndex = Math.min(screenIndex + 1, screens.length - 1);
    } else if (event.deltaY < 0) {
      screenIndex = Math.max(screenIndex - 1, 0);
    }

    updateScreen(screenIndex);
  });
});
