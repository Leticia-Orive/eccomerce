# eccomerce
Instalacion de Tailwind CSS en Angular
    https://tailwindcss.com/docs/guides/angular

    1. Instalar Tailwind CSS
        Instale tailwindcssmediante npm y luego ejecute el comando init para generar un archivo. tailwind.config.js
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init
    2. Configurar las rutas de las plantillas
        Agregue las rutas a todos los archivos de plantilla en su tailwind.config.jsarchivo.
            module.exports = {
                content: [
                    "./src/**/*.{html,ts}", Esto es lo que hay que añadir
                ],
            }
    3. Añade las directivas Tailwind a tu CSS
        Agregue las @tailwinddirectivas para cada una de las capas de Tailwind a su archivo. ./src/styles.css
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    4. Comience a utilizar Tailwind en su proyecto
        Comience a utilizar las clases de utilidad de Tailwind para darle estilo a su contenido. (app.component.html)
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>

Instalacion de la extension ngxtension
    https://ngxtension.netlify.app/getting-started/introduction/
    https://ngxtension.netlify.app/getting-started/installation/

    1.Instalacion de ngxtension
        ng add ngxtension
    2. Vamos a trabajar con los signalSlice
        https://ngxtension.netlify.app/utilities/signals/signal-slice/

Creamos el componente header
    ng g c shared/ui/header -s (si pones -s se nos añade todo menos el componente.css o scss)

    1.Para poderlo utilizar necesitamos que en el app.component.ts se importe el headerComponent

Vamos a la pagina de Flowbite
    https://flowbite.com/

    1.Vamos a buscar navbar
        https://flowbite.com/docs/components/navbar/

Rutas de la aplicacion (Productos)
   1. Creamos el componente: 
        ng g c products/features/product-list -s (lista)
        ng g c products/features/product-detail -s (detalle)
    2. Para no estar añadiendo todo los productos nos vamos a esta pagina
        https://fakestoreapi.com/docs

Instalamos enviroments en angular 18 porque desde la version 16 ya lo tienes que instalar tu
    ng g environments

Instalamos eslint + prettier
    https://gist.github.com/eneajaho/17bbcf71c44eabf56d404b028572b97b
    ESLint
        ng add @angular-eslint/schematics
    Prettier
        npm install prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev 
