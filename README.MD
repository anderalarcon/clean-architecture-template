# Clean Architecture Template

Repositorio base para proyectos Node.js utilizando Clean Architecture.

## Requisitos

- Node.js
- npm
- Google Cloud SDK (`gcloud`)
- `gsutil` (si el proyecto utiliza Cloud Storage)

## Instalación

```bash
npm install
```

## Configuración

Crear el archivo `.env` a partir de `.env.example`.

```bash
cp .env.example .env
```

Completa las variables de entorno según las necesidades del proyecto.

## Comandos útiles

### Crear un tópico de Pub/Sub

```bash
gcloud pubsub topics create <TOPIC_NAME>
```

### Actualizar variables de entorno de una Cloud Function

```bash
--update-env-vars KEY1=value1,KEY2=value2
```

### Descargar un archivo desde Cloud Storage

```bash
gsutil cp gs://<BUCKET>/<PATH>/<FILE> ./<FILE>
```

### Subir un archivo a Cloud Storage

```bash
gsutil -h "Cache-Control: max-age=0" cp ./<FILE> gs://<BUCKET>/<PATH>/<FILE>
```

## Notas

- Este repositorio es un **template** para proyectos Node.js.
- Agrega o elimina dependencias según las necesidades del proyecto.
- Configura los scripts de `package.json` dependiendo del tipo de aplicación (Fastify, Cloud Functions, Pub/Sub, Cloud Scheduler, etc.).
- Reemplaza este README por la documentación específica del proyecto una vez creado un nuevo repositorio desde este template.