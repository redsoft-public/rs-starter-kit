import 'jquery.nice-number/dist/jquery.nice-number';

export default function initCustomInputNumber() {
    $('input.js-custom-number[type="number"]').niceNumber();
}
