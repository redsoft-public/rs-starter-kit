$.validator.addMethod('phoneValid', function phoneValid(phoneVal, element) {
    return this.optional(element) || phoneVal.replace(/\D+/g, '').length > 10;
}, $.validator.format('Введите полный номер телефона'));

$.validator.addMethod('dateValid', function dateValid(dateVal, element) {
    // eslint-disable-next-line no-useless-escape
    const dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    return this.optional(element) || dateRegex.test(dateVal);
}, $.validator.format('Укажите дату в формате DD.MM.YYYY'));

$.validator.addMethod('emailValid', function emailValid(emailVal, element) {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return this.optional(element) || emailRegex.test(emailVal);
}, $.validator.format('Введите полный E-mail адресс'));

$.validator.addMethod('valueNotEquals', function valueNotEquals(value, element, arg) {
    return this.optional(element) || arg !== value;
}, 'Выбрано пустое значение');

$.validator.addMethod('vmcardsonly', function vmcardsonly(value, element) {
    const preparedValue = value.replace(/\D/g, '');
    if (preparedValue.charAt(0) === '4' || preparedValue.charAt(0) === '5') {
        return this.optional(element) || preparedValue.length === 16;
    }
    return this.optional(element) || false;
}, 'Введите правильный номер банковской карты.');

const vData = {
    formClasses: {
        name: '.js-validate-form',
        field: '.js-validate-field',
        fieldRadio: '.js-form__radios',
        btn: '.js-btn-submit',
        btnDisabled: '',
    },
    btnSubmitDisabled(element, formClasses) {
        const { name, btn } = formClasses;
        const form = $(element)
            .parents(name);

        if (element) {
            $(form)
                .validate()
                .element(element);
        }

        if (this.checkForm()) {
            $(form)
                .find(btn)
                .prop('disabled', true);
        } else {
            $(form)
                .find(btn)
                .prop('disabled', false);
        }
    },
    validResultClasses(element, type, formClasses) {
        const radio = $(element)
            .attr('type') === 'radio';
        const parent = radio ? formClasses.fieldRadio : formClasses.field;

        if (!$(element)
            .is('[required]')) {
            return;
        }

        if (type === 'highlight') {
            $(element)
                .parents(parent)
                .removeClass('success')
                .addClass('error');
        } else {
            $(element)
                .parents(parent)
                .removeClass('error')
                .addClass('success');
        }
    },
    checkFormOnInit() {
        $(this.formClasses.name)
            .each((index, element) => {
                const valid = $(element)
                    .validate()
                    .checkForm();
                if (!valid) {
                    $(element)
                        .find(this.formClasses.btn)
                        .addClass(this.formClasses.btnDisabled);
                }
            });
    },
};
export default vData;
