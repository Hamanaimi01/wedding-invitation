const cover = document.querySelector(".cover");
const card = document.querySelector(".card");

let startX = 0;
let dragging = false;

cover.addEventListener("touchstart", (e) => {
  dragging = true;
  startX = e.touches[0].clientX;
});

cover.addEventListener("touchmove", (e) => {
  if (!dragging) return;

  let current = e.touches[0].clientX;
  let diff = startX - current;

  if (diff > 0) {
    cover.style.transform = `translateX(${-diff}px)`;
  }
});

cover.addEventListener("touchend", () => {
  dragging = false;

  const matrix = new DOMMatrix(getComputedStyle(cover).transform);
  const moved = Math.abs(matrix.m41);

  if (moved > 120) {
    cover.style.transition = "0.5s";
    cover.style.transform = "translateX(-120%)";

    setTimeout(() => {
      card.classList.add("show");
    }, 300);
  } else {
    cover.style.transition = "0.3s";
    cover.style.transform = "translateX(0)";
  }
});
