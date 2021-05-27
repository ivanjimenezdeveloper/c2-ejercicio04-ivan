let palabras = ["café", "croissant", "tostada", "zumo"];
let palabrasParesModificadas = modificaPares(
  palabras,
  (elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1)
);

/**
 * Funcion que cambia la primera letra de cada palabra a mayúscula si su posicion en la array es par
 * @param {string[]} palabras palabras que modificar
 * @param {callback} callback Función que pone la primera letra en mayúsculas
 * @returns array de strings
 */
function modificaPares(palabras, callback) {
  let palabrasModificadas = [];
  for (const indice in palabras) {
    let indiceCorregido = parseInt(indice) + 1;

    if (checkPar(indiceCorregido)) {
      palabrasModificadas.push(callback(palabras[indice]));
    } else {
      palabrasModificadas.push(palabras[indice]);
    }
  }

  return palabrasModificadas;
}

/**
 * Comprueba que sea par el numero dado
 * @param {number} number
 * @returns {boolean}
 */
function checkPar(number) {
  let resto = number % 2;

  if (resto === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(palabrasParesModificadas);
