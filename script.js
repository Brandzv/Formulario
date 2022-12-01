function enviarFormulario() {
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let nacimiento = document.getElementById("nacimiento").value
  let lugar = document.getElementById("lugar").value

  let datos = document.getElementById("datos")

  datos.innerHTML = `
  El nombre capturado es: ${nombre}
  <br>
  El apellido capturado es: ${apellido}
  <br>
  La fecha de nacimiento capturado es: ${nacimiento}
  <br>
  El lugar de nacimiento capturado es: ${lugar}
  `
}