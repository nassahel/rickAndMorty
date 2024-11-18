# Rick & Morty APP


## Tecnologías usadas:
- React.js
- JavaScript
- Axios
- React-router-dom
- Tailwind CSS
- Vite

## Caracteristicas
- Esta es una aplicación basada en la API gratuita de Rick & Morty.
- La aplicación consta de un registro e inicio de sesión. Tanto los datos de los usuarios registrados como los de la sesión iniciada se almacenan en el LocalStorage con distintas claves: los usuarios registrados se almacenan en un array de objetos y el usuario logueado se almacena como un objeto.
- Para validar el inicio de sesión, se verifica que el usuario logueado se encuentre entre los usuarios del array de usuarios registrados.
- La página tiene rutas protegidas, y solamente al validar las credenciales de un usuario se permite mostrar la página principal (Home).
- La página Home muestra los elementos consumidos de la API; tiene un buscador de personajes, un filtro por especie y un filtro por género. Así como también un botón para limpiar los filtros, el cual solo aparece cuando hay algún filtro activo. Los filtros se realizan mediante los endpoints que ofrece la API.
- El Home también tiene paginación por medio de endpoints que también ofrece la API.
- El sitio tiene otra página para creación y edición de personajes adicionales. Esta página consta de un formulario para agregar/editar personajes y un listado de los personajes agregados; los personajes también aparecen en el Home sumados a los de la API.



- [Deploy en Vercel](https://rickandmorty-nassa.vercel.app/)

