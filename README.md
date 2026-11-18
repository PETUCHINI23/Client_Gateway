## Cliente Gateway
El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.


## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Tener levantados los microservicios que se van a consumir
5. Levantar proyecto con `npm run start:dev`

## Categorías

Rutas `/api/categories` (POST, GET con `?page=&limit=`, GET `:id`, PATCH `:id`, DELETE `:id`) hacia category-ms.
Variables: `CATEGORIES_MICROSERVICE_HOST` y `CATEGORIES_MICROSERVICE_PORT` (puerto 3003 por defecto).
