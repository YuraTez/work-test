
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

let swiperTo = new Swiper(".mySwiper-2", {
    pagination: {
        el: ".swiper-pagination-2",
    },
});