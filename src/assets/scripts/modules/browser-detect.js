export default (function browserDetect() {
    document.addEventListener('DOMContentLoaded', () => {
        if (navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1) {
            $('body')
                .addClass('ie');
        }
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            $('body')
                .addClass('touch');
        }
    });
}());
