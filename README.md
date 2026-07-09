#  Rick & Morty Character Explorer

> A vanilla JavaScript web application that consumes the [Rick and Morty REST API](https://rickandmortyapi.com/) to display and browse characters from the show.

<!-- 
   PERSONALIZA ESTO: Reemplaza esta línea con un screenshot o GIF real de tu app.
  Opción rápida: toma un screenshot, súbelo al repo en una carpeta /assets, 
  y cambia la URL abajo.
-->
![App Screenshot](assets/screenshot.png)

---

##  Live Demo

<!-- ✏️ Si haces deploy en GitHub Pages, pon aquí la URL: -->
<!-- [🚀 Ver demo en vivo](https://arjonaleo.github.io/ProyectoR-M) -->

> Deploy pendiente — clonar y abrir `index.html` para ejecutar localmente.

---

##  Features

-  Browse characters from the Rick and Morty universe
-  Fetches live data from the public REST API (no hardcoded data)
-  Dynamic rendering without page reload using JavaScript Fetch API
-  Responsive layout for desktop and mobile
<!-- ✏️ Agrega aquí cualquier feature extra que tengas, por ejemplo:
  - 🔎 Filter characters by name, status, or species
  - 📄 Pagination support
  - 🖼️ Character detail view on click
-->

---

##  Tech Stack

| Layer      | Technology              |
|-----------|-------------------------|
| Markup     | HTML5 (semantic)        |
| Styling    | CSS3                    |
| Logic      | JavaScript ES6+ (Vanilla) |
| Data       | Rick & Morty REST API   |
| Versioning | Git / GitHub            |

> No external libraries or frameworks used — pure vanilla JS to demonstrate core web fundamentals.

---

##  Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge)
- No installations required

### Run locally

```bash
# Clone the repository
git clone https://github.com/Arjonaleo/ProyectoR-M.git

# Navigate into the project folder
cd ProyectoR-M

# Open in your browser
open index.html
# Or just double-click index.html in your file explorer
```

---

##  Project Structure

```
ProyectoR-M/
├── index.html        # Main HTML entry point
├── style.css         # Global styles
├── script.js         # API fetch logic and DOM rendering
└── assets/           # Screenshots and images
```

<!-- ✏️ Ajusta esta estructura si la tuya es diferente -->

---

##  API Reference

This project consumes the **[Rick and Morty API](https://rickandmortyapi.com/)** — a free, public REST API.

```
Base URL: https://rickandmortyapi.com/api
Endpoint used: /character
```

Example response:
```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
```

---

##  Author

**Leonardo Arjona Ramírez**

- GitHub: [@Arjonaleo](https://github.com/Arjonaleo)
- LinkedIn: [linkedin.com/in/leonardo-arjona](https://linkedin.com/in/leonardo-arjona)

<!-- ✏️ Actualiza el link de LinkedIn cuando lo tengas listo -->

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
