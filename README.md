# 📇 Contact API

API REST para la gestión de contactos personales, construida con Node.js, Express y MongoDB.

## ✨ Características

- 📝 Crear, leer, actualizar y eliminar contactos (CRUD)
- 🔍 Búsqueda y ordenamiento por nombre o email
- ✅ Validación de email y teléfono únicos
- 🌐 Soporte para CORS y logs HTTP

## ⚙️ Instalación

1. Clona el repositorio.
2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Crea un archivo `.env` con el siguiente contenido:

   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/contactdb
   ```

4. Inicia el servidor:

   ```sh
   node app.js
   ```

## 📚 Endpoints

### ➕ Crear contacto

- **POST** `/api/contactos`
- Body (JSON):

  ```json
  {
    "nombre": "Juan Pérez",
    "telefono": "123456789",
    "email": "juan@mail.com",
    "direccion": "Calle Falsa 123",
    "fechaNacimiento": "1990-01-01"
  }
  ```

### 📋 Obtener todos los contactos

- **GET** `/api/contactos`
- Parámetros opcionales:
  - `search`: busca por nombre o email
  - `sort`: `asc` o `desc` (por nombre)

### 🔎 Obtener contacto por ID

- **GET** `/api/contactos/:id`

### ✏️ Actualizar contacto

- **PUT** `/api/contactos/:id`
- Body: igual que en creación

### 🗑️ Eliminar contacto

- **DELETE** `/api/contactos/:id`

## 🗂️ Modelo de Contacto

- `nombre` (String, requerido)
- `telefono` (String, requerido, único)
- `email` (String, único, validado)
- `direccion` (String, opcional)
- `fechaNacimiento` (Date, opcional)

## 👤 Autor

- Luis Miguel Toledo La Fuente

---

¡Gracias por usar esta API! 🚀