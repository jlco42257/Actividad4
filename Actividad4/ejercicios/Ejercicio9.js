let pagina = 1;
const porPagina = 100;
const columnas = 10;
const totalNumeros = 100000;
const totalPaginas = Math.ceil(totalNumeros / porPagina);

function mostrarPagina(paginaActual) {
  const tabla = document.getElementById("contador");
  tabla.style.display = "block";
  const paginacion = document.getElementById("paginacion");
  paginacion.style.display = "block";
  const spanPagina = document.getElementById("paginaActual");
  tabla.innerHTML = ""; // limpiar tabla

  const inicio = (paginaActual - 1) * porPagina;
  const fin = Math.min(inicio + porPagina, totalNumeros);

  let fila;
  for (let i = inicio; i < fin; i++) {
    const numero = i.toString().padStart(5, "0").replaceAll("3", "E");

    if ((i - inicio) % columnas === 0) {
      fila = tabla.insertRow();
    }

    const celda = fila.insertCell();
    celda.textContent = numero;
  }

  spanPagina.textContent = paginaActual;
}

function paginaAnterior() {
  if (pagina > 1) {
    pagina--;
    mostrarPagina(pagina);
  }
}

function paginaSiguiente() {
  if (pagina < totalPaginas) {
    pagina++;
    mostrarPagina(pagina);
  }
}