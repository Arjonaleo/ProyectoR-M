// app.js

// Registro
function registrarUsuario(nombre, email, contraseña) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const yaExiste = usuarios.some(u => u.email === email);
  if (yaExiste) {
    alert("⚠️ Este correo ya está registrado.");
    return false;
  }

  usuarios.push({ nombre, email, contraseña });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("✅ Usuario registrado con éxito.");
  return true;
}

// Inicio de sesión
function iniciarSesion(email, contraseña) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuario = usuarios.find(u => u.email === email && u.contraseña === contraseña);

  if (usuario) {
    localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    return true;
  }
  return false;
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioActual");
  window.location.href = "login.html";
}

// Guardar qué cómic leer
function leerComic(titulo) {
  const rutaPDF = `assets/comics/${titulo.toLowerCase().replace(/\s/g, '-')}.pdf`;
  localStorage.setItem("comicSeleccionado", rutaPDF);
  window.location.href = "lector.html";
}

// Cargar el cómic en el lector
function cargarComic() {
  const ruta = localStorage.getItem("comicSeleccionado");
  if (ruta) {
    const iframe = document.getElementById("visorComic");
    if (iframe) {
      iframe.src = ruta;
    }
  } else {
    alert("⚠️ No se ha seleccionado ningún cómic.");
    window.location.href = "catalogo.html";
  }
}
