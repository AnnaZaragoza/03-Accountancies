'use strict'

// Checking the availability of LS:
/*
if(typeof(Storage) !== 'undefined'){
  console.log('Local Storage available')
}else{
  console.log('Local Storage NOT available')
}
*/

/* First try:
const button = document.querySelector('#button');
button.addEventListener('click', function(){

  var dataM = {
    dec: document.getElementById('dec').value,
    nov: document.getElementById('nov').value,
    oct: document.getElementById('oct').value,
    sept: document.getElementById('sept').value,
    aug: document.getElementById('aug').value,
    jul: document.getElementById('jul').value,
    juny: document.getElementById('juny').value,
    may: document.getElementById('may').value,
    april: document.getElementById('april').value,
    mars: document.getElementById('mars').value,
    feb: document.getElementById('feb').value,
    jan: document.getElementById('jan').value
  }

  localStorage.setItem("dataM", JSON.stringify(dataM));
  console.log(dataM);
});

const colM = JSON.parse(localStorage.getItem("dataM"));
*/


// Individual value (from an ID): IT WORKS!!!
/*
const button = document.querySelector('#button');
button.addEventListener('click', function(){
  const valueDecM = document.getElementById('dec').value;
  localStorage.setItem("valueDecM", JSON.stringify(valueDecM));
});

const newValueDecM = parseInt(JSON.parse(localStorage.getItem("valueDecM")));
document.getElementById('dec').value = newValueDecM;
*/

function storeValues (tableId){
  const button = document.querySelector('#button');
  const table = document.getElementById(tableId);
  const inputsOne = table.querySelectorAll('.editable-field-one');
  const inputsTwo = table.querySelectorAll('.editable-field-two');
  const inputsThree = table.querySelectorAll('.editable-field-three');

  button.addEventListener('click', function(){
    let valuesOne = [];
    for(let i=0; i<inputsOne.length; i++){
      valuesOne.push(inputsOne[i].value);
    }
    console.log(valuesOne);

    localStorage.setItem("valuesOne", JSON.stringify(valuesOne));
  });

  const newValuesOne = JSON.parse(localStorage.getItem("valuesOne"));
  console.log(newValuesOne);
  for(let i=0; i<inputsOne.length; i++){
    inputsOne[i].append(newValuesOne);
  }

  //const table = document.getElementById("twenty-one");
  //table.querySelectorAll('.editable-field-one').value = parseFloat(newValuesOne);

  //const newValueDecM = JSON.parse(localStorage.getItem("valueDecM"));
  //document.getElementById('dec').value = parseInt(newValueDecM);
}

storeValues("twenty-one");
