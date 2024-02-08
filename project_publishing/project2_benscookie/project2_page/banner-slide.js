$(document).ready(function () {
    $(".vegas-image-slide").vegas({
      slides: [
        { src: "./images/banner1.jpg" },
        { src: "./images/banner2.jpg" },
        { src: "./images/banner3.jpg" },
        { src: "./images/banner4.jpg" }
      ],
      timer: true,
      delay: 8000,
      overlay: './overlays/07.png',
      shuffle: true,
      animation: 'kenburnsDownLeft'
    });
  });