# Bio-X · Página web del proyecto STEM

Sitio estático (HTML + CSS + JavaScript puro). Sin base de datos, sin instalar nada, sin compilar.

**Manual detallado para agregar fotos y actualizar textos:** [MANUAL-CONTENIDO.md](MANUAL-CONTENIDO.md).

## ¿Qué archivo modifico?

| Quiero cambiar…                         | Archivo                     |
|-----------------------------------------|-----------------------------|
| **Cualquier texto** de la página        | **`contenido.js`**          |
| Una foto                                | copiarla en `img/` y poner su nombre en `contenido.js` |
| Colores                                 | `css/styles.css` (bloque `:root` al inicio) |
| Diseño / estructura (avanzado)          | `css/styles.css`, `js/main.js`, `index.html` |

`contenido.js` está dividido por secciones, en el mismo orden que el menú, con comentarios en español.
Solo cambia el texto entre comillas. Busca `✏️ EDITAR` para encontrar los borradores que debes revisar.

## Probar en tu computadora
Haz doble clic en `index.html`.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub (por ejemplo `bio-x`) y sube **el contenido** de esta carpeta (`index.html` debe quedar en la raíz).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)` → **Save**.
4. En 1-2 minutos estará en `https://TU-USUARIO.github.io/bio-x/`.

Para actualizar: edita `contenido.js` (puedes hacerlo desde la web de GitHub con el ícono del lápiz) y guarda con *Commit changes*.

## Fotos
- Formatos recomendados: `.webp` o `.jpg`, de máximo ~200 KB cada una para que la página siga rápida.
- Fotos pendientes (aparecen como recuadros punteados hasta que las agregues): Prueba 1-4, prototipo, pasos 1-6, integrantes.
