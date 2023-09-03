const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definir la tasa de cambio fija
const tasaCambioDolarAEuro = 0.85;

// Pedir al usuario que ingrese la cantidad en dólares
rl.question('Ingresa la cantidad en dólares: ', (cantidadDolares) => {
  // Convertir la entrada del usuario a un número
  const montoDolares = parseFloat(cantidadDolares);

  if (isNaN(montoDolares)) {
    console.log('Entrada no válida. Por favor, ingresa un número válido.');
  } else {
    // Realizar el cálculo de conversión
    const montoEuros = montoDolares * tasaCambioDolarAEuro;

    // Mostrar el resultado
    console.log(`${montoDolares} dólares son ${montoEuros} euros.`);
  }

  // Cerrar la interfaz de readline
  rl.close();
});
