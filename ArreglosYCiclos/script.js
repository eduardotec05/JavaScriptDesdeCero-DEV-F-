let frutas = [
  "manzana",
  "pera",
  "limón",
  "manzana",
  "pera",
  "limón",
  "manzana",
  "pera",
  "limón",
  "mango",
  "kiwi",
];

// Usando un ciclo for
let contadorFrutas = {}; // Creamos un objeto vacío

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];
  contadorFrutas[fruta] = (contadorFrutas[fruta] || 0) + 1; // Si el fruta no existe en el objeto, lo creamos con un valor de 0 y luego le sumamos 1
}

console.log("Conteo de frutas usando for: ", contadorFrutas); // { manzana: 3, pera: 3, limón: 3, mango: 1, kiwi: 1 }

// Usando un ciclo while
let contadorFrutas2 = {}; // Creamos un objeto vacío

let i = 0;
while (i < frutas.length) {
  let fruta = frutas[i];
  contadorFrutas2[fruta] = (contadorFrutas2[fruta] || 0) + 1; 
  i++;
}

console.log("Conteo de frutas usando while: ", contadorFrutas2);
