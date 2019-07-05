$.validator.addMethod('phoneValid', function(phoneVal, element) {
	return this.optional(element) || phoneVal.replace(/\D+/g, '').length > 10;
}, $.validator.format('Введите полный номер телефона'));

$.validator.addMethod('dateValid', function(dateVal, element) {
	let dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
	return this.optional(element) || dateRegex.test(dateVal);
}, $.validator.format('Укажите дату в формате DD.MM.YYYY'));

$.validator.addMethod('emailValid', function(emailVal, element) {
	let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	return this.optional(element) || emailRegex.test(emailVal);
}, $.validator.format('Введите полный E-mail адресс'));

$.validator.addMethod('valueNotEquals', function(value, element, arg) {
	return this.optional(element) || arg !== value;
}, 'Выбрано пустое значение');

$.validator.addMethod('vmcardsonly', function(value, element, param) {
	value = value.replace(/\D/g, '');
	if (value.charAt(0) == 4 || value.charAt(0) == 5) {
		return this.optional(element) || value.length == 16;
	} else {
		return this.optional(element) || false;
	}
}, 'Введите правильный номер банковской карты.');

const vData = {
	formClasses: {
		name: '.form',
		field: '.js-form__field',
		fieldRadio: '.js-form__radios',
		btn: '.btn',
		btnDisabled: 'btn-disabled'
	},
	btnSubmitDisabled: function(element, formClasses) {
		let { name, btnDisabled, btn } = formClasses;
		let form = $(element).parents(name);

		if (element) $(form).validate().element(element);

		if (this.checkForm()) {
			$(form).find(btn).removeClass(btnDisabled);
		} else {
			$(form).find(btn).addClass(btnDisabled);
		}
	},
	validResultClasses: function(element, type, formClasses) {
		let radio = $(element).attr('type') == 'radio';
		let parent = radio ? formClasses.fieldRadio : formClasses.field;
		if ($(element).is('[required]')) {
			type == 'highlight'
				? $(element).parents(parent).removeClass('success').addClass('error')
				: $(element).parents(parent).removeClass('error').addClass('success');
		}
	},
	checkFormOnInit: function() {
		$(this.formClasses.name).each((index, element) => {
			let valid = $(element).validate().checkForm();
			if (!valid) {
				$(element).find(this.formClasses.btn).addClass(this.formClasses.btnDisabled);
			}
		});
	}
};
export default vData;
