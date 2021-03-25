const submit = document.querySelector('#submit');
const fullNameError = document.querySelector('.fullNameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');

submit.onclick = function (event) {
	event.preventDefault();
	const fullName = document.querySelector('#fullname').value.trim();
	const email = document.querySelector('#email').value.trim();
	const password = document.querySelector('#password').value.trim();

	if (fullName.length >= 1) {
		fullNameError.classList.add('hide');
		fullNameError.classList.remove('show');
	} else {
		fullNameError.classList.add('show');
		fullNameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

    if (password.length >= 12) {
		passwordError.classList.add('hide');
		passwordError.classList.remove('show');
	} else {
		passwordError.classList.add('show');
		passwordError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}