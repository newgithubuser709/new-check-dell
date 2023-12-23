const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 660,
    slidesPerView: 1.1,
    spaceBetween: -5,
    centeredSlides: true,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});