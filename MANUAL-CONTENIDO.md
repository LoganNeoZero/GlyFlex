# Manual para actualizar el sitio Bio-X

Este sitio es estático: no tiene un panel de administración ni una base de datos. Los textos y las listas de fotos se editan en `contenido.js`; las imágenes se guardan dentro de `img/`. No hace falta instalar programas para hacer cambios.

## Archivos principales

| Necesitas cambiar | Archivo o carpeta |
| --- | --- |
| Textos, nombres, roles, cursos y qué fotos se muestran | `contenido.js` |
| Añadir fotos | Copia los archivos nuevos en `img/` y referencia su nombre en `contenido.js` |
| Colores y apariencia | `css/styles.css` |
| Estructura o funcionamiento (avanzado) | `index.html` y `js/main.js` |

Para las tareas de contenido de este manual, normalmente basta con editar `contenido.js` y agregar las fotos a `img/`.

## Preparar las fotografías

1. Elige fotos nítidas y recórtalas antes de subirlas para que el sujeto se vea bien en un espacio cuadrado o rectangular.
2. Guarda una copia optimizada en formato `.webp`, `.jpg` o `.png`. Procura que cada archivo pese menos de 200 KB para que la página cargue rápido.
3. Ponle un nombre corto, en minúsculas, sin espacios ni tildes. Por ejemplo: `prueba-1.webp`, `ana-equipo.jpg` o `trabajo-laboratorio.webp`.
4. Copia el archivo dentro de la carpeta `img/` del proyecto. No escribas `img/` dentro del valor `imagen`; solo el nombre del archivo.

Los nombres distinguen mayúsculas de minúsculas al publicar. `Ana.jpg` y `ana.jpg` son nombres diferentes. Revisa también la extensión: `.jpg` no es lo mismo que `.jpeg`.

## Fotos de “Nuestra biobolsa”

Abre `contenido.js` y busca el comentario `Las 4 pruebas del encabezado`. Para mostrar las fotos de las cuatro muestras, reemplaza los valores vacíos por los nombres exactos de los archivos que copiaste en `img/`:

```js
pruebas: [
  { titulo: "Prueba 1", imagen: "prueba-1.webp" },
  { titulo: "Prueba 2", imagen: "prueba-2.webp" },
  { titulo: "Prueba 3", imagen: "prueba-3.webp" },
  { titulo: "Prueba 4", imagen: "prueba-4.webp" }
],
```

También puedes cambiar `titulo` para poner el nombre que aparecerá bajo cada foto. Si todavía no tienes una foto, deja `imagen: ""`; se mostrará el recuadro que indica que falta.

La foto del prototipo en el bloque “¿Qué de innovador tiene?” se configura un poco más abajo en el mismo objeto `biobolsa`, en `innovacion.imagen`. Por ejemplo:

```js
innovacion: {
  titulo: "¿Qué de innovador tiene?",
  imagen: "prototipo-final.webp",
```

El archivo `prototipo-final.webp` debe estar también en `img/`.

## Integrantes, roles y cursos

Busca `integrantes:` dentro de la sección `equipo`. Sustituye los datos de ejemplo. El campo `rol` puede incluir tanto la responsabilidad como el curso, por ejemplo “Investigación · 5.º de secundaria”:

```js
integrantes: [
  { nombre: "Ana Pérez", rol: "Investigación · 5.º de secundaria", imagen: "ana-perez.jpg" },
  { nombre: "Luis Rojas", rol: "Diseño · 6.º de secundaria", imagen: "luis-rojas.jpg" },
  { nombre: "María López", rol: "Experimentos · 5.º de secundaria", imagen: "maria-lopez.jpg" }
],
```

Agrega las tres fotos a `img/` y asegúrate de que cada `imagen` coincida exactamente con su nombre. Para sumar una persona, duplica una línea y cambia los datos. Cada objeto debe estar separado por coma; no pongas una coma después del último objeto. Puedes cambiar también el texto de presentación en `equipo.texto`.

## Añadir o reemplazar fotos de la galería

En la misma sección `equipo`, busca `galeria:`. Cada elemento define el nombre del archivo y una descripción alternativa (`alt`), útil para accesibilidad:

```js
galeria: [
  { imagen: "materiales-vertical.webp", alt: "Materiales del experimento sobre la mesa" },
  { imagen: "laboratorio.webp", alt: "El equipo trabaja en el laboratorio" },
  { imagen: "presentacion-proyecto.jpg", alt: "Presentación del proyecto GlyFlex" }
]
```

Para reemplazar una foto, cambia `imagen` y `alt`. Para agregar otra, copia una línea, pon una coma al final de la línea anterior y completa la nueva. Guarda también el archivo nuevo en `img/`.

## Revisar antes de publicar

1. Guarda los cambios en `contenido.js` y confirma que las fotos estén en `img/`.
2. Abre `index.html` con doble clic en el navegador y visita “Nuestra biobolsa” y “Equipo y galería”.
3. Si aparece un recuadro vacío, revisa el nombre, la extensión y las mayúsculas del archivo, y que esté dentro de `img/`.
4. Si editaste el JavaScript y el navegador sigue mostrando la versión anterior, recarga la página. Un error de sintaxis (por ejemplo, una coma faltante o comillas sin cerrar) puede impedir que aparezca el contenido; compara la estructura con los ejemplos.

## Subir los cambios a GitHub

Desde la carpeta del proyecto, abre una terminal y ejecuta:

```bash
git add contenido.js img/
git commit -m "Actualiza contenido y fotografías"
git push
```

Si además modificaste otros archivos, añade todos los cambios con `git add .` antes del commit. GitHub te pedirá autenticarte si todavía no tienes configurado el acceso.

También puedes subir los cambios desde la web de GitHub: abre el repositorio `LoganNeoZero/GlyFlex`, usa **Add file → Upload files**, selecciona el archivo `contenido.js` editado y las fotos nuevas, y confirma con **Commit changes**. Las fotos deben quedar en la carpeta `img/`; al subirlas, conserva esa ruta.

## ¿Se actualiza la página automáticamente?

Sí. Como GitHub Pages está configurado para publicar desde la rama `main` y la raíz (`/`), cada `push` a `main` —o commit hecho en GitHub desde el navegador— actualiza el contenido que Pages publica. No tienes que volver a activar Pages ni ejecutar un paso manual de publicación. Espera unos minutos a que termine el despliegue. Si no ves el cambio, comprueba el estado en **Settings → Pages** y recarga el sitio; una recarga forzada también puede evitar que el navegador muestre una copia guardada en caché.

La dirección del sitio del proyecto es `https://loganneozero.github.io/GlyFlex/`.
