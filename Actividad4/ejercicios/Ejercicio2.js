function ejercicio2() {
  const numeroSecreto = parseInt(prompt("Ingrese el número secreto:"));
  if (isNaN(numeroSecreto)) {
    alert("El número secreto debe ser un valor numérico.");
    return;
  }

  let intento;
  let contador = 0;

  do {
    intento = parseInt(prompt("Adivina el número secreto:"));
    contador++;

    if (isNaN(intento)) {
      alert("Por favor, ingresa un número válido.");
    } else if (intento < numeroSecreto) {
      alert("El número es mayor.");
    } else if (intento > numeroSecreto) {
      alert("El número es menor.");
    } else {
      alert(`¡Correcto! Adivinaste el número en ${contador} intento(s).`);
    }

  } while (intento !== numeroSecreto);
}