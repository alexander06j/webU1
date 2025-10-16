# Proyecto Programación Web U1

## Datos Pesonales
Alumno: Jostin Matamoros

Carrera: Software

Docente:

Unidad: 1. Diseño y Creación de Páginas Web.

## Pasos realizados durante la actividad (1-2)
1. Se clonó el proyecto original mediante le herramienta git, con ayuda de Visual Studio Code. A continuación se descripe el paso a paso:

- Se creó una carpeta base, la cual contendrá el proyecto clonado. En este caso la llamé "ProyectoClon".

- Abrimos la carpeta dentro del Visual Studio Code, posteriormente se abre la terminal y ejecutamos el comando "git init"

- Luego, copiamos la URL del proyecto original (https://github.com/cs-aplicaciones-web/contenidos.git); y escribimos el comando: git remote add origin [LINK]

- Seguidamente, el comando "git config core.sparseCheckout true", junto a "git sparse-checkout set [Folder]" en donde se selecciona la carpeta a clonar dentro del proyecto original

- En nuestro caso, seleccionamos la carpeta ubicada en contenidos/unidad-01/clase-05/codigo-1_44/

- Finalmente, se realiza un pull mediante el codigo: git pull origin main

Esto clonará correctamente la carpeta del proyecto, sin necesidad de copiar todo el repositorio completo, sino unicamente lo necesario para el desarrollo de esta actividad.

- en caso de no haber entendido, o con el fin de obtener más ayuda, comparto el siguiente link el cual indica todo el proceso realizado en el paso 1: https://youtu.be/w_KsPfj3BI4?si=B5JmOnq8bmkDpE9A

2. Con el fin de obtener la URL de este repositorio, se procede a subir este proyecto a GitHub. 

3. Redifinir la estructura del archivo peliculas.json
- Se incluyó en el archivo json el campo estreno (fecha ISO), y un objeto precio con los valores para estreno y normal. Ademas, se cambio el campo  genero, ahora se establece como un arreglo el cual puede contener varios géneros.

>** Ejemplo Json antes:
>*   {
    "id": 1,
    "titulo": "Dune",
    "imagen": "dune.jpg",
    "genero": "Aventura",
    "sinopsis": "Un joven emprende una misión para salvar su mundo.",
    "trailer": "https://www.youtube.com/embed/mSY_NbSmaUI"
  },

>** Ejemplo Json ahora, con los cambios aplicados:
>*   {
    "id": 1,
    "titulo": "Dune",
    "imagen": "dune.jpg",
    "generos": "Aventura",
    "sinopsis": "Un joven emprende una misión para salvar su mundo.",
    "trailer": "https://www.youtube.com/embed/mSY_NbSmaUI",
    "estreno": "2025-10-10T00:00:00Z",
    "precios": {
      "estreno": 7.50,
      "normal": 5.50
    }
  },

- Despues de realizar estos cambios, ahora vamos al js, allí se realizaron algunos ajustes como: 
 1. Obtener la fecha actual y compararla mediante un new Date();

 2. Asignar el precio segun corresponda y crear una etiqueta visual en donde indique si la pelicula es un “Próximo Estreno” o está “En Cartelera”.


## Agregar nuevas Películas
1. Agregar al menos 5 películas nuevas.
- Se agregaron un total de 6 películas nuevas, junto a su respectivos datos (portada, vídeo y sinopsis de al menos 60 palabras).

- Para las portadas se utilizó el formato jpg, mientras que en los vídeos utilicé  https://www.youtube.com/embed/VIDEO_ID y no  la URL estándar de YouTube. A continuación dejo un ejemplo:

>*  {
    "imagen": "killBill2.jpg",
    "sinopsis": "Kill Bill: Volumen 2 es una película de acción y suspense estadounidense escrita y dirigida por Quentin Tarantino. La Novia, interpretada por Uma Thurman, busca venganza contra los asesinos que intentaron matarla durante su boda. Después de eliminar a sus enemigos, se centra en matar a Bill, su antiguo jefe. La película destaca por su estilo de dirección.",
    "trailer": "https://www.youtube.com/embed/q2h6EFk36kI",
    }

## Simulación de carga AJAX 
- Como siguiente paso, se simuló un retraso de 5 segundos en la web al momento de cargar la pagina por primera vez. Para lograr esto seguimos una serie de procedimientos detallados a continuación:
1. En el HTML colocamos un spinner, dentro del spinner definimos el texto que se va a mostrar en pantalla.

2. Siguiente, ocultamos la el spinner en el CSS:
  #spinner {
    display : none;
  }

3. En el main de nuestro proyecto (app.js) agregamos este retraso aritificial de 5 segundos antes de hacer la llamada AJAX. Muestro algunoas de las nuevas lineas de codigo implementadas:
- $('#spinner').show();
- $('#spinner').hide();
- }, 5000); 

### Resultado 
- El spinner se muestra inmediatamente al cargar la página.
- Durante 5 segundos no pasa nada (simulación de carga).
- Luego se hace la petición AJAX.
- Cuando llegan los datos, se oculta el spinner y se muestran las películas.

## Nueva Página HTML formulario
Como primer paso, se creó un nuevo archivo html llamado renta.html, el cual permite al usuario:

- Seleccionar una o más películas disponibles (cargadas dinámicamente desde peliculas.json).

- Elegir la forma de pago y el número de días de renta.

- Al enviar el formulario, se muestra un resumen de la compra en un modal de Bootstrap, incluyendo nombre del cliente, películas seleccionadas, duración de la renta y total a pagar.

La lógica se integró en app.js, con rutas adaptativas para que el JSON se cargue correctamente desde distintas ubicaciones del proyecto.

## Sección de Reseñas
Se creó un archivo resenias.json en la carpeta data/. El cual contiene
dentro entre 3 y 5 reseñas por cada película, identificadas por su id.

- Se agregó una sección dinámica de reseñas en la página detalle.html, cargadas mediante AJAX desde el archivo resenias.json. 

- Cada reseña incluye usuario, comentario y calificación entre 1 y 5, mostrada visualmente con estrellas.

- Se implementó filtrado por peliculaId y se modularizó el código en detalle.js.

### detalle.js 
Este archivo contiene el código JavaScript que gestiona dinámicamente la sección de reseñas en detalle.html. Utiliza AJAX para cargar el contenido desde resenias.json, filtra las reseñas según el id de la película obtenido desde la URL, y las muestra en tarjetas con calificación visual en forma de estrellas. También incluye una función modular para generar las estrellas según la puntuación (1 a 5)

## Boton "Ver tráiler"
Se añadió un botón “Ver tráiler” en cada tarjeta de película en index.html, que al hacer clic abre un modal de Bootstrap con el tráiler embebido desde YouTube. La funcionalidad se implementó en app.js, utilizando atributos data-trailer y eventos dinámicos para cargar el video en un < iframe > dentro del modal.

## Alerta de Bienvenida
- Ahora, se implementó un mensaje de alerta de bienvenida.
1. El cotenedor de la alerta fué agregado en el index.html, dentro del body
2. En app.js se añadió la siguiente lógica:

if (!localStorage.getItem("bienvenidaMostrada")) {
  $("#alerta-bienvenida").removeClass("d-none");
  localStorage.setItem("bienvenidaMostrada", "true");
}

### Cómo funciona?
La primera vez que el usuario entra, localStorage no tiene la clave,"bienvenidaMostrada", así que se muestra la alerta.
Al mostrarse, se guarda "bienvenidaMostrada": "true" en el navegador.
En visitas futuras, la alerta no se vuelve a mostrar.


## Animación
Se aplicó una animación visual al mostrar las tarjetas de películas en index.html, utilizando jQuery para que cada tarjeta aparezca progresivamente con fadeIn. Esto mejora la experiencia del usuario al cargar la galería, y se repite automáticamente cada vez que se recarga la página.

## Validar campos del formulario
Se implementó validación personalizada en el formulario de contacto ubicado en contacto.html.

- Se verificó que todos los campos estén completos y correctamente escritos, incluyendo una restricción para que el mensaje tenga entre 20 y 50 caracteres.

- Se mostraron mensajes de error específicos debajo de cada campo usando clases de Bootstrap (invalid-feedback) y estilos visuales (is-invalid) para mejorar la experiencia del usuario.

## Tema Visual Personalizado
 Para finalizar el proyecto, vamos a aplicar algunos cambios en el apartado visual de la página.
- Se aplicó un diseño visual coherente y atractivo en toda la aplicación.

- Se integró una nueva tipografía desde Google Fonts, se personalizaron colores y espaciados en style.css para mejorar la estética general, y se ajustó la estructura para que el footer permanezca fijo en la parte inferior del navegador.
 - Además, se incluyó una barra de navegación en todas las páginas, destacando visualmente la sección activa mediante la clase active.
## URL 
https://github.com/alexander06j/webU1.git
