// lector.js

// 1. Verificar autenticación
if (!localStorage.getItem("usuarioActual")) {
  window.location.href = "login.html";
  throw new Error("Usuario no autenticado");
}

// 2. Asignar evento de cerrar sesión
document.querySelector(".logout-button").addEventListener("click", cerrarSesion);

// 3. Mapeo de PDFs
const pdfs = {
  rick: "../assets/description/rick.pdf",
  morty: "../assets/description/morty.pdf",
  summer: "../assets/description/summer.pdf",
  beth: "../assets/description/beth.pdf",
  jerry: "../assets/description/jerry.pdf",
  "cluster-princess": "../assets/description/cluster-princess.pdf",
  abradolf: "../assets/description/abradolf.pdf",
  adjudicator: "../assets/description/adjudicator.pdf",
  "agency-director": "../assets/description/agency-director.pdf",
  "albert-einstein": "../assets/description/albert-einstein.pdf",
  "alan-rails": "../assets/description/alan-rails.pdf",
  alexander: "../assets/description/alexander.pdf",
  "evil-morty": "../assets/description/evil-morty.pdf"
};

// 4. Leer parámetro id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("visor");

// 5. Cargar PDF o mostrar error
if (id && pdfs[id]) {
  const iframe = document.createElement("iframe");
  iframe.src = pdfs[id];
  container.appendChild(iframe);
} else {
  container.innerHTML = `
    <div class="error">
      ⚠️ No se encontró la información de este personaje.<br/>
      <a href="catalogo.html">⬅ Volver al Catálogo</a>
    </div>
  `;
}
