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


## Paso 3-4
1. Agregar al menos 5 películas nuevas.
- Se agregaron un total de 6 películas nuevas, junto a su respectivos datos (portada, vídeo y sinopsis de al menos 60 palabras).

- Para las portadas se utilizó el formato jpg, mientras que en los vídeos utilicé  https://www.youtube.com/embed/VIDEO_ID y no  la URL estándar de YouTube. A continuación les dejo un ejemplo:

>*  {
    "imagen": "killBill2.jpg",
    "sinopsis": "Kill Bill: Volumen 2 es una película de acción y suspense estadounidense escrita y dirigida por Quentin Tarantino. La Novia, interpretada por Uma Thurman, busca venganza contra los asesinos que intentaron matarla durante su boda. Después de eliminar a sus enemigos, se centra en matar a Bill, su antiguo jefe. La película destaca por su estilo de dirección.",
    "trailer": "https://www.youtube.com/embed/q2h6EFk36kI",
    }





## URL 
https://github.com/alexander06j/webU1.git
