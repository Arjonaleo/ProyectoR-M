

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const contraseña = document.getElementById('contraseña').value.trim();

  if (!nombre || !email || !contraseña) {
    alert("❌ Todos los campos son obligatorios.");
    return;
  }

  // Llama a la función global registrarUsuario de app.js
  if (registrarUsuario(nombre, email, contraseña)) {
    window.location.href = "login.html";
  }
});
