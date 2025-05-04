function ejercicio8() {
  const N = parseInt(prompt("¿Cuántos sueldos desea ingresar?"));

  if (isNaN(N) || N <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
    return;
  }

  let sueldoMaximo = -Infinity;

  for (let i = 1; i <= N; i++) {
    const sueldo = parseFloat(prompt(`Ingrese el sueldo ${i}:`));
    
    if (isNaN(sueldo)) {
      alert("Valor inválido. Intente de nuevo.");
      i--; // Repetir el intento actual
    } else if (sueldo > sueldoMaximo) {
      sueldoMaximo = sueldo;
    }
  }

  alert(`El sueldo máximo ingresado es: $${sueldoMaximo.toFixed(2)}`);
}