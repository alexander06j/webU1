$(document).ready(function () {
  
  // Mostrar alerta de bienvenida solo una vez
  if (!localStorage.getItem("bienvenidaMostrada")) {
  $("#alerta-bienvenida").removeClass("d-none");
  localStorage.setItem("bienvenidaMostrada", "true");
  }

  // Detecta la ruta correcta del JSON según la ubicación del HTML
  const rutaJSON = window.location.pathname.includes("/pages/")
    ? "../data/peliculas.json"
    : "data/peliculas.json";

  //Muestra el spinner
  $('#spinner').show();

  // Simula el retraso de 5 segundos antes de cargar las películas
  setTimeout(function () {
    $.ajax({
      url: rutaJSON,
      method: "GET",
      dataType: "json",
      success: function (peliculas) {
        let html = "";
        const hoy = new Date();//Establece la fecha actual del sistema

        //Mostrar tarjetas de películas si existe #lista-peliculas
        if ($('#lista-peliculas').length) {
          peliculas.forEach(function (peli) {
            const fechaEstreno = new Date(peli.estreno);
            const esEstreno = hoy < fechaEstreno;
            const precio = esEstreno ? peli.precios.estreno : peli.precios.normal;

            const badge = esEstreno
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
                     <button class="btn btn-outline-danger ver-trailer" data-trailer="${peli.trailer}">Ver tráiler</button> 
                  </div>
                </div>
              </div>`;
          });

          $('#spinner').hide();
          //$("#lista-peliculas").html(html);---Antigua version, no animada
          $("#lista-peliculas").html(html);
          // Animar cada tarjeta con delay
          $("#lista-peliculas .card").each(function (i) {
          $(this).hide().delay(i * 150).fadeIn(600);
          });
        }

        //Llenar el formulario de renta si existe #peliculas
        if ($('#peliculas').length) {
          peliculas.forEach(p => {
            $('#peliculas').append(`
              <option value="${p.id}" data-precio="${p.precios.normal}">${p.titulo}</option>
            `);
          });
        }
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar las películas:", error);
        $('#spinner').hide();
        if ($('#lista-peliculas').length) {
          $("#lista-peliculas").html(`
            <div class="col-12">
              <div class="alert alert-danger text-center" role="alert">
                No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
              </div>
            </div>
          `);
        }
      }
    });
  }, 5000);

  // Manejo del formulario de renta
  $('#form-renta').submit(function (e) {
    e.preventDefault();

    const cliente = $('#cliente').val();
    const dias = parseInt($('#dias').val());
    const pago = $('#pago').val();
    const seleccionadas = $('#peliculas option:selected');

    let resumen = `<p><strong>Cliente:</strong> ${cliente}</p>`;
    resumen += `<p><strong>Forma de Pago:</strong> ${pago}</p>`;
    resumen += `<p><strong>Días de Renta:</strong> ${dias}</p>`;
    resumen += `<p><strong>Películas:</strong></p><ul>`;

    let total = 0;
    seleccionadas.each(function () {
      const titulo = $(this).text();
      const precio = parseFloat($(this).data('precio'));
      resumen += `<li>${titulo} - $${precio.toFixed(2)}</li>`;
      total += precio;
    });

    resumen += `</ul><p><strong>Total a Pagar:</strong> $${(total * dias).toFixed(2)}</p>`;

    $('#resumen-body').html(resumen);
    const modal = new bootstrap.Modal(document.getElementById('modalResumen'));
    modal.show();
  });

  //Manejo del boton "Ver trailer"
  $(document).on("click", ".ver-trailer", function (){
    const trailerURL = $(this).data("trailer");

  // Como ya están embebidos, no necesitas convertir el enlace
  $("#trailerFrame").attr("src", trailerURL);

  const modal = new bootstrap.Modal(document.getElementById("modalTrailer"));
  modal.show();
});

// Limpiar el iframe al cerrar el modal
$('#modalTrailer').on('hidden.bs.modal', function () {
  $("#trailerFrame").attr("src", "");
  });
  
});
