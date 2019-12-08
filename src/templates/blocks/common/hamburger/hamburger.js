export default function () {
    $('.js-hamburger')
        .click(function hamburgerClickHandler() {
            if ($(this)
                .hasClass('backward')) {
                $(this)
                    .removeClass('backward')
                    .addClass('forward');
            } else if ($(this)
                .hasClass('forward')) {
                $(this)
                    .addClass('backward');
            } else {
                $(this)
                    .addClass('forward');
            }
        });
}
