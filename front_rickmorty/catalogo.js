
// 1. Verificar autenticación
if (!localStorage.getItem("usuarioActual")) {
  window.location.href = "login.html";
  throw new Error("Usuario no autenticado");
}

// 2. Lista de personajes (simulación o fetch real)
const personajes = [
  { id: "rick", nombre: "Rick", image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/90070/97752/Rick-and-Morty-Rick-Sanchez-Mini-Cardboard-Cutout-buy-now-at-starstills__32390.1678791899.jpg?c=2" },
  { id: "morty", nombre: "Morty", image: "https://sketchok.com/images/articles/01-cartoons/007-rick-and-morty/07/11.jpg" },
  { id: "summer", nombre: "Summer", image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/66303/4472085-summer_in_ricksy_business.jpg" },
  { id: "beth", nombre: "Beth", image: "https://static.tvtropes.org/pmwiki/pub/images/beth_smile.png" },
  { id: "jerry", nombre: "Jerry", image: "https://vignette.wikia.nocookie.net/ricksanchez/images/f/f6/Jerry_Smith.jpg/revision/latest?cb=20160609043244" },
  { id: "cluster-princess", nombre: "Cluster Princess", image: "https://rick-and-morty-guide.vercel.app/_next/image?url=https:%2F%2Frickandmortyapi.com%2Fapi%2Fcharacter%2Favatar%2F6.jpeg&w=256&q=75" },
  { id: "abradolf", nombre: "Abradolf", image: "https://i.pinimg.com/originals/15/17/20/1517204f2b4d32b7199c618bb29a0cd4.jpg" },
  { id: "adjudicator", nombre: "Adjudicator", image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg" },
  { id: "agency-director", nombre: "Agency Director", image: "https://static.tvmaze.com/uploads/images/medium_portrait/330/825704.jpg" },
  { id: "albert-einstein", nombre: "Albert Einstein", image: "https://static.next-episode.net/actor-images/roles/11/rick-and-morty.albert-einstein.jpg" },
  { id: "alan-rails", nombre: "Alan Rails", image: "https://i.pinimg.com/originals/10/7a/6f/107a6f69ef243b7cbb7b94d9fd3db7ab.jpg" },
  { id: "alexander", nombre: "Alexander", image: "https://ih1.redbubble.net/image.988109494.9310/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg" },
  { id: "evil-morty", nombre: "Evil Morty", image: "https://comicvine.gamespot.com/a/uploads/original/11179/111793425/9173461-evil_morty_unmortricken.jpg" }
];

// 3. Renderizar tarjetas
const contenedor = document.getElementById("catalogo");

personajes.forEach(p => {
  const card = document.createElement("div");
  card.className = "comic-card";

  const botonVer = `<button onclick="window.location.href='lector.html?id=${p.id}'">Ver Perfil</button>`;

  card.innerHTML = `
    <img src="${p.image}" alt="${p.nombre}" />
    <div class="info">
      <h3>${p.nombre}</h3>
      ${botonVer}
    </div>
  `;
  contenedor.appendChild(card);
});

// 4. Botón de cerrar sesión
document.querySelector(".logout-button")
        .addEventListener("click", cerrarSesion);
