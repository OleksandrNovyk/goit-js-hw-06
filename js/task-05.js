const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

const handleClick = event => {
    textOutput.textContent = event.currentTarget.value
    if (event.currentTarget.value.trim() === '') {
        textOutput.textContent = 'Anonymous';
    }
};
textInput.addEventListener('input', handleClick);

