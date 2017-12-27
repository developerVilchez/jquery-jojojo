$(document).ready(function() {
  console.log(window.location);
  setTimeout(function() { 
    window.location.href = 'signup.html';
  }, 8000);
  /* // Seleccionamos los elementos del DOM
  var $btnSignUp = $('#signup');
  var $btnLogin = $('#login');
  // Asociamos el evento click
  $btnSignUp.on('click', function() {
    alert('hola');
  }); */
});