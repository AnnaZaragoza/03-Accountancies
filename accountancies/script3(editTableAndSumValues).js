'use strict'

function editTds (tableId){
  var table = document.getElementById(tableId);
  var tableBody = table.getElementsByTagName('tbody').item(0);
  var tds = tableBody.querySelectorAll('tr td:nth-last-child(-n+3)'); // allow editing last three tds only

  for(var i=0; i<tds.length; i++) {
    // content editable
    tds[i].contentEditable = 'true';

    // max 4 characters editable
    tds[i].addEventListener('keypress', function(e){
      if(this.innerHTML.length >= 4) {
        e.preventDefault();
        return false;
      }
    }, false);

    // only type integer numbers
    tds[i].addEventListener('keydown', e=> {
      var keys = event.charCode || event.keyCode;
      if(isNaN(String.fromCharCode(e.which)) && keys!=46 && keys!=8 && !e.key.match(/^[0-9]/g)){
        e.preventDefault();
      }
    });
  }
}

editTds("twenty-one");
editTds("twenty");
editTds("nineteen");
editTds("eighteen");

// Trying to integrate this function when the content of the tds are changing:
function sumColumnAndShowTotal(tableId, colNumber){
  var total = 0;

   var table = document.getElementById(tableId);
   var tableBody = table.getElementsByTagName("tbody").item(0);
   var i;
   var rows = tableBody.rows.length;

   for (i=0; i<rows; i++){
     var thisTrBody = tableBody.rows[i];
     var thisTdBody = thisTrBody.cells[colNumber];
     var thisTextNode = thisTdBody.childNodes.item(0);

     var thisNumber = parseFloat(thisTextNode.data);
     total += thisNumber;
   }

   table.getElementsByTagName("tfoot").item(0).rows[0].cells[colNumber].innerHTML = total;
}


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
