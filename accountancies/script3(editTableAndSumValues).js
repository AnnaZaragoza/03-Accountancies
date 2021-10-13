'use strict'

function editTableAndSumValues(tableId){
  var table = document.getElementById(tableId);

  var inputsOne = table.querySelectorAll('.editable-field-one');
  var inputsTwo = table.querySelectorAll('.editable-field-two');
  var inputsThree = table.querySelectorAll('.editable-field-three');

  inputsOne.forEach (input => {
    input.addEventListener('change', function(){
      var sum = 0;
      for(var i=0; i<inputsOne.length; i++){
        sum += parseFloat(inputsOne[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[1].innerHTML = sum;
    });
  })

  inputsTwo.forEach (input => {
    input.addEventListener('change', function(){
      var sum = 0;
      for(var i=0; i<inputsTwo.length; i++){
        sum += parseFloat(inputsTwo[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[2].innerHTML = sum;
    });
  })

  inputsThree.forEach (input => {
    input.addEventListener('change', function(){
      var sum = 0;
      for(var i=0; i<inputsThree.length; i++){
        sum += parseFloat(inputsThree[i].value);
      }
      table.getElementsByTagName("tfoot").item(0).rows[0].cells[3].innerHTML = sum;
    });
  })
}

editTableAndSumValues("twenty-one");
editTableAndSumValues("twenty");
editTableAndSumValues("nineteen");
editTableAndSumValues("eighteen");

// Trying to convert tds elements into inputs:
/*
var table = document.getElementById('twenty-one');
var tableBody = table.getElementsByTagName('tbody').item(0);
var tds = tableBody.querySelectorAll('tr td:nth-last-child(-n+3)'); //allow editing last three tds only

for(var i=0; i<tds.length; i++) {
  tds[i].addEventListener("click", ()=>{
    console.log('you clicked me!');
    // change <td> element per <input> element:
    /*
    var replaceElement = document.getElementById('td-editable-as-input');
    var newElement = document.createElement('input');
    newElement.innerHTML = '<input type="number">';
    replaceElement.parentNode.replaceChild(newElement, replaceElement);
    */
    // change <td> elements per <input> elements: (NOT WORKING)
    /*
    var replaceElements = document.getElementsByTagName('td');
    var newElements = document.createElement('input');
    newElements.innerHTML = '<input>';
    replaceElements.parentNode.replaceChild(newElements, replaceElements);
    */
    /*
  });
}
*/
