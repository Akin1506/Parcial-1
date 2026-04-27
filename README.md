Plataforma de Emergencias Vehiculares

Descripción

Este proyecto consiste en una plataforma web orientada a la gestión de emergencias vehiculares. Permite a los usuarios reportar incidentes relacionados con sus vehículos, mientras que los técnicos pueden visualizar, aceptar y atender dichos incidentes según su disponibilidad y especialidad.

La aplicación está desarrollada con una arquitectura cliente-servidor, utilizando Angular para el frontend y Python (backend) para la lógica del sistema.

⸻

Funcionalidades principales

Usuario

* Registro e inicio de sesión
* Reporte de incidentes vehiculares
* Uso de un asistente (chat) para sugerir categoría y prioridad
* Visualización del estado del incidente
* Consulta de ubicación del técnico

Técnico

* Visualización de incidentes asignados
* Aceptar o rechazar incidentes
* Cambiar estado del servicio (en camino, en proceso, finalizado)

Administrador / Sistema

* Registro y gestión de técnicos
* Asignación automática de técnicos según disponibilidad
* Gestión de talleres
* Clasificación de incidentes por categoría y prioridad

⸻

Tecnologías utilizadas

Frontend

* Angular
* TypeScript
* HTML
* CSS

Backend

* Python
* API REST

⸻

Estructura del proyecto
Plataforma-emergencias/
│
├── backend/
│   ├── (archivos del servidor)
│
├── frontend-angular/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│
└── README.md
Instalación y ejecución

Backend

1. Ir a la carpeta backend: cd backend
2. Crear entorno virtual: python -m venv venv
3. Activar entorno virtual: venv\Scripts\activate
4. Instalar dependencias: pip install -r requirements.txt
5. Ejecutar servidor: python manage.py runserver

Frontend
1. Ir a la carpeta frontend:cd frontend-angular
2. Instalar dependencias: npm install
3. Ejecutar aplicacion: ng serve
4. Abrir en navegador: http://localhost:4200

Notas importantes

* No se incluyen carpetas como node_modules, venv o __pycache__ ya que son generadas automáticamente.
* El sistema incluye funcionalidades de prueba para simular la asignación de técnicos y la gestión de incidentes.
* El asistente IA proporciona sugerencias, pero la creación final del incidente depende del usuario.
