function ejercicio1(){
  let mensaje = "Resultados:\n";
  let numero;

  do {
    entrada = parseInt(prompt("Ingrese un número (negativo para salir):"));
    
    if (!isNaN(entrada)) {

      numero = entrada;
      if (numero >= 0) {
        mensaje += `El cuadrado de ${numero} es ${numero * numero}\n`;
      }
      alert(mensaje);

    } else {
      alert("Por favor, solo ingrese números válidos.");
    }
  } while (numero >= 0);
}