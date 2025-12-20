# Proyecto: Buscador de Bebidas y Recetas

- **_npm i create vite@latest_**

## Herramientas /o Tecnologías

- React
- TypeScript
- Vite
- TailwindCSS
  - **_npm i tailwindcss @tailwindcss/vite_**
  - ### Notas
    - Para configurar una IMG con las clases del _framework_, se realiza una configuración en el archivo:
      - **tailwindcss.config.js**
    - Sino tenemos ese archivo y tenemos la versión: ** > 3**, entonces debemos configurar en_
      - **vite.config.ts**
    - En este proyecto, por la versión, no se configuró en esa parte nada, se agrego la clase únicamente en el archivo:
      - **index.css**
    - ```
      .bg-header {
        background-image: url("/bg.jpg");
      }
    ```
    - Y ya solo se manda a llamar la clase donde la requerimos.
- React Router DOM
  - **_npm i react-router-dom_**
  - _React Router_ es una de las librerías más comunes a la hora de crear aplicaciones de múltiples páginas y navegación.
  - _React Router_ es de los creadores de _Remix Run_.
  - En las últimas versiones es prácticamente un framework de _React_.
  - ### Características
    - _React Router_ te permitirá crear secciones con diferentes _urls_ tales como:
      - _/tienda_
      - _/productos_
      - _/login_
      - etc
    - En versiones recientes agregaron la posibilidad de consultar _API'S_ y procesar formularios pero estas características son opcionales.
- Zustand
  - **_npm i zustand_**
  - ## Múltiples Stores en Zustand
    - Conforme tus _apps_ van creciendo o son más complejas, tu store también puede crecer.
    - Existen 2 opciones para manejar múltiples _store_: crear diferentes _stores_ o dividirlos utilizando el _Slice Pattern_.
    - _Slice Pattern_ es algo que también encuentras en _Redux Tollkit_ y es una forma de dividir tus _stores_ en pequeñas piezas y unirlas en un _store_ principal.
    - 