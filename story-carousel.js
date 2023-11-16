$(".pdp_slider_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: "auto",
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true
    },
    freeMode: true,
    spaceBetween: 12,
    loop: true,
    breakpoints: {
      768: {
        spaceBetween: 24
      },
      0: {
        freeMode: false
      }
    }
  });
});
