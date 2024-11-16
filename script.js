// Función para mostrar la pantalla de bienvenida y luego mostrar la biblioteca
document.getElementById('enter-button').addEventListener('click', function() {
  // Ocultar la pantalla de bienvenida
  document.getElementById('welcome-screen').style.display = 'none';
  
  // Mostrar la página principal
  document.getElementById('main-page').classList.remove('hidden');

  // Llamar a la función para crear las tarjetas de libros (puedes agregar tu función de libros aquí)
  crearTarjetasLibros();
});

// Función para crear las tarjetas de libros
function crearTarjetasLibros() {
  const contenedor = document.getElementById('biblioteca');
  
  libros.forEach(libro => {
      const divLibro = document.createElement('div');
      divLibro.className = 'libro';
      divLibro.innerHTML = `
          <div class="libro-interior" onclick="abrirModal(${libro.id})">
              <div class="libro-frente">
                  <img src="${libro.imagen}" alt="${libro.titulo}">
              </div>
              <div class="libro-dorso">
                  <h3>${libro.titulo}</h3>
                  <p>${libro.descripcionCorta}</p>
                  <p>Por: ${libro.autor}</p>
              </div>
          </div>
      `;
      contenedor.appendChild(divLibro);
  });
}

// Función para abrir el modal
function abrirModal(id) {
  const libro = libros.find(l => l.id === id);
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalResumen = document.getElementById('modal-resumen');
  const modalDescarga = document.getElementById('modal-descarga');

  modalTitulo.textContent = libro.titulo;
  modalResumen.textContent = libro.resumenLargo;
  modalDescarga.onclick = () => window.location.href = libro.enlaceDescarga;

  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
}
