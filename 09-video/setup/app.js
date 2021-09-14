// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.getElementsByClassName("switch-btn")[0];
const video = document.getElementsByClassName("video-container")[0];

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

const preLoader = document.getElementsByClassName("preloader")[0];
window.addEventListener("load", () => {
  preLoader.classList.add("hide-preloader");
});
