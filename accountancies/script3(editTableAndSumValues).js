'use strict'

//var contentOfTd = tdEditable.getElementById("td-editable").textContent;
//console.log(contentOfTd);

function editTds (tableId, colNumber){
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

    // sum content NOT WORKING!! - the event 'change' do not work on content editable
    /*
    tds.forEach (td => {
      td.addEventListener('change', function(){
        var sum = 0;
        for(var i=0; i<tds.length; i++){
          sum += parseFloat(tds[i].data);
        }
        table.getElementsByTagName("tfoot").item(0).rows[0].cells[colNumber].innerHTML = sum;
        console.log(sum);
      });
    });
    */
  }
}

editTds("twenty-one", 1);
editTds("twenty-one", 2);
editTds("twenty-one", 3);
editTds("twenty");
editTds("nineteen");
editTds("eighteen");
