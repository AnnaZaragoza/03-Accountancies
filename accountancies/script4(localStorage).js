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
var button = document.querySelector('#button');
button.addEventListener('click', function(){
  var valueDecM = document.getElementById('dec').value;
  localStorage.setItem("valueDecM", JSON.stringify(valueDecM));
});

var newValueDecM = parseInt(JSON.parse(localStorage.getItem("valueDecM")));
document.getElementById('dec').value = newValueDecM;

//var button = document.querySelector('#button');
//button.addEventListener('click', function(){
//  var table = document.getElementById("twenty-one");
//  var inputsOne = table.querySelectorAll('.editable-field-one');

//  for(var i=0; i<inputsOne.length; i++){
//    console.log(inputsOne[i].value);
    /* Trying to put the values in an array:
    var valuesM = [];
    console.log(valuesM.push(inputsOne[i].value));
    */
//  }

  //localStorage.setItem("valueDecM", JSON.stringify(valueDecM));
//});


//var newValueDecM = JSON.parse(localStorage.getItem("valueDecM"));
//document.getElementById('dec').value = parseInt(newValueDecM);
