function ejercicio6() {
  const numero = parseInt(prompt("Ingrese un número entre 0 y 10 para ver su tabla de multiplicar:"));

  if (isNaN(numero) || numero < 0 || numero > 10) {
    alert("Por favor, ingrese un número válido entre 0 y 10.");
    return;
  }

  let mensaje = `Tabla de multiplicar del ${numero}:\n`;

  for (let i = 1; i <= 10; i++) {
    mensaje += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(mensaje);
}