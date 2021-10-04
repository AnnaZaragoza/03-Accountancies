'use strict'

var inputs = document.querySelectorAll('input');

inputs.forEach (input => {
  input.addEventListener('change', function(){
    console.log("Ypu changed me!")
    var sum = 0;
    for(var i=0; i<inputs.length; i++){
      sum += parseFloat(inputs[i].value);
    }
    document.getElementById('total').innerHTML = sum;
  });
})
