export function inputText() {
    $(document).on('input change focus blur', 'input', ({ target }) => {
        const input = $(target);

        if (input.val()) {
            input.addClass('js-fill');
            return;
        }

        input.removeClass('js-fill');
    });
}

export default inputText;
