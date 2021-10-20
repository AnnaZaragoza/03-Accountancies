'use strict'

// Sum columns on the tables
function sumColumnAndShowTotal(tableId, colNumber){
  let total = 0;

   const table = document.getElementById(tableId);
   const tableBody = table.getElementsByTagName("tbody").item(0);
   const i;
   const rows = tableBody.rows.length;

   for (let i=0; i<rows; i++){
     const thisTrBody = tableBody.rows[i];
     const thisTdBody = thisTrBody.cells[colNumber];
     const thisTextNode = thisTdBody.childNodes.item(0);

     const thisNumber = parseFloat(thisTextNode.data);
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
