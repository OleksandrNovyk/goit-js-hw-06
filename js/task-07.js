const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

const textResizing = () => {
  onText.style.fontSize = `${rangeInput.value}px`;
  // console.log(`${rangeInput.value}px`);
};

rangeInput.addEventListener('input', textResizing);