'use strict'

'use strict'

function editTds (tableId){
  var table = document.getElementById(tableId);
  var tableBody = table.getElementsByTagName('tbody').item(0);
  var tds = tableBody.querySelectorAll('tr td:nth-last-child(-n+3)'); //allow editing last three tds only

  for(var i=0; i<tds.length; i++) {
    //content editable
    tds[i].contentEditable = 'true';

    //max 4 numbers editable & only integer numbers
    tds[i].addEventListener("keypress", function (e){
        if(this.innerHTML.length >= 4 || isNaN(this.innerHTML)){
            e.preventDefault();
            return false;
        }
    }, false);

    //

  }
}

editTds("twenty-one");
editTds("twenty");
editTds("nineteen");
editTds("eighteen");


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
