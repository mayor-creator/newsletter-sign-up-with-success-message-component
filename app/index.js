const signUpContainer = document.getElementById("signUp");
const successContainer = document.getElementById("successContainer");
const userEmailInput = document.getElementById("email");
const errorMessage = document.getElementById("emailError");
const dismissButton = document.getElementById("dismiss");
const userEmailValue = document.getElementById("emailValue");
const form = document.querySelector(".formContainer");

const validateEmail = () => {
	const emailValid = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
	const valid = emailValid.test(userEmailInput.value);
	if (
		!valid ||
		userEmailInput.value.length === 0 ||
		userEmailInput.value.trim() === ""
	) {
		errorMessage.style.display = "inline";
		userEmailInput.classList.add("errorMessageInput");
	} else {
		successContainer.hidden = false;
		signUpContainer.hidden = true;
		userEmailValue.innerText = userEmailInput.value;
		errorMessage.style.display = "none";
		userEmailInput.classList.remove("errorMessageInput");
	}
	document.getElementById(".form").reset();
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	validateEmail();
});

dismissButton.addEventListener("click", () => {
	successContainer.hidden = true;
	signUpContainer.hidden = false;
	userEmailInput.value = "";
});
