import vData from './formValidateMethods.js';

export default function formValidate() {
	let { formClasses, btnSubmitDisabled, validResultClasses, checkFormOnInit } = vData;

	$(formClasses.name).validate({
		rules: {
			phoneRU: {
				phoneValid: true
			},
			date: {
				dateValid: true
			},
			email: {
				emailValid: true
			},
			select: {
				valueNotEquals: true
			},
			creditcard: {
				vmcardsonly: true
			}
		},
		onkeyup: function(element, event) {
			btnSubmitDisabled.apply(this, [element, formClasses]);
		},
		onclick: function(element, event) {
			btnSubmitDisabled.apply(this, [element, formClasses]);
		},
		errorPlacement: function(error, element) {
			let type = $(element).attr('type');

			switch (type) {
				case 'radio':
					error.appendTo($(element).parents(formClasses.fieldRadio));
					break;
				default:
					error.appendTo($(element).parent(formClasses.field));
					break;
			}
		},
		highlight: function(element) {
			validResultClasses.apply(this, [element, 'highlight', formClasses]);
		},
		unhighlight: function(element) {
			validResultClasses.apply(this, [element, 'unhighlight', formClasses]);
		},
		submitHandler: function(form) {
			alert('Форма успешно отправлена!');
		}
	});

	checkFormOnInit.apply(vData);
}