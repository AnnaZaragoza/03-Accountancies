'use strict'

// Sum columns on the tables
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
   console.log(total);
}

sumColumnAndShowTotal("twenty-one", 1);
sumColumnAndShowTotal("twenty-one", 2);
sumColumnAndShowTotal("twenty-one", 3);
sumColumnAndShowTotal("twenty", 1);
sumColumnAndShowTotal("twenty", 2);
sumColumnAndShowTotal("twenty", 3);
sumColumnAndShowTotal("nineteen", 1);
sumColumnAndShowTotal("nineteen", 2);
sumColumnAndShowTotal("nineteen", 3);
sumColumnAndShowTotal("eighteen", 1);
sumColumnAndShowTotal("eighteen", 2);
