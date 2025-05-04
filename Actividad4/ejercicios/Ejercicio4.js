function ejercicio4() {
  const entrada = parseInt(prompt("Ingrese un número para calcular su factorial:"));

  if (isNaN(entrada) || entrada < 0) {
    alert("Por favor, ingrese un número entero no negativo.");
    return;
  }

  let factorial = 1;
  let mensaje = `${entrada}! = `;

  for (let i = 1; i <= entrada; i++) {
    factorial *= i;
    mensaje += (i < entrada) ? `${i} x ` : `${i}`;
  }

  alert(`${mensaje} = ${factorial}`);
}