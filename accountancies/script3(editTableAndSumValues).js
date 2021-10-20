'use strict'

function editTableAndSumValues(tableId){
  const table = document.getElementById(tableId);

  const inputsOne = table.querySelectorAll('.editable-field-one');
  const inputsTwo = table.querySelectorAll('.editable-field-two');
  const inputsThree = table.querySelectorAll('.editable-field-three');

  inputsOne.forEach (input => {
    input.addEventListener('change', function(){
      let sum = 0;
      for(let i=0; i<inputsOne.length; i++){
        sum += parseFloat(inputsOne[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[1].innerHTML = sum;
    });
    input.addEventListener('input', function(){
      if(this.value.length >= 6){
        this.value = this.value.slice(0,4);
      }
    })
    input.addEventListener('click', function(){
      if(this.value == 0){
        this.value = '';
      }
    })
    input.addEventListener('blur', function(){
      if(this.value == ''){
        this.value = 0;
      }
    })
  })

  inputsTwo.forEach (input => {
    input.addEventListener('change', function(){
      let sum = 0;
      for(let i=0; i<inputsTwo.length; i++){
        sum += parseFloat(inputsTwo[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[2].innerHTML = sum;
    });
    input.addEventListener('input', function(){
      if(this.value.length >= 6){
        this.value = this.value.slice(0,4);
      }
    })
    input.addEventListener('click', function(){
      if(this.value == 0){
        this.value = '';
      }
    })
    input.addEventListener('blur', function(){
      if(this.value == ''){
        this.value = 0;
      }
    })
  })

  inputsThree.forEach (input => {
    input.addEventListener('change', function(){
      let sum = 0;
      for(let i=0; i<inputsThree.length; i++){
        sum += parseFloat(inputsThree[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[3].innerHTML = sum;
    });
    input.addEventListener('input', function(){
      if(this.value.length >= 6){
        this.value = this.value.slice(0,4);
      }
    })
    input.addEventListener('click', function(){
      if(this.value == 0){
        this.value = '';
      }
    })
    input.addEventListener('blur', function(){
      if(this.value == ''){
        this.value = 0;
      }
    })
  })
}

editTableAndSumValues("twenty-one");
editTableAndSumValues("twenty");
editTableAndSumValues("nineteen");
editTableAndSumValues("eighteen");

// Trying to convert tds elements into inputs:
/*
const table = document.getElementById('twenty-one');
const tableBody = table.getElementsByTagName('tbody').item(0);
const tds = tableBody.querySelectorAll('tr td:nth-last-child(-n+3)'); //allow editing last three tds only

for(let i=0; i<tds.length; i++) {
  tds[i].addEventListener("click", ()=>{
    console.log('you clicked me!');
    // change <td> element per <input> element:
    /*
    const replaceElement = document.getElementById('td-editable-as-input');
    const newElement = document.createElement('input');
    newElement.innerHTML = '<input type="number">';
    replaceElement.parentNode.replaceChild(newElement, replaceElement);
    */
    // change <td> elements per <input> elements: (NOT WORKING)
    /*
    const replaceElements = document.getElementsByTagName('td');
    const newElements = document.createElement('input');
    newElements.innerHTML = '<input>';
    replaceElements.parentNode.replaceChild(newElements, replaceElements);
    */
    /*
  });
}
*/
