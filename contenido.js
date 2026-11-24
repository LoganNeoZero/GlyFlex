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
      { titulo: "Prueba 1", imagen: "Prueba 1.jpg" },
      { titulo: "Prueba 2", imagen: "Prueba 2.jpg" },
      { titulo: "Prueba 3", imagen: "Prueba 3.jpg" },
      { titulo: "Prueba 4", imagen: "Prueba 4.jpg" }
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
      imagen: "Prototipo.jpg",                         // ✏️ EDITAR: foto de nuestro prototipo, ej. "prototipo.jpg"
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
        "Para elaborar el bioplástico Glyflex, se realizó un proceso experimental basado en la observación y el control de variables. Se utilizaron almidón de papa, plátano o maicena, agua, glicerina y vinagre como materiales principales",
        "Primero, las cáscaras de papa o plátano se trituran y cuelan para obtener una mezcla rica en almidón. En el caso de la maicena, esta se disuelve previamente en agua para evitar la formación de grumos. Luego, el almidón se incorpora poco a poco a un vaso de precipitados que contiene agua, glicerina y vinagre.",
        "La mezcla se calienta en una placa calefactora con agitador magnético hasta alcanzar aproximadamente 80 °C. Se mantiene esta temperatura durante 15 a 20 minutos, con agitación constante, para favorecer la gelatinización del almidón y la integración de los componentes",
        "Finalmente, la mezcla se deja enfriar, se vierte sobre una superficie de silicona y se deja secar hasta obtener una lámina biodegradable. Durante el proceso se observaron cambios de color, textura, consistencia y flexibilidad, permitiendo analizar cómo cada ingrediente y condición influye en las propiedades del bioplástico"// ✏️ EDITAR: agrega tus fuentes
      ]
    },
    imagenMateriales: "materiales-horizontal.webp",
    imagenMaterialesAlt: "Materiales utilizados: vinagre, maicena y glicerina",
    imagenLaboratorio: "laboratorio.webp",
    imagenLaboratorioAlt: "Material de laboratorio",
    /* botonProceso: "Ve paso a paso cómo lo hacemos", */

    procesoTitulo: "Proceso",
    /* ✏️ EDITAR: ajusta cada paso a lo que realmente hicieron y agrega cantidades/fotos */
    pasos: [
      { titulo: "Paso 1", texto: "Lavar las cáscaras de plátano y/o de papa para eliminar la tierra o cualquier otra basura", imagen: "Lavar las cascaras.jpg" },
      { titulo: "Paso 2", texto: "Triturar las cáscaras lo más que se pueda para obtener una mezcla mas homogénea.", imagen: "Triturar las cascaras.jpg" },
      { titulo: "Paso 3", texto: "Filtrar la mezcla y dejar reposar hasta separar el almidón del líquido.", imagen: "Doble imagen.jpg" },
      { titulo: "Paso 4", texto: "Mezclar el almidón con agua, maicena, vinagre y glicerina en las proporciones de la receta.", imagen: "Mezclar.jpg" },
      { titulo: "Paso 5", texto: "Calentar en una Placa Calefactora Con Agitador Magnético y controlar la temperatura.", imagen: "Calentar.jpg" },
      { titulo: "Paso 6", texto: "Extender en una superficie lisa y dejar secar hasta formar el bioplástico.", imagen: "Dejar secar 1.jpg" }
    ]
  },

  /* ---------- 5. FUNCIONAMIENTO ---------- */
  funcionamiento: {
    titulo: "Funcionamiento",
    parrafos: [
      "El prototipo de bioplástico es una lámina fina, flexible y translúcida que se elabora principalmente con maicena, agua, glicerina y vinagre. Tiene una apariencia similar al papel plastificado, pero con una textura un poco más suave y menos brillante. Su color puede variar entre blanco, beige, cafe o un gris claro, dependiendo de la cantidad de maicena y de los ingredientes utilizados.",
      "La superficie del bioplástico suele ser lisa, aunque puede presentar pequeñas ondulaciones o burbujas si la mezcla no se extendió de manera uniforme. Al secarse, la lámina se vuelve sólida, pero conserva cierta flexibilidad gracias a la glicerina. Esto permite que pueda doblarse sin romperse fácilmente, aunque no resiste demasiada fuerza ni el contacto prolongado con agua.",
      "Estas son algunas de las aplicaciones que imaginamos para nuestro prototipo:"
    ],
    usos: [
      { titulo: "Bolsas para viveros", texto: "La bolsa de bioplástico funciona como un contenedor temporal para el plantín, con el tiempo, la bolsa comienza a degradarse de forma natural, permitiendo que las raíces crezcan hacia el suelo sin necesidad de retirar el material, además aporta ciertos componentes que ayudan a la fertilización de la planta como: el carbono orgánico, una mínima cantidad de minerales K, Mg, Ca y materia orgánica." },
      { titulo: "Empaques para libros", texto: "El bioplástico puede utilizarse para elaborar empaques ecológicos destinados a proteger libros durante su transporte, almacenamiento o venta. Estos empaques pueden servir como fundas, sobres, bolsas o cubiertas protectoras que ayudan a evitar el polvo, la humedad ligera y los golpes menores." },
      { titulo: "Envases ligeros", texto: "El bioplástico puede utilizarse para elaborar envases ligeros y envolturas destinados a productos de uso cotidiano, como una alternativa al plástico de un solo uso. Estos envases pueden servir para guardar artículos pequeños, útiles escolares, productos de higiene personal o elementos decorativos. " }
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
      "Hallar una forma de poder secar la mezcla sin que se quiebre, controlando el tiempo y la temperatura.",
      "Encontrar una formulación con las cantidades adecuadas para que resulte con la mayor calidad, resistencia y flexibilidad",
      "Realizar controles de calidad con respecto a la resistencia, elasticidad, durabilidad,etc. Asi como determinar el tiempo de degradación en diferentes suelos o condiciones ambientales."
    ],
    aprendizajes: [   // ✏️ EDITAR
      "La glicerina no puede sustituirse porque es un plastificante natural que aporta flexibilidad a GlyFlex.",
      "Los residuos orgánicos son un recurso valioso con potencial real de aprovechamiento.",
      "Demuestrar que es importante aplicar la experimentación para identificar falencias y mejorar el prototipo en cada prueba."
    ]
  },

  /* ---------- 7. IMPACTO STEM+ ---------- */
  stem: {
    titulo: "Impacto STEM+",
    /* ✏️ EDITAR: explica cómo participa cada área en tu proyecto */
    areas: [
      { letra: "S", nombre: "Science", texto: "Uso del método científico. Observación del comportamiento de los ingredientes. Investigación de la contaminación por plásticos y los microplásticos." },
      { letra: "T", nombre: "Technology", texto: "Manejo de la PCCAM y distintos instrumentos del laboratorio.  Utilización de la IA como una  herramienta de apoyo. Herramientas electrónicas para documentar, registrar y preparar el material para presentarnos." },
      { letra: "E", nombre: "Engineering", texto: "Diseñar, construir, probar y mejorar la fórmula del prototipo, analizando su estructura." },
      { letra: "M", nombre: "Mathematics", texto: "Cálculo de presupuesto, cantidades, proporciones temperatura, masas y ensayos comparativos." }
    ]
  },

  /* ---------- 8. EQUIPO Y GALERÍA ---------- */
  equipo: {
    titulo: "¿Quiénes somos?",
    texto: "Somos estudiantes comprometidos con el cuidado del medio ambiente. Participamos en las Olimpiadas STEM+ Cochabamba 2026 con Bio-X, un bioplástico hecho con residuos orgánicos.", // ✏️ EDITAR
    integrantes: [     // ✏️ EDITAR: nombres y fotos (imagen: "nombre.jpg")
      { nombre: "Matias Vargas", rol: "Estudiante de 4to A", imagen: "Matias.jpg" },
      { nombre: "Nayara Ramirez", rol: "Estudiante de 4to A", imagen: "Nayara.jpg" },
      { nombre: "Isabella Pozo", rol: "Estudiante de 4to A", imagen: "Isabella.jpg" },
      { nombre: "Maria Peredo", rol: "Estudiante de 4to A", imagen: "Maria.jpg" },
      { nombre: "Ing. Ivette", rol: "Tutora", imagen: "Ivette.jpg" }
    ],
    galeriaTitulo: "Galería",
    galeria: [         // Agrega más fotos copiándolas en img/ y sumando una línea
      { imagen: "materiales-vertical.webp", alt: "Maicena, glicerina y vinagre sobre la mesa de trabajo" },
      { imagen: "laboratorio.webp", alt: "Material de laboratorio" },
      { imagen: "contaminacion.webp", alt: "Contaminación por plásticos" }
    ]
  }
};
