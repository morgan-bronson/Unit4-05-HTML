'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  let length = document.getElementById('length').value;
  var area = parseFloat(length) * parseFloat(length);
  alert(area)
}
