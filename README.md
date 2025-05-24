#App de Tareas Interactiva

Este repositorio contiene el proyecto final para la asignatura **Desarrollo de Interfaces 1º curso **, desarrollado como una aplicación web para gestionar tareas de forma sencilla,
visual y eficiente.

---

#Objetivo de la app

El objetivo es permitir a cualquier usuario agregar, visualizar, completar o eliminar tareas desde una interfaz clara, con comportamiento dinámico, navegación fluida 
y estructura organizada.

---

#Estructura y flujo

- **Pantalla 1: Agregar Tarea**
  - Formulario con campos: título (obligatorio) y descripción (opcional)
  - Botones para agregar tarea o agregar y ver lista

- **Pantalla 2: Ver Lista de Tareas**
  - Tarjetas de tareas con su título, estado y botones para completar o eliminar
  - Contador automático de tareas
  - Mensaje condicional si no hay tareas

- **Navegación**
  - Por pestañas superiores (`Agregar Tarea` y `Ver Tareas`)
  - Se cambian mediante JavaScript con la función `mostrarPantalla()`
