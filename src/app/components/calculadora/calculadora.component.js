// Función para calcular el interés
function calcularInteres() {
  // Obtener los valores del monto, plazo y tipo de interés
  var monto = parseFloat(document.getElementById('monto').value);
  var plazo = parseFloat(document.getElementById('plazo').value);
  var tipoInteres = parseFloat(document.getElementById('interes').value);

  // Lógica de cálculo del interés
  var interes = monto * (plazo / 12) * tipoInteres; // Calcula el interés basado en el tipo seleccionado

  // Mostrar resultado en la tabla
  var interesCalculadoElement = document.getElementById('interesCalculado');
  interesCalculadoElement.textContent = interes.toFixed(2) + ' USD'; // Muestra el interés calculado en la celda

  // Mostrar la ventana emergente con el resultado detallado
  mostrarPopup(interes);
}

// Función para mostrar la ventana emergente con el resultado detallado
function mostrarPopup(interes) {
  var popup = document.getElementById('popup');
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = 'El interés calculado es: ' + interes.toFixed(2) + ' USD'; // Muestra el resultado detallado

  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Muestra la ventana emergente
}

// Función para cerrar la ventana emergente
function cerrarPopup() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none'; // Oculta la ventana emergente
}
