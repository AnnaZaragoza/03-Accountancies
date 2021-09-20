'use strict'

function editTds (tableId){
  var table = document.getElementById(tableId);
  var tableBody = table.getElementsByTagName('tbody').item(0);
  var tds = tableBody.querySelectorAll('tr td:nth-last-child(-n+3)');

  for(var i=0; i<tds.length; i++) {
    tds[i].contentEditable = 'true';
  }
}

var maxContent = document.getElementsByClassName("textfield"); 
for(i=0; i<textfields.length; i++){
    textfields[i].addEventListener("keypress", function(e) {
        if(this.innerHTML.length >= this.getAttribute("max")){
            e.preventDefault();
            return false;
        }
    }, false);
}

editTds("twenty-one");
editTds("twenty");
editTds("nineteen");
editTds("eighteen");
