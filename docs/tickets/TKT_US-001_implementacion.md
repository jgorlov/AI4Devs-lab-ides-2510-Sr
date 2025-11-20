# Tickets de Trabajo

## Ticket 1: Diseño e Implementación de Base de Datos
**Descripción**: Crear el modelo de datos necesario para almacenar la información de los candidatos.
**Tareas**:
*   [ ] Definir el modelo `Candidate` en `schema.prisma` con los campos: `firstName`, `lastName`, `email`, `phone`, `address`, `education` (JSON), `workExperience` (JSON), `cvFilePath`.
*   [ ] Crear la migración de base de datos correspondiente.
*   [ ] Ejecutar la migración para actualizar el esquema de la base de datos PostgreSQL.
**Criterios de Aceptación**:
*   La tabla `Candidate` existe en la base de datos con las columnas correctas.
*   Se pueden insertar registros manualmente para probar.

## Ticket 2: Desarrollo del Backend API
**Descripción**: Implementar los endpoints necesarios para recibir los datos del candidato y el archivo del CV.
**Tareas**:
*   [ ] Configurar `multer` para la carga de archivos (PDF/DOCX).
*   [ ] Crear controlador `candidateController` con el método `createCandidate`.
*   [ ] Implementar validaciones en el backend (email válido, campos requeridos).
*   [ ] Crear ruta `POST /api/candidates`.
*   [ ] Integrar con Prisma Client para guardar los datos.
**Criterios de Aceptación**:
*   El endpoint acepta datos JSON y un archivo adjunto.
*   Los datos se guardan correctamente en la base de datos.
*   El archivo se guarda en el sistema de archivos (o almacenamiento configurado).
*   Retorna 201 Created en éxito y 400/500 en error.

## Ticket 3: Desarrollo del Frontend e Integración
**Descripción**: Crear la interfaz de usuario para el formulario de añadir candidato y conectarla con el backend. Incluye soporte para i18n.
**Tareas**:
*   [ ] Configurar `react-i18next` y archivos de traducción (Español/Inglés).
*   [ ] Crear componente `AddCandidateForm`.
*   [ ] Implementar campos de texto y carga de archivos.
*   [ ] Añadir validaciones de formulario (frontend).
*   [ ] Crear servicio `candidateService` para comunicar con la API.
*   [ ] Manejar estados de carga (loading), éxito y error.
*   [ ] Añadir botón de acceso en la página principal.
**Criterios de Aceptación**:
*   El usuario puede ver el formulario en Español (por defecto).
*   El usuario puede completar y enviar el formulario.
*   Se muestra mensaje de éxito o error según corresponda.
*   La validación impide enviar datos incompletos.
