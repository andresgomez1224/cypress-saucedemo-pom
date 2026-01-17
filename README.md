                                                Cypress E2E Automation Framework – SauceDemo

Este proyecto es un framework de automatización E2E desarrollado con Cypress, aplicando buenas prácticas de automatización como Page Object Model (POM), fixtures para datos de prueba, y una estructura modular y mantenible.

El flujo automatizado cubre todo el proceso de compra en la aplicación de pruebas SauceDemo, desde el login hasta la confirmación del pedido.

Flujo automatizado

* Login de usuario
* Selección de producto
* Agregar producto al carrito
* Checkout (llenado de formulario)
* Validación del resumen de compra
* Finalización de la compra
* Validación de mensaje de éxito

Arquitectura del proyecto

El proyecto está estructurado usando Page Object Model (POM), separando la lógica de negocio de los localizadores, lo que mejora la mantenibilidad y reutilización del código.

cypress/

 ├── e2e/              # Casos de prueba
 
 ├── pages/            # Page Objects
 
 ├── fixtures/         # Datos de prueba
 
 └── support/          # Configuraciones globales

 Tecnologías utilizadas

* Cypress
* JavaScript
* Node.js
* Page Object Model (POM)
* Fixtures
* Git & GitHub

Cómo ejecutar el proyecto

- Instalar dependencias
  
  npm install
  
- Ejecutar en modo interactivo
  
  npx cypress open
  
- Ejecutar en modo headless
  
  npx cypress run


