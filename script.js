'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  const length = document.getElementById('length').value
  const area = parseFloat(length) * parseFloat(length)
  alert(area)
}
