# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./newsLetterDesktop.png)
![Mobile](./newsLetterMobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

```js
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
```

### Continued development

- Building more JS projects
- Form validations

### Useful resources

- [How to Center a Dive](https://www.joshwcomeau.com/css/center-a-div/) - This is a wonderful article which helped me finally understand various ways of centering a div container. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@mayor-creator](https://www.frontendmentor.io/profile/mayor-creator)
- Threads - [@mayor_creator](https://www.threads.net/@mayor_creator)

## Acknowledgments
