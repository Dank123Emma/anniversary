/* HEART REVEAL */
const heart = document.getElementById("heart");
const letter = document.getElementById("letter");

heart.addEventListener("click", () => {
  letter.classList.toggle("hidden");
});

/* SLIDESHOW (IMAGES + VIDEOS) */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");

  // Pause any video
  let oldVideo = slides[index].querySelector("video");
  if (oldVideo) oldVideo.pause();

  index = (index + 1) % slides.length;
  slides[index].classList.add("active");

  // Play video if present
  let newVideo = slides[index].querySelector("video");
  if (newVideo) newVideo.play();
}, 4000);

// unmute videos on click
slides.forEach(slide => {
  slide.addEventListener("click", () => {
    let video = slide.querySelector("video");
    if (video) {
      video.muted = !video.muted;
    }
  });
});


const video = document.querySelector("video");
  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 20) {
      video.pause();
    }
  });