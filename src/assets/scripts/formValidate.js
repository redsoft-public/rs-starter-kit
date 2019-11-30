import vData from './formValidateMethods';

export default function formValidate() {
    const {
        formClasses, btnSubmitDisabled, checkFormOnInit,
    } = vData;

    $(formClasses.name)
        .validate({
            rules: {
                phoneRU: {
                    phoneValid: true,
                },
                date: {
                    dateValid: true,
                },
                email: {
                    emailValid: true,
                },
                select: {
                    valueNotEquals: true,
                },
                creditcard: {
                    vmcardsonly: true,
                },
            },
            onkeyup(element) {
                btnSubmitDisabled.apply(this, [element, formClasses]);
            },
            onclick(element) {
                btnSubmitDisabled.apply(this, [element, formClasses]);
            },
            errorPlacement(error, element) {
                const type = $(element).attr('type');
                const errorContainer = $(element).parent().find('.input-text__error');

                switch (type) {
                case 'radio':
                    error.appendTo($(element)
                        .parents(formClasses.fieldRadio));
                    break;
                default:
                    errorContainer.html(error);
                    break;
                }
            },
            highlight(element) {
                const type = $(element).attr('type');

                switch (type) {
                default:
                    $(element).parent().addClass('input-text_error');
                    break;
                }
            },
            unhighlight(element) {
                const type = $(element).attr('type');

                switch (type) {
                default:
                    $(element).parent().removeClass('input-text_error');
                    break;
                }
            },
            submitHandler() {
                // eslint-disable-next-line no-alert
                alert('Форма успешно отправлена!');
            },
            errorElement: 'span',
        });

    checkFormOnInit.apply(vData);
}
