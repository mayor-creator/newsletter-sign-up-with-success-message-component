const signUpContainer = document.getElementById("signUp");
const successContainer = document.getElementById("successContainer");
const userEmailInput = document.getElementById("email");
const errorMessage = document.getElementById("emailError");
const submitButton = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss");
const userEmailValue = document.getElementById("emailValue");

const emailValid = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
