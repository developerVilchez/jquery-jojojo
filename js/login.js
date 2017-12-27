$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $buttonSubmit = $('button[type="submit"]');

  // variable booleanas para la activación del boton  
  var validateEmail = false;
  var validatePassword = false; 

  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.email);
  console.log(localStorage.password);

 
  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      // alert('pasa');
      validateEmail = true;
    }
  });

  $password.on('input', function() {
    if ($(this).val() === localStorage.password) {
      // alert('esto tambien pasa');
      validatePassword = true;
    }
  });


  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      alert('Oh my gad!! You are papanuelll Yupi!!');
      window.location.href = 'close.html';
    } else {
      alert('Oh no, you need register');
    }
   
  });
});