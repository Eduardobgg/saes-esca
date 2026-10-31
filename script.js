// Genera un captcha aleatorio de 4 caracteres
function refrescarCaptcha(){
  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var out = "";
  for (var i = 0; i < 4; i++){
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  var el = document.getElementById('captchaText');
  if (el) el.textContent = out;
}

// "Inicia sesión": en esta simulación no valida nada, solo entra al sistema
function iniciarSesion(){
  window.location.href = 'alumnos.html';
}

// Al cargar la página de login, pone un captcha nuevo
document.addEventListener('DOMContentLoaded', function(){
  refrescarCaptcha();
});
