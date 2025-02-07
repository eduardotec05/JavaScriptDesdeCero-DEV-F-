let nota = Math.floor(Math.random() * 100);
console.log("Calificación: " + nota);

if (nota >= 90 && nota <= 100) {
  console.log("Excelente");
} else if (nota >= 75 && nota < 90) {
  console.log("Bien");
} else if (nota < 75 && nota >= 60) {
  console.log("Suficiente");
} else {
  console.log("El estudiante no aprueba");
}
