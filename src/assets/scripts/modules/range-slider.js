import noUiSlider from 'nouislider';

export default function initRangeSlider() {
    const haveCustomRangeSliders = document.querySelector('.range-slider');

    if (haveCustomRangeSliders) {
        noUiSlider.create(document.querySelector('.range-slider'), {
            start: [20, 80],
            connect: true,
            behaviour: 'tap',
            step: 10,
            range: {
                min: 0,
                max: 100,
            },
        });
    }
}
