function ejercicio5() {
  let sumaPositivos = 0;
  let sumaNegativos = 0;
  let cantidadPositivos = 0;
  let cantidadNegativos = 0;
  let cantidadCeros = 0;

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
      i--; // Restar uno para repetir la iteración si no es un número válido.
      continue;
    }

    if (numero > 0) {
      sumaPositivos += numero;
      cantidadPositivos++;
    } else if (numero < 0) {
      sumaNegativos += numero;
      cantidadNegativos++;
    } else {
      cantidadCeros++;
    }
  }

  let mediaPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;
  let mediaNegativos = cantidadNegativos > 0 ? sumaNegativos / cantidadNegativos : 0;

  alert(`Media de los números positivos: ${mediaPositivos}`);
  alert(`Media de los números negativos: ${mediaNegativos}`);
  alert(`Cantidad de ceros: ${cantidadCeros}`);
}