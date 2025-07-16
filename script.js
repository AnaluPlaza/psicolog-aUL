const data = {
  1: [
    { nombre: "Globalización y Realidad Nacional" },
    { nombre: "Lenguaje y Comunicación I" },
    { nombre: "Metodologías de Investigación" },
    { nombre: "Desarrollo Personal y Social" },
    { nombre: "Fundamentos de Matemática" },
    { nombre: "Ética Cívica" }
  ],
  2: [
    { nombre: "Economía y Empresa" },
    { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
    { nombre: "Procesos Sociales y Políticos" },
    { nombre: "Temas de Filosofía" },
    { nombre: "Literatura y Sociedad", requisitos: ["Lenguaje y Comunicación I"] },
    { nombre: "Arte y Cultura" }
  ],
  3: [
    { nombre: "Problemática Nacional", requisitos: ["Procesos Sociales y Políticos"] },
    { nombre: "Expresión Escrita", requisitos: ["Lenguaje y Comunicación II"] },
    { nombre: "Conducta Social" },
    { nombre: "Procesos Cognitivos Básicos" },
    { nombre: "Filosofía de la Ciencia", requisitos: ["Temas de Filosofía"] },
    { nombre: "Psicobiología Humana I" },
    { nombre: "Desarrollo de Habilidades Sociales (Electivo)", electivo: true }
  ],
  4: [
    { nombre: "Procesos Cognitivos Superiores", requisitos: ["Procesos Cognitivos Básicos"] },
    { nombre: "Desarrollo Humano I", requisitos: ["Procesos Cognitivos Básicos"] },
    { nombre: "Psicología de la Personalidad", requisitos: ["Psicobiología Humana I"] },
    { nombre: "Psicobiología Humana II", requisitos: ["Psicobiología Humana I"] },
    { nombre: "Sexualidad Humana", requisitos: ["Psicobiología Humana I"] },
    { nombre: "Historia y Sistemas Psicológicos", requisitos: ["Filosofía de la Ciencia"] }
  ],
  5: [
    { nombre: "Psicología del Aprendizaje", requisitos: ["Procesos Cognitivos Superiores"] },
    { nombre: "Desarrollo Humano II", requisitos: ["Desarrollo Humano I"] },
    { nombre: "Estadística Aplicada a la Psicología" },
    { nombre: "Técnicas de Entrevista y Observación", requisitos: ["Psicología de la Personalidad"] },
    { nombre: "Psicología de la Salud", requisitos: ["Conducta Social"] },
    { nombre: "Técnicas de Grupos", requisitos: ["Conducta Social"] }
  ],
  6: [
    { nombre: "Evaluación Psicométrica de Procesos Cognitivos", requisitos: ["Técnicas de Entrevista y Observación"] },
    { nombre: "Metodología de la Investigación Cuantitativa", requisitos: ["Estadística Aplicada a la Psicología"] },
    { nombre: "Psicopatología", requisitos: ["Psicología de la Personalidad", "Psicología de la Salud", "Sexualidad Humana"] },
    { nombre: "Comportamiento Organizacional I", requisitos: ["Técnicas de Grupos"] },
    { nombre: "Epistemología de la Psicología", requisitos: ["Historia y Sistemas Psicológicos"] },
    { nombre: "Psicología del Deporte (Electivo)", requisitos: ["Técnicas de Grupos"], electivo: true },
    { nombre: "Introducción a la Neurociencia (Electivo)", electivo: true },
    { nombre: "Introducción a la Psicología Forense (Electivo)", electivo: true }
  ],
  7: [
    { nombre: "Psicología Educativa", requisitos: ["Psicología del Aprendizaje", "Desarrollo Humano II"] },
    { nombre: "Evaluación Psicométrica de la Personalidad", requisitos: ["Evaluación Psicométrica de Procesos Cognitivos"] },
    { nombre: "Metodología de la Investigación Cualitativa", requisitos: ["Metodología de la Investigación Cuantitativa"] },
    { nombre: "Evaluación Proyectiva de la Personalidad", requisitos: ["Psicopatología"] },
    { nombre: "Comportamiento Organizacional II", requisitos: ["Comportamiento Organizacional I"] },
    { nombre: "Psicopatología y Psicofarmacología Aplicadas (Electivo)", requisitos: ["Psicopatología"], electivo: true },
    { nombre: "Gestión por Competencias (Electivo)", requisitos: ["Comportamiento Organizacional I"], electivo: true },
    { nombre: "Liderazgo (Electivo)", electivo: true },
    { nombre: "Teoría del Entrenamiento y Bases Biológicas del Deporte (Electivo)", electivo: true }
  ],
  8: [
    { nombre: "Evaluación Psicopedagógica", requisitos: ["Psicología Educativa"] },
    { nombre: "Diseño y Construcción de Instrumentos Psicológicos", requisitos: ["Evaluación Psicométrica de la Personalidad"] },
    { nombre: "Introducción a la Psicoterapia I", requisitos: ["Evaluación Proyectiva de la Personalidad"] },
    { nombre: "Psicología Comunitaria", requisitos: ["Técnicas de Grupos"] },
    { nombre: "Procesos de Recursos Humanos y Ciclo de Vida del Colaborador", requisitos: ["Comportamiento Organizacional II"] },
    { nombre: "Programas de Prevención en Ambientes Educativos (Electivo)", requisitos: ["Psicología Educativa"], electivo: true },
    { nombre: "Problemas de Aprendizaje (Electivo)", requisitos: ["Psicología Educativa"], electivo: true },
    { nombre: "Reclutamiento y Selección del Talento (Electivo)", requisitos: ["Comportamiento Organizacional II"], electivo: true },
    { nombre: "Aplicaciones de la Psicología del Deporte en Contextos Diversos (Electivo)", electivo: true }
  ],
  9: [
    { nombre: "Psicología Instruccional", requisitos: ["Evaluación Psicopedagógica"] },
    { nombre: "Diagnóstico e Informe Psicológico", requisitos: ["Evaluación Proyectiva de la Personalidad", "Evaluación Psicométrica de la Personalidad"] },
    { nombre: "Introducción a la Psicoterapia II", requisitos: ["Introducción a la Psicoterapia I"] },
    { nombre: "Estrategias e Intervención en Problemas Psicosociales", requisitos: ["Psicología Comunitaria"] },
    { nombre: "Capacitación y Desarrollo del Talento", requisitos: ["Procesos de Recursos Humanos y Ciclo de Vida del Colaborador"] },
    { nombre: "Modificación de Conducta en el Aula (Electivo)", requisitos: ["Psicología Educativa"], electivo: true },
    { nombre: "Psicología Forense (Electivo)", requisitos: ["Psicopatología"], electivo: true },
    { nombre: "Evaluación de Desempeño (Electivo)", electivo: true }
  ],
  10: [
    { nombre: "Orientación Vocacional y Ocupacional", requisitos: ["Psicología Instruccional"] },
    { nombre: "Psicología de la Excepcionalidad", requisitos: ["Diagnóstico e Informe Psicológico"] },
    { nombre: "Ética Profesional", requisitos: ["Epistemología de la Psicología"] },
    { nombre: "Diseño y Evaluación de Proyectos", requisitos: ["Diseño y Construcción de Instrumentos Psicológicos"] },
    { nombre: "Consejería Psicológica", requisitos: ["Diagnóstico e Informe Psicológico"] },
    { nombre: "Diagnóstico de Cultura y Clima Organizacional", requisitos: ["Capacitación y Desarrollo del Talento"] },
    { nombre: "Evaluación Clínica de Niños y Adolescentes (Electivo)", requisitos: ["Diagnóstico e Informe Psicológico"], electivo: true },
    { nombre: "Desarrollo Organizacional (Electivo)", requisitos: ["Capacitación y Desarrollo del Talento"], electivo: true },
    { nombre: "Neurociencia del Comportamiento Organizacional (Electivo)", electivo: true }
  ],
  11: [
    { nombre: "Seminario de Investigación I", requisitos: ["Diseño y Evaluación de Proyectos"] },
    { nombre: "Internado I" },
    { nombre: "Temas Actuales en Psicología I" },
    { nombre: "Investigación e Intervención desde las Neurociencias Aplicadas (Electivo)", electivo: true }
  ],
  12: [
    { nombre: "Seminario de Investigación II", requisitos: ["Seminario de Investigación I"] },
    { nombre: "Internado II", requisitos: ["Internado I"] },
    { nombre: "Temas Actuales en Psicología II", requisitos: ["Temas Actuales en Psicología I"] },
    { nombre: "Intervención Psicológica en el Deporte (Electivo)", electivo: true },
    { nombre: "Intervención Psicológica Forense (Electivo)", electivo: true }
  ]
};

const grid = document.getElementById("grid");

function guardarProgreso() {
  localStorage.setItem("progresoPsicologia", JSON.stringify(data));
}

function cargarProgreso() {
  const progreso = localStorage.getItem("progresoPsicologia");
  if (progreso) {
    const parsed = JSON.parse(progreso);
    for (const ciclo in parsed) {
      parsed[ciclo].forEach((curso, i) => {
        data[ciclo][i].estado = curso.estado;
      });
    }
  }
}

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "curso";
  div.dataset.state = curso.estado || "locked";
  div.innerHTML = `<h3>${curso.nombre}</h3>`;

  if (curso.requisitos) {
    const req = document.createElement("small");
    req.textContent = `Requiere: ${curso.requisitos.join(", ")}`;
    div.appendChild(req);
  }

  div.addEventListener("click", () => {
    if (div.dataset.state === "unlocked") {
      div.dataset.state = "completed";
      curso.estado = "completed";
      actualizarDesbloqueos();
      guardarProgreso();
    } else if (div.dataset.state === "completed") {
      div.dataset.state = "unlocked";
      curso.estado = "unlocked";
      actualizarDesbloqueos();
      guardarProgreso();
    }
  });

  curso.element = div;
  return div;
}

function actualizarDesbloqueos() {
  const completados = new Set();
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") {
        completados.add(curso.nombre);
      }
    });
  }

  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") return;

      if (!curso.requisitos || curso.requisitos.every((req) => completados.has(req))) {
        curso.estado = "unlocked";
        curso.element.dataset.state = "unlocked";
      } else {
        curso.estado = "locked";
        curso.element.dataset.state = "locked";
      }
    });
  }
}

function reiniciar() {
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      curso.estado = "locked";
      curso.element.dataset.state = "locked";
    });
  }
  actualizarDesbloqueos();
  guardarProgreso();
}

function render() {
  grid.innerHTML = "";
  for (const ciclo in data) {
    const columna = document.createElement("section");
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    data[ciclo].forEach((curso) => {
      const div = crearCurso(curso);
      columna.appendChild(div);
    });

    grid.appendChild(columna);
  }

  actualizarDesbloqueos();
}

cargarProgreso();
render();
