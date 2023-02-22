
const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
  if (
    event.currentTarget.value.trim().length ===
    Number(event.currentTarget.dataset.length)
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
	
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
	
  }
});
