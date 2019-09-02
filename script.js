var currentoperator;
var a;
var b;
function add(a, b) {
  return a + b;
}
function divi(a, b) {
  if(b != 0){
    return a / b;
  }
  return 'lol';
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  return array.reduce((current, total) => total + current, 0);
}

function multiply(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
}

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (r = 0; r < (rows * cols); r++) {
    let row = document.createElement("button");
    container.appendChild(row).className = "grid-item";
    container.appendChild(row).id ="btn";
    container.appendChild(row).innerText = r+1;
  };
  
};


makeRows(3, 3);
let row = document.createElement("button");
container.appendChild(row).id ="btn";
container.appendChild(row).className = "grid-item";
container.appendChild(row).innerText = 0;

var btns = document.querySelectorAll('#btn');
var textarea = document.getElementById('calcarea')
btns.forEach((btn) => {
  
  // and for each one we add a 'click' listener
  btn.addEventListener('click', () => {
    textarea = document.getElementById('calcarea');
    textarea.value += btn.innerText;
  });
});
var multi = document.getElementById('multiply');
multi.addEventListener('click', () => {
  if(textarea.value != null){
    a = parseFloat(textarea.value);
    currentoperator = 'multiply';
    textarea.value = null;
  }
});
var divide = document.getElementById('divide');
divide.addEventListener('click', () => {
  if(textarea.value != null){
    a = parseFloat(textarea.value);
    currentoperator = 'divide';
    textarea.value = null;
  }
});
var plus = document.getElementById('plus');
plus.addEventListener('click', () => {
  if(textarea.value != null){
    a = parseFloat(textarea.value);
    currentoperator = 'plus';
    textarea.value = null;
  }
});
var minus = document.getElementById('minus');
minus.addEventListener('click', () => {
  if(textarea.value != null){
    a = parseFloat(textarea.value);
    currentoperator = 'minus';
    textarea.value = null;
  }
});
var equals = document.getElementById('equals');
equals.addEventListener('click', () => {
  if(textarea.value != null && a != null){
    b = parseFloat(textarea.value);
    if(currentoperator == 'multiply'){
      textarea.value = multiply([a,b]);
    }
    if(currentoperator == 'divide'){
      textarea.value = divi(a,b);
    }
    if(currentoperator == 'plus'){
      textarea.value = add(a,b);
    }
    if(currentoperator == 'minus'){
      textarea.value = subtract(a,b);
    }
    currentoperator = null;
    a = null;
    b = null;
  }
});