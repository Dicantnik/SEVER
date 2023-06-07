    const swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        
      /*pagination: {
        el: '.reviews-dots',
        bulletActiveClass: 'reviews-dot-active',
        bulletClass: 'reviews-dot',
        clickable: true
      },*/

      navigation: {
        nextEl: '.right-swipe',
        prevEl: '.left-swipe',
      },
        breakpoints: {

            0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 50,
            },

            500: {
            centeredSlides: false,
            spaceBetween: 30,
            slidesPerView: 4,
            },
        }
  
    });
