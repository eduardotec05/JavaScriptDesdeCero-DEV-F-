class Libro {
  constructor(titulo, autor, año, prestado, capitulos) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.prestado = prestado;
    this.capitulos = capitulos;
  }

  describirLibro() {
    console.log(
      `El libro ${this.titulo} fue publicado por ${this.autor} en ${
        this.año
      } y ${this.prestado ? "está prestado" : "no está prestado"}. Tiene ${
        this.capitulos.length
      } capítulos.`
    );
  }
  agregarCapitulo(titulo, paginas) {
    this.capitulos.push({ titulo, paginas });
  }
}

let libro = new Libro("El libro de JavaScript", "John Doe", 2022, true, []);

libro.agregarCapitulo("Capítulo 1", 10);
libro.agregarCapitulo("Capítulo 2", 20);
libro.agregarCapitulo("Capítulo 3", 30);

libro.describirLibro();
console.log(libro.capitulos);

let libro2 = new Libro(
  "Harry Potter y el Prisionero de Azkaban",
  "JK Rowling",
  2001,
  false,
  []
);

libro2.agregarCapitulo("Capítulo 1", 16);
libro2.agregarCapitulo("Capítulo 2", 29);
libro2.agregarCapitulo("Capítulo 3", 48);

libro2.describirLibro();
console.log(libro2.capitulos);

let libro3 = new Libro(
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1612,
  true,
  []
);

libro3.agregarCapitulo("Capítulo 1", 12);
libro3.agregarCapitulo("Capítulo 2", 31);
libro3.agregarCapitulo("Capítulo 3", 39);
libro3.agregarCapitulo("Capítulo 4", 45);
libro3.agregarCapitulo("Capítulo 5", 63);
libro3.agregarCapitulo("Capítulo 6", 68);
libro3.agregarCapitulo("Capítulo 7", 75);
libro3.agregarCapitulo("Capítulo 8", 81);
libro3.agregarCapitulo("Capítulo 9", 98);
libro3.agregarCapitulo("Capítulo 10", 105);

libro3.describirLibro();
console.log(libro3.capitulos);
