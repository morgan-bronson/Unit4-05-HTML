'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  let length = 0
  let area = 0
  length = document.getElementById('length').value
  area = parseFloat(length) * parseFloat(length)
  alert(area)
}
