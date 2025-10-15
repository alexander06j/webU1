$(document).ready(function () {
    $.ajax({
      url: "data/peliculas.json",
      method: "GET",
      dataType: "json",
      success: function (peliculas) {
        let html = "";

        let hoy = new Date(); //Establece la fecha actual del sistema.

        peliculas.forEach(function (peli) {

          let fechaEstreno = new Date(peli.estreno);//convierte la fecha de estreno
          // Verificamos si hoy es antes del estreno
          let esEstreno = hoy < fechaEstreno;

          // Elegimos el precio según corresponda
          let precio = esEstreno ? peli.precios.estreno : peli.precios.normal;

          // Badge visual
          let badge = esEstreno
          ? `<span class="badge bg-warning text-dark">Próximo Estreno</span>`
          : `<span class="badge bg-success">En Cartelera</span>`;

          html += `
            <div class="col-md-4">
              <div class="card h-100 shadow">
                <img src="img/${peli.imagen}" class="card-img-top" alt="${peli.titulo}">
                <div class="card-body">
                  <h5 class="card-title">${peli.titulo}</h5>
                  <p class="card-text">${peli.generos}</p>
                  <p class="card-text">
                  <strong>Precio: $${precio.toFixed(2)}</strong><br>
                  ${badge}
                  </p>
                  <a href="pages/detalle.html?id=${peli.id}" class="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>`;
        });
        $("#lista-peliculas").html(html);
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar las películas:", error);
        $("#lista-peliculas").html(`
          <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">
              No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
            </div>
          </div>
        `);
      }
    });
  });
  