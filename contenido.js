/* ==========================================================================
   BIO-X · CONTENIDO DE LA PÁGINA
   ==========================================================================
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR LOS TEXTOS.

   Cómo editar:
   - Cambia solo el texto que está entre comillas "así".
   - Si el texto contiene comillas dobles ", escríbelas como \"  o usa comillas simples '.
   - Una lista [ "a", "b" ] se amplía agregando otro elemento separado por coma.
   - Los "parrafos" son listas: cada elemento entre comillas es un párrafo nuevo.
   - Para cambiar una foto: pon la imagen en la carpeta img/ y escribe su nombre,
     por ejemplo  imagen: "prueba1.jpg".  Si dejas  imagen: ""  se muestra un recuadro
     indicando que falta la foto.
   - Los textos marcados con  ✏️ EDITAR  son borradores que debes revisar/completar.
   - No borres las comas ni las llaves { } [ ].
   ========================================================================== */

window.CONTENIDO = {

  /* ---------- DATOS GENERALES ---------- */
  sitio: {
    nombre: "Bio-X",
    evento: "Olimpiadas STEM+ Cochabamba 2026",
    colegio: "Esclavas del Sagrado Corazón de Jesús",
    descripcionSEO: "Bio-X: bioplástico biodegradable a base de cáscaras de papa y plátano, proyecto de las Olimpiadas STEM+ Cochabamba 2026."
  },

  /* ---------- MENÚ (el orden aquí es el orden en la barra) ---------- */
  menu: [
    { id: "inicio", titulo: "Inicio", sub: "Presentación del proyecto" },
    { id: "problema", titulo: "El problema", sub: "Contexto y necesidad" },
    { id: "biobolsa", titulo: "Nuestra biobolsa", sub: "Materiales e innovación" },
    { id: "elaboracion", titulo: "Elaboración", sub: "Investigación y fabricación" },
    { id: "funcionamiento", titulo: "Funcionamiento", sub: "Uso en los viveros" },
    { id: "pruebas", titulo: "Pruebas y resultados", sub: "Evidencia científica" },
    { id: "stem", titulo: "Impacto STEM+", sub: "Beneficios y aprendizajes" },
    { id: "equipo", titulo: "Equipo y galería", sub: "Integrantes y multimedia" }
  ],

  /* ---------- 1. INICIO ---------- */
  inicio: {
    lema: "Cuidar la Tierra no es una opción, es una responsabilidad",
    descripcion: "Nuestro proyecto consiste en crear un bioplástico que se degrada en menor tiempo que el plástico convencional, se elabora en base a ingredientes naturales como las cáscaras de papa y plátano.",
    botonPrincipal: "Mira cómo funciona",       // lleva a la sección "Funcionamiento"
    botonSecundario: "Conoce nuestro prototipo" // lleva a la sección "Nuestra biobolsa"
  },

  /* ---------- 2. EL PROBLEMA ---------- */
  problema: {
    titulo: "¿Por qué es importante?",
    destacado: "Puedes creer que una bolsa se fabrica en un segundo, se utiliza en promedio 12 minutos y contamina por siglos en el mundo.",
    imagen: "contaminacion.webp",
    imagenAlt: "Basura plástica acumulada en un cauce",
    parrafos: [
      "El problema de la contaminación por plásticos ha persistido durante mucho tiempo. Un informe de la ONU advierte la necesidad de una acción mundial urgente según una evaluación exhaustiva publicada por el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA).",
      "El estudio destaca que la contaminación por plásticos en los ecosistemas acuáticos ha crecido considerablemente en los últimos años y que posiblemente se duplique en 2030 con consecuencias de magnitud urgentes en los ámbitos de la salud, la biodiversidad y el clima."
    ]
  },

  /* ---------- 3. NUESTRA BIOBOLSA ---------- */
  biobolsa: {
    nombreProducto: "GlyFlex",
    subtituloProducto: "Nuestro bioplástico biodegradable",

    /* Las 4 pruebas del encabezado (fotos de cada muestra) */
    pruebas: [
      { titulo: "Prueba 1", imagen: "" },
      { titulo: "Prueba 2", imagen: "" },
      { titulo: "Prueba 3", imagen: "" },
      { titulo: "Prueba 4", imagen: "" }
    ],

    queEs: {
      titulo: "¿Qué es?",
      parrafos: [
        "El prototipo consiste en un bioplástico biodegradable elaborado a partir de residuos orgánicos, como almidón de las cáscaras de papa, plátano y maicena. Se busca que este material pueda degradarse en un tiempo menor que el plástico convencional, reduciendo la acumulación de residuos y la posible generación de microplásticos en el ambiente.",
        "El bioplástico podría utilizarse para fabricar bolsas, envolturas y otros productos de uso cotidiano. Además, aprovecha residuos orgánicos que normalmente se desechan, contribuyendo a disminuir la basura en Cochabamba y a promover un consumo más sostenible que beneficie al medio ambiente y a la salud de la comunidad."
      ]
    },

    ingredientes: {
      titulo: "Ingredientes",
      boton: "Descubre para qué sirve cada elemento",
      lista: [
        { nombre: "Glicerina", funcion: "Es un plastificante natural: da elasticidad y flexibilidad a la estructura del material." },
        { nombre: "Maicena", funcion: "Aporta una estructura más espesa y firme al biomaterial." },
        { nombre: "Vinagre", funcion: "Modifica el pH de la mezcla y ayuda a ajustar la flexibilidad del bioplástico." },
        { nombre: "Cáscara de papa y plátano", funcion: "Residuos orgánicos de los que se extrae el almidón, la base del bioplástico." },
        { nombre: "Agua", funcion: "Es el medio donde se disuelven y se mezclan todos los ingredientes." }
      ]
    },

    innovacion: {
      titulo: "¿Qué de innovador tiene?",
      imagen: "",                         // ✏️ EDITAR: foto de nuestro prototipo, ej. "prototipo.jpg"
      imagenAlt: "Foto de nuestro prototipo",
      parrafos: [
        "La innovación del proyecto no se limita a crear bolsas para el mercado. El prototipo busca desarrollar un bioplástico biodegradable, ya que está hecho a base de residuos orgánicos comunes, que pueda utilizarse en diferentes productos cotidianos.",
        "Además de bolsas para compras, viveros y librerías, el material podría emplearse para forrar cuadernos, elaborar envolturas o envases ligeros. De esta manera, se busca dar un uso más amplio al bioplástico y ofrecer una alternativa sostenible al plástico convencional en distintos espacios de la ciudad y, potencialmente, en otras regiones con problemas similares de residuos plásticos y orgánicos."
      ]
    }
  },

  /* ---------- 4. ELABORACIÓN ---------- */
  elaboracion: {
    titulo: "Elaboración",
    investigacion: {
      titulo: "Investigación científica",
      parrafos: [
        "Los bioplásticos de almidón se basan en que el almidón, al calentarse en presencia de agua, se gelatiniza y forma una masa que al secarse genera una película. Esa película es frágil por sí sola, por eso se le agrega un plastificante (la glicerina) que le da flexibilidad.",
        "Nuestro equipo investigó cómo obtener almidón de residuos orgánicos (cáscaras de papa y plátano) y cómo influyen la maicena, el vinagre y la glicerina en la textura, el grosor y la elasticidad del resultado." // ✏️ EDITAR: agrega tus fuentes
      ]
    },
    imagenMateriales: "materiales-horizontal.webp",
    imagenMaterialesAlt: "Materiales utilizados: vinagre, maicena y glicerina",
    imagenLaboratorio: "laboratorio.webp",
    imagenLaboratorioAlt: "Material de laboratorio",
    botonProceso: "Ve paso a paso cómo lo hacemos",

    procesoTitulo: "Proceso",
    /* ✏️ EDITAR: ajusta cada paso a lo que realmente hicieron y agrega cantidades/fotos */
    pasos: [
      { titulo: "Paso 1", texto: "Lavar y pelar las papas y los plátanos; reservar las cáscaras.", imagen: "" },
      { titulo: "Paso 2", texto: "Cocer las cáscaras en agua y triturarlas para extraer el almidón.", imagen: "" },
      { titulo: "Paso 3", texto: "Filtrar la mezcla y dejar reposar hasta separar el almidón del líquido.", imagen: "" },
      { titulo: "Paso 4", texto: "Mezclar el almidón con agua, maicena, vinagre y glicerina en las proporciones de la receta.", imagen: "" },
      { titulo: "Paso 5", texto: "Calentar a fuego bajo, removiendo, hasta que la mezcla espese y se vuelva translúcida.", imagen: "" },
      { titulo: "Paso 6", texto: "Extender en una superficie lisa y dejar secar hasta formar la película de bioplástico.", imagen: "" }
    ]
  },

  /* ---------- 5. FUNCIONAMIENTO ---------- */
  funcionamiento: {
    titulo: "Funcionamiento",
    parrafos: [
      "GlyFlex funciona como una película flexible que puede darse forma de bolsa o envoltura. Al estar hecha de almidón y glicerina, el material es de origen natural y, al terminar su vida útil, puede descomponerse más rápido que un plástico convencional.", // ✏️ EDITAR
      "Estas son algunas de las aplicaciones que imaginamos para nuestro biomaterial:"
    ],
    usos: [
      { titulo: "Bolsas para viveros", texto: "Contenedores para plantines que pueden plantarse o desecharse con menor impacto." },
      { titulo: "Empaques para libros", texto: "Envolturas y forros ligeros para libros y cuadernos." },
      { titulo: "Envases ligeros", texto: "Envolturas para productos de uso cotidiano, en reemplazo del plástico de un solo uso." }
    ]
  },

  /* ---------- 6. PRUEBAS Y RESULTADOS ---------- */
  pruebas: {
    titulo: "Pruebas y resultados",
    intro: "Con las diferentes pruebas que realizamos obtuvimos biomateriales con distintas consistencias, que pueden aplicarse en diferentes áreas.",
    /* ✏️ EDITAR: describe el resultado real de cada prueba */
    resultados: [
      { titulo: "Prueba 1", texto: "Describe aquí la consistencia obtenida (flexible, rígida, pegajosa...)." },
      { titulo: "Prueba 2", texto: "Describe aquí la consistencia obtenida." },
      { titulo: "Prueba 3", texto: "Describe aquí la consistencia obtenida." },
      { titulo: "Prueba 4", texto: "Describe aquí la consistencia obtenida." }
    ],
    dificultadesTitulo: "Nuestras dificultades y aprendizajes",
    dificultades: [   // ✏️ EDITAR
      "Lograr la proporción justa de ingredientes: la mezcla podía quedar muy quebradiza o muy pegajosa.",
      "Controlar el tiempo de secado y la temperatura."
    ],
    aprendizajes: [   // ✏️ EDITAR
      "Cada ingrediente cumple una función: ajustar sus cantidades cambia las propiedades del material.",
      "Los residuos orgánicos pueden convertirse en un recurso útil."
    ]
  },

  /* ---------- 7. IMPACTO STEM+ ---------- */
  stem: {
    titulo: "Impacto STEM+",
    /* ✏️ EDITAR: explica cómo participa cada área en tu proyecto */
    areas: [
      { letra: "S", nombre: "Science", texto: "Investigación sobre el almidón, el pH y la biodegradación de materiales." },
      { letra: "T", nombre: "Technology", texto: "Uso de herramientas y procesos para elaborar y probar el biomaterial." },
      { letra: "E", nombre: "Engineering", texto: "Diseño y mejora del prototipo para distintos usos (bolsas, empaques)." },
      { letra: "M", nombre: "Mathematics", texto: "Medición y proporciones de los ingredientes en cada prueba." }
    ]
  },

  /* ---------- 8. EQUIPO Y GALERÍA ---------- */
  equipo: {
    titulo: "¿Quiénes somos?",
    texto: "Somos estudiantes comprometidos con el cuidado del medio ambiente. Participamos en las Olimpiadas STEM+ Cochabamba 2026 con Bio-X, un bioplástico hecho con residuos orgánicos.", // ✏️ EDITAR
    integrantes: [     // ✏️ EDITAR: nombres y fotos (imagen: "nombre.jpg")
      { nombre: "Integrante 1", rol: "Rol / curso", imagen: "" },
      { nombre: "Integrante 2", rol: "Rol / curso", imagen: "" },
      { nombre: "Integrante 3", rol: "Rol / curso", imagen: "" },
      { nombre: "Integrante 4", rol: "Rol / curso", imagen: "" }
    ],
    galeriaTitulo: "Galería",
    galeria: [         // Agrega más fotos copiándolas en img/ y sumando una línea
      { imagen: "materiales-vertical.webp", alt: "Maicena, glicerina y vinagre sobre la mesa de trabajo" },
      { imagen: "laboratorio.webp", alt: "Material de laboratorio" },
      { imagen: "contaminacion.webp", alt: "Contaminación por plásticos" }
    ]
  }
};
