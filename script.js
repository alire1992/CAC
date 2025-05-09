const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const video = document.querySelector(".video");
const videoBar = document.querySelector(".video-bar");
const btn = document.querySelector(".buttons i");

menu.addEventListener("click", function (e) {
  navbar.classList.toggle("change");
  e.currentTarget.classList.toggle("change");
});

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
    video.style.opacity = "0.8";
  } else {
    video.pause();
    btn.classList.remove("fa-pause-circle");
    btn.classList.add("fa-play-circle");
    video.style.opacity = "0.3";
  }
};

btn.addEventListener("click", playPause);

video.addEventListener("timeupdate", function () {
  const videoBarWidth = (video.currentTime / video.duration) * 100;
  videoBar.style.width = `${videoBarWidth}%`;
  if (video.ended) {
    btn.classList.remove("fa-pause-circle");
    btn.classList.add("fa-play-circle");
    video.style.opacity = "0.3";
    videoBar.style.width = 0;
  }
});

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
