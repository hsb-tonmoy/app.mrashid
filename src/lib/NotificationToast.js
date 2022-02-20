import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function notificationToast(
	text,
	close = false,
	duration = 5000,
	gravity = 'top',
	position = 'center',
	offset = {
		x: 0,
		y: 60
	},
	style = {
		background: 'linear-gradient(to right, #d90429, #ef233c)'
	}
) {
	Toastify({
		text,
		close,
		duration,
		gravity,
		position,
		offset,
		style
	}).showToast();
}
