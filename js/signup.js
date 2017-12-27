$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checked = $('input[type="checkbox"]');
  
  var validateEmail = false;
  var validatePassword = false; 
  var validateChecked = false;  

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatePassword && validateChecked) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  } 


  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
 
  $password.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
 
  $checked.on('click', function(event) {
    if (event.target.checked) {
    //   alert('entre');
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  $('form > button').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'register.html';
  });
});