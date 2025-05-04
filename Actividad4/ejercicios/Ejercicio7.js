function ejercicio7() {
  let facturacionTotal = 0;
  let litrosArticulo1 = 0;
  let facturasMayores600 = 0;

  for (let i = 1; i <= 5; i++) {
    const codigo = prompt(`Factura ${i}:\nIngrese el código del artículo:`);
    const litros = parseFloat(prompt(`Factura ${i}:\nIngrese la cantidad vendida en litros:`));
    const precioPorLitro = parseFloat(prompt(`Factura ${i}:\nIngrese el precio por litro:`));

    if (isNaN(litros) > 0 || isNaN(precioPorLitro) > 0) {
      alert("Entrada inválida. Por favor ingrese valores numéricos mayores a cero.");
      i--; // Repetir la factura
      continue;
    }

    const totalFactura = litros * precioPorLitro;
    facturacionTotal += totalFactura;

    if (i == 1) {
      litrosArticulo1 = litros;
    }

    if (totalFactura > 600) {
      facturasMayores600++;
    }
  }

  const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2
  });

  const formatoLitros = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  alert(`Facturación total: ${formatoPesos.format(facturacionTotal)}`);
  alert(`Litros vendidos del artículo 1: ${formatoLitros.format(litrosArticulo1)} litros`);
  alert(`Cantidad de facturas mayores a $600: ${facturasMayores600}`);
}