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
var button = document.querySelector('#button');
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

var colM = JSON.parse(localStorage.getItem("dataM"));
*/


// Individual value (from an ID): IT WORKS!!!
/*
var button = document.querySelector('#button');
button.addEventListener('click', function(){
  var valueDecM = document.getElementById('dec').value;
  localStorage.setItem("valueDecM", JSON.stringify(valueDecM));
});

var newValueDecM = parseInt(JSON.parse(localStorage.getItem("valueDecM")));
document.getElementById('dec').value = newValueDecM;
*/

function storeValues (tableId){
  var button = document.querySelector('#button');
  var table = document.getElementById(tableId);
  var inputsOne = table.querySelectorAll('.editable-field-one');
  var inputsTwo = table.querySelectorAll('.editable-field-two');
  var inputsThree = table.querySelectorAll('.editable-field-three');

  button.addEventListener('click', function(){
    var valuesOne = [];
    for(var i=0; i<inputsOne.length; i++){
      valuesOne.push(inputsOne[i].value);
    }
    console.log(valuesOne);

    localStorage.setItem("valuesOne", JSON.stringify(valuesOne));
  });

  var newValuesOne = JSON.parse(localStorage.getItem("valuesOne"));
  console.log(newValuesOne);
  for(var i=0; i<inputsOne.length; i++){
    inputsOne[i].append(newValuesOne);
  }

  //var table = document.getElementById("twenty-one");
  //table.querySelectorAll('.editable-field-one').value = parseFloat(newValuesOne);

  //var newValueDecM = JSON.parse(localStorage.getItem("valueDecM"));
  //document.getElementById('dec').value = parseInt(newValueDecM);
}

storeValues("twenty-one");
