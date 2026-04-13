const API_URL = "http://127.0.0.1:8000";

const formIncidente = document.getElementById("form-incidente");
const formAsignar = document.getElementById("form-asignar");
const formEstado = document.getElementById("form-estado");
const btnCargar = document.getElementById("btn-cargar");
const listaIncidentes = document.getElementById("lista-incidentes");
const mensaje = document.getElementById("mensaje");

formIncidente.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    descripcion: document.getElementById("descripcion").value,
    ubicacion: document.getElementById("ubicacion").value,
    tipo: document.getElementById("tipo").value,
    prioridad: document.getElementById("prioridad").value
  };

  const response = await fetch(`${API_URL}/incidentes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  mensaje.textContent = result.mensaje || "Incidente registrado";
  formIncidente.reset();
});

btnCargar.addEventListener("click", async () => {
  const response = await fetch(`${API_URL}/incidentes`);
  const incidentes = await response.json();

  listaIncidentes.innerHTML = "";

  incidentes.forEach((incidente) => {
    const div = document.createElement("div");
    div.className = "incidente";
    div.innerHTML = `
      <strong>ID:</strong> ${incidente.id} <br>
      <strong>Descripción:</strong> ${incidente.descripcion} <br>
      <strong>Ubicación:</strong> ${incidente.ubicacion} <br>
      <strong>Tipo:</strong> ${incidente.tipo} <br>
      <strong>Prioridad:</strong> ${incidente.prioridad} <br>
      <strong>Estado:</strong> ${incidente.estado} <br>
      <strong>Taller:</strong> ${incidente.taller ?? "No asignado"}
    `;
    listaIncidentes.appendChild(div);
  });
});

formAsignar.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("id-asignar").value;
  const data = {
    taller: document.getElementById("taller").value
  };

  const response = await fetch(`${API_URL}/incidentes/${id}/asignar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  mensaje.textContent = result.mensaje || result.detail;
  formAsignar.reset();
});

formEstado.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("id-estado").value;
  const data = {
    estado: document.getElementById("nuevo-estado").value
  };

  const response = await fetch(`${API_URL}/incidentes/${id}/estado`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  mensaje.textContent = result.mensaje || result.detail;
  formEstado.reset();
});