/* Bio-X · Construye la página a partir de contenido.js
   (No es necesario editar este archivo para cambiar textos). */
(function () {
  "use strict";
  var C = window.CONTENIDO;
  if (!C) { return; }

  /* ---------- utilidades ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    for (var k in (attrs || {})) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function img(src, alt, cls, w, h) {
    var a = { src: "img/" + src, alt: alt || "", loading: "lazy", decoding: "async" };
    if (cls) a["class"] = cls;
    if (w) a.width = w;
    if (h) a.height = h;
    return el("img", a);
  }
  /* Foto o, si falta, un recuadro indicando qué foto va ahí */
  function foto(src, alt, cls, aviso) {
    if (src) return img(src, alt, cls);
    return el("div", { "class": "ph " + (cls || ""), role: "img", "aria-label": aviso || alt || "Foto pendiente" }, [
      el("span", { text: aviso || "Foto pendiente" })
    ]);
  }
  function parrafos(arr, cls) { return (arr || []).map(function (t) { return el("p", { "class": cls || "", text: t }); }); }
  function titulo(txt, sub) {
    return el("div", { "class": "sec-head reveal" }, [
      el("h2", { text: txt }),
      sub ? el("p", { "class": "sec-sub", text: sub }) : null
    ]);
  }
  function wrap(kids) { return el("div", { "class": "wrap" }, kids); }
  function put(id, node) { document.getElementById(id).appendChild(node); }
  function irA(id) { return el("a", { href: "#" + id }); }

  /* ---------- menú ---------- */
  var nav = document.getElementById("nav");
  C.menu.forEach(function (m, i) {
    var a = el("a", { href: "#" + m.id, "data-id": m.id }, [
      el("span", { "class": "n", text: ("0" + (i + 1)).slice(-2) }),
      el("span", { "class": "t", text: m.titulo }),
      el("small", { text: m.sub })
    ]);
    nav.appendChild(a);
  });
  var burger = document.getElementById("burger");
  function cerrar() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var o = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", o ? "true" : "false");
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) cerrar(); });

  /* ---------- 1. inicio ---------- */
  var I = C.inicio;
  document.getElementById("inicio").appendChild(el("div", { "class": "hero-in" }, [
    el("div", { "class": "hero-logos" }, [
      img("logo.webp", "Logo Bio-X", "logo", 160, 202),
      img("escudo.webp", "Escudo del colegio", "escudo", 160, 202)
    ]),
    el("div", { "class": "hero-txt" }, [
      el("p", { "class": "badge", text: C.sitio.evento }),
      el("h1", { text: C.sitio.nombre }),
      el("p", { "class": "lema", text: I.lema }),
      el("p", { "class": "desc", text: I.descripcion }),
      el("div", { "class": "btns" }, [
        el("a", { "class": "btn primary", href: "#funcionamiento", text: I.botonPrincipal }),
        el("a", { "class": "btn ghost", href: "#biobolsa", text: I.botonSecundario })
      ])
    ])
  ]));

  /* ---------- 2. problema ---------- */
  var P = C.problema;
  put("problema", wrap([
    titulo(P.titulo),
    el("blockquote", { "class": "destacado reveal", text: P.destacado }),
    el("div", { "class": "split reveal" }, [
      el("div", { "class": "media" }, [foto(P.imagen, P.imagenAlt, "round")]),
      el("div", { "class": "txt" }, parrafos(P.parrafos))
    ])
  ]));

  /* ---------- 3. biobolsa ---------- */
  var B = C.biobolsa;
  var pruebasRow = el("div", { "class": "muestras reveal" }, B.pruebas.map(function (p) {
    return el("figure", { "class": "muestra" }, [
      foto(p.imagen, p.titulo, "round", "Foto de " + p.titulo),
      el("figcaption", { text: p.titulo })
    ]);
  }));

  var lista = el("ul", { "class": "ing-lista" }, B.ingredientes.lista.map(function (g) {
    return el("li", {}, [
      el("strong", { text: g.nombre }),
      el("span", { "class": "ing-fn", text: g.funcion })
    ]);
  }));
  var btnIng = el("button", { "class": "btn small", type: "button", "aria-expanded": "false", text: B.ingredientes.boton });
  btnIng.addEventListener("click", function () {
    var o = lista.classList.toggle("show");
    btnIng.setAttribute("aria-expanded", o ? "true" : "false");
  });

  put("biobolsa", wrap([
    el("div", { "class": "sec-head reveal" }, [
      el("h2", { "class": "producto", text: B.nombreProducto }),
      el("p", { "class": "sec-sub", text: B.subtituloProducto })
    ]),
    pruebasRow,
    el("div", { "class": "dos reveal" }, [
      el("article", { "class": "card" }, [el("h3", { text: B.queEs.titulo })].concat(parrafos(B.queEs.parrafos))),
      el("article", { "class": "card" }, [el("h3", { text: B.ingredientes.titulo }), lista, btnIng])
    ]),
    el("h3", { "class": "h3c reveal", text: B.innovacion.titulo }),
    el("div", { "class": "split rev reveal" }, [
      el("div", { "class": "media" }, [foto(B.innovacion.imagen, B.innovacion.imagenAlt, "round", "Foto de nuestro prototipo")]),
      el("div", { "class": "txt" }, parrafos(B.innovacion.parrafos))
    ])
  ]));

  /* ---------- 4. elaboración ---------- */
  var E = C.elaboracion;
  put("elaboracion", wrap([
    titulo(E.titulo),
    el("div", { "class": "dos reveal" }, [
      el("article", { "class": "card" }, [el("h3", { text: E.investigacion.titulo })].concat(parrafos(E.investigacion.parrafos))),
      el("div", { "class": "fotos2" }, [
        img(E.imagenMateriales, E.imagenMaterialesAlt, "round", 1000, 750),
        img(E.imagenLaboratorio, E.imagenLaboratorioAlt, "round", 740, 494)
      ])
    ]),
    el("div", { "class": "centro reveal" }, [el("a", { "class": "btn primary", href: "#proceso", text: E.botonProceso })]),
    el("h3", { "class": "h3c reveal", id: "proceso", text: E.procesoTitulo }),
    el("ol", { "class": "pasos" }, E.pasos.map(function (p, i) {
      return el("li", { "class": "paso reveal" }, [
        el("span", { "class": "num", text: String(i + 1) }),
        el("h4", { text: p.titulo }),
        foto(p.imagen, p.titulo, "round", "Foto de " + p.titulo),
        el("p", { text: p.texto })
      ]);
    }))
  ]));

  /* ---------- 5. funcionamiento ---------- */
  var F = C.funcionamiento;
  put("funcionamiento", wrap([
    titulo(F.titulo),
    el("div", { "class": "texto-centro reveal" }, parrafos(F.parrafos)),
    el("div", { "class": "tres" }, F.usos.map(function (u) {
      return el("article", { "class": "card uso reveal" }, [el("h3", { text: u.titulo }), el("p", { text: u.texto })]);
    }))
  ]));

  /* ---------- 6. pruebas ---------- */
  var R = C.pruebas;
  function ul(arr) { return el("ul", {}, arr.map(function (t) { return el("li", { text: t }); })); }
  put("pruebas", wrap([
    titulo(R.titulo),
    el("p", { "class": "texto-centro reveal", text: R.intro }),
    el("div", { "class": "cuatro" }, R.resultados.map(function (r) {
      return el("article", { "class": "card res reveal" }, [el("h3", { text: r.titulo }), el("p", { text: r.texto })]);
    })),
    el("h3", { "class": "h3c reveal", text: R.dificultadesTitulo }),
    el("div", { "class": "dos reveal" }, [
      el("article", { "class": "card warn" }, [el("h3", { text: "Dificultades" }), ul(R.dificultades)]),
      el("article", { "class": "card ok" }, [el("h3", { text: "Aprendizajes" }), ul(R.aprendizajes)])
    ])
  ]));

  /* ---------- 7. STEM+ ---------- */
  var S = C.stem;
  put("stem", wrap([
    titulo(S.titulo),
    el("div", { "class": "cuatro" }, S.areas.map(function (a) {
      return el("article", { "class": "card stem reveal" }, [
        el("span", { "class": "letra", text: a.letra }),
        el("h3", { text: a.nombre }),
        el("p", { text: a.texto })
      ]);
    }))
  ]));

  /* ---------- 8. equipo + galería ---------- */
  var Q = C.equipo;
  put("equipo", wrap([
    titulo(Q.titulo),
    el("p", { "class": "texto-centro reveal", text: Q.texto }),
    el("div", { "class": "equipo" }, Q.integrantes.map(function (m) {
      return el("figure", { "class": "persona reveal" }, [
        foto(m.imagen, m.nombre, "avatar", "Foto"),
        el("figcaption", {}, [el("strong", { text: m.nombre }), el("span", { text: m.rol })])
      ]);
    })),
    el("h3", { "class": "h3c reveal", text: Q.galeriaTitulo }),
    el("div", { "class": "galeria reveal" }, Q.galeria.map(function (g) {
      return img(g.imagen, g.alt, "round");
    }))
  ]));

  /* ---------- pie ---------- */
  document.getElementById("footer").appendChild(wrap([
    img("logo.webp", "Logo Bio-X", "logo", 56, 57),
    el("p", {}, [el("strong", { text: C.sitio.nombre + " · " }), document.createTextNode(C.sitio.evento + " · " + C.sitio.colegio)]),
    el("p", { "class": "peq", text: "Cuidar la Tierra no es una opción, es una responsabilidad." })
  ]));

  /* ---------- menú activo al hacer scroll + animaciones ---------- */
  if ("IntersectionObserver" in window) {
    var links = {};
    [].forEach.call(nav.querySelectorAll("a"), function (a) { links[a.dataset.id] = a; });
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          for (var k in links) links[k].classList.remove("active");
          if (links[e.target.id]) links[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    [].forEach.call(document.querySelectorAll("main > section"), function (s) { so.observe(s); });

    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
    }, { threshold: 0.12 });
    [].forEach.call(document.querySelectorAll(".reveal"), function (n) { ro.observe(n); });
  } else {
    [].forEach.call(document.querySelectorAll(".reveal"), function (n) { n.classList.add("in"); });
  }

  document.title = C.sitio.nombre + " · Bioplástico biodegradable · " + C.sitio.evento;
})();
