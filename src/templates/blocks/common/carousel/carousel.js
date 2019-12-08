import Swiper from 'swiper';

export default function () {
    const slidersCategories = [];
    $('.carousel .swiper-container')
        .each(function initCarouselHandler() {
            const t = $(this);
            const params = t.parent()
                .data('swiper');
            let dataParams = {
                effect: 'slide',
                speed: 800,
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: false,
                navigation: {
                    nextEl: t.find('.swiper-button-next')[0],
                    prevEl: t.find('.swiper-button-prev')[0],
                },
                autoHeight: true,
            };

            if (params) {
                dataParams = Object.assign(dataParams, params);
            }
            const categoriesSwiper = new Swiper(t[0], dataParams);
            slidersCategories.push(categoriesSwiper);
        });
}
