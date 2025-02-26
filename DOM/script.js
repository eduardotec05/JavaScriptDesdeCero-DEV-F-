document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  let comentarioTexto = document.querySelector("#comentario").value.trim(); // Elimina espacios en blanco

  if (comentarioTexto === "") {
      alert("Por favor, ingrese un comentario válido.");
      return;
  }

  let fechaHora = new Date().toLocaleString(); // Obtiene la fecha y hora actual

  // Crear el elemento de comentario
  let comentario = document.createElement("div");
  comentario.classList.add("comentario");
  comentario.innerHTML = `
      <p><strong>${fechaHora}</strong></p>
      <p>${comentarioTexto}</p>
      <button class="eliminar">Eliminar</button>
  `;

  // Agregar el comentario al contenedor
  document.querySelector("#comentarios").appendChild(comentario);

  // Limpiar el input después de enviar
  document.querySelector("#comentario").value = "";

  // Agregar evento al botón de eliminar
  comentario.querySelector(".eliminar").addEventListener("click", function () {
      comentario.remove();
  });
});
