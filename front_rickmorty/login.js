// login.js

// Al cargar la página, asociamos el evento submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const contraseña = document.getElementById('contraseña').value.trim();

  if (!email || !contraseña) {
    alert("❌ Por favor completa todos los campos.");
    return;
  }

  // Llama a la función global iniciarSesion de app.js
  if (iniciarSesion(email, contraseña)) {
    alert("✅ ¡Inicio de sesión exitoso!");
    window.location.href = "catalogo.html";
  } else {
    alert("⚠️ Correo o contraseña incorrectos.");
  }
});
