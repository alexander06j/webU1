$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idPelicula = parseInt(urlParams.get("id"));
 

  $.getJSON("../data/resenias.json", function (resenias) {
    const filtradas = resenias.filter(r => r.peliculaId === idPelicula);

    if (filtradas.length === 0) {
      $('#resenias-container').html('<p>No hay reseñas disponibles para esta película.</p>');
      return;
    }

    let html = "";
    filtradas.forEach(r => {
      html += `
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${r.usuario}</h5>
              <p class="card-text">${r.comentario}</p>
              <p class="card-text">${generarEstrellas(r.calificacion)}</p>
            </div>
          </div>
        </div>`;
    });

    $('#resenias-container').html(html);
  });

  function generarEstrellas(calificacion) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
      estrellas += i <= calificacion
        ? '<span class="text-warning">&#9733;</span>'  // estrella llena
        : '<span class="text-secondary">&#9734;</span>'; // estrella vacía
    }
    return estrellas;
  }

  
});
