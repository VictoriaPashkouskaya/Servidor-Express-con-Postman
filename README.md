# Ejemplo de Servidor Express con Postman
Este proyecto muestra un ejemplo básico de configuración de un servidor Express con diversas rutas para gestionar productos y usuarios. Utiliza Postman para probar y validar los endpoints de la API.

# Rutas
Ruta Raíz
URL: /
Método: GET
Acción: Muestra un mensaje de bienvenida.
Productos
URL: /productos

# GET
Acción: Muestra un mensaje: "Listado de productos".
POST
Acción: Muestra un mensaje: "Crear un producto".
PUT
Acción: Muestra un mensaje: "Actualizar un producto".
DELETE
Acción: Muestra un mensaje: "Borrar un producto".
Usuarios
URL: /usuarios

#GET
Acción: Muestra un mensaje: "Listado de usuarios".
POST
Acción: Muestra un mensaje: "Crear un usuario".
PUT
Acción: Muestra un mensaje: "Actualizar un usuario".
DELETE
Acción: Muestra un mensaje: "Borrar un usuario".
Instalación
Clonar el repositorio:

````bash
Copiar código
git clone https://github.com/tu/repo.git
````
Instalar dependencias:

```` bash
Copiar código
cd express-server-example
npm install
````
Uso
Iniciar el servidor:

```` bash
node ej2.js
 ````
# Utilizar Postman para probar los endpoints de la API listados arriba:

Abre Postman.
1. Selecciona el método (GET, POST, PUT, DELETE) para el endpoint que deseas probar.
2. Ingresa la URL correspondiente (por ejemplo, http://localhost:3000/productos).
3. Haz clic en "Send" para enviar la solicitud y ver la respuesta del servidor.

# Licencia
Este proyecto está bajo la licencia MIT - ver el archivo LICENSE para más detalles.
