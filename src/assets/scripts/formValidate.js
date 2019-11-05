import vData from './formValidateMethods';

export default function formValidate() {
	const {
		formClasses, btnSubmitDisabled, validResultClasses, checkFormOnInit,
	} = vData;

	$(formClasses.name).validate({
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

			switch (type) {
			case 'radio':
				error.appendTo($(element).parents(formClasses.fieldRadio));
				break;
			default:
				error.appendTo($(element).parent(formClasses.field));
				break;
			}
		},
		highlight(element) {
			validResultClasses.apply(this, [element, 'highlight', formClasses]);
		},
		unhighlight(element) {
			validResultClasses.apply(this, [element, 'unhighlight', formClasses]);
		},
		submitHandler() {
			// eslint-disable-next-line no-alert
			alert('Форма успешно отправлена!');
		},
	});

	checkFormOnInit.apply(vData);
}
