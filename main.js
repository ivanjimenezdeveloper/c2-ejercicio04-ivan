let palabras = ["café", "croissant", "tostada", "zumo"];
let palabrasParesModificadas = modificaPares(
  palabras,
  (elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1)
);
console.log(palabrasParesModificadas);
