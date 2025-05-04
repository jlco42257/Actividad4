function ejercicio3() {
  let producto = 1;
  let numero = 1;
  let contador = 0;
  let mensaje = "Números impares: ";

  while (contador < 10) {
    producto *= numero;
    mensaje += numero + (contador < 9 ? ", " : "");
    numero += 2;
    contador++;
  }

  alert(`${mensaje}\nProducto total: ${producto}`);
}