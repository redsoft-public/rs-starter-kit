export default function hamburger() {
	$('.js-hamburger').click(function() {
		if ($(this).hasClass('backward')) {
			$(this).removeClass('backward').addClass('forward');
		} else if ($(this).hasClass('forward')) {
			$(this).addClass('backward');
		} else {
			$(this).addClass('forward');
		}
	});
}