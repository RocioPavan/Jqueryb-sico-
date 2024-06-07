$(document).ready(function() {
    // Oculta imagen y muestra titulo
    $('#ocultarBtn').click(function() {
      $('#imagen').hide();
      $('h1').text('¡No tenemos ninguna imagen!');
    });
  
    // Muestra imagen y muestra titulo
    $('#mostrarBtn').click(function() {
      $('#imagen').show();
      $('h1').text('¡Mirá la siguiente imagen!');
    });
  });

  