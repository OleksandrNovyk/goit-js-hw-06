document.body.style.backgroundColor = '#863fc7';
const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

const textResizing = () => {
  onText.style.fontSize = `${rangeMin.value}px`;
  console.log(`${rangeInput.value}px`);
};
textResizing();
rangeInput.addEventListener('input', textResizing);



// const inputControler = document.querySelector("#font-size-control"); 
// const textEl = document.querySelector("#text"); 
 
// inputControler.addEventListener("input", onChangeInputControler); 
// textEl.style.fontSize = inputControler.value + "px";
 
// function onChangeInputControler() { 
//  textEl.style.fontSize = inputControler.value + "px"; 
// };