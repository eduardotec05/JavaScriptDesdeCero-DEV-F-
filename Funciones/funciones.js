let librosLeidos = [];

//funcion para agregar los libros leidos a un arreglo
function agregarLibro(libro, librosLeidos) {
  librosLeidos.push(libro);
  console.log("Se ha agregado el libro " + libro);
}

//funcion para imprimir los libros leidos
function imprimirLibrosLeidos(librosLeidos) {
  console.log(librosLeidos);
}

//funcion para imprimir los libros con un ciclo for
function imprimirLibrosLeidos2(librosLeidos) {
  for (let i = 0; i < librosLeidos.length; i++) {
    console.log(librosLeidos[i]);
  }
}

//funcion para imprimir los libros con un ciclo while
function imprimirLibrosLeidos3(librosLeidos) {
  let i = 0;
  while (i < librosLeidos.length) {
    console.log(librosLeidos[i]);
    i++;
  }
}

agregarLibro("El libro de la vida", librosLeidos);
agregarLibro("El libro de la muerte", librosLeidos);
console.log("Imprimo el arreglo con la funcion imprimirLibrosLeidos:");
imprimirLibrosLeidos(librosLeidos); //imprime el arreglo con la funcion imprimirLibrosLeidos
agregarLibro("Harry Potter", librosLeidos);
agregarLibro("A través de tu ventana", librosLeidos);
console.log("Imprimo el arreglo con un ciclo for:");
imprimirLibrosLeidos2(librosLeidos); //imprime el arreglo con la funcion utiliando un ciclo for
agregarLibro("Caperucita Roja", librosLeidos);
agregarLibro("El principito", librosLeidos);
console.log("Imprimo el arreglo con un ciclo while:");
imprimirLibrosLeidos3(librosLeidos); //imprime el arreglo con la funcion utiliando un ciclo while
