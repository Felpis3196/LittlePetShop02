function validarLogin() {
  let email = loginForm.inLogin.value;
  let padraoEmail = /^[\w-\.]+@(gmail\.com|teste\.org|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|teste\.com\.br)$/;
  let emailValido = padraoEmail.test(email);
  let senha = loginForm.inSenha.value;
  let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
  let senhaValida = padraoSenha.test(senha);
  let user = 'admin@teste.com.br';
  let password = '!@#ABC123def';

  if (!emailValido) {
    erro.style.display = 'block';
    erro.style.backgroundColor = 'red';
    erro.style.borderColor = 'tomato';
    erro.textContent = "Email inválido";
  } 
  else if (!senhaValida) {
    erro.style.display = 'block';
    erro.style.backgroundColor = 'red';
    erro.style.borderColor = 'tomato';
    erro.textContent = "Senha inválida";
  } 
  else {
    erro.style.display = 'block';
    erro.style.backgroundColor = 'lightgreen';
    erro.style.borderColor = 'green';
    erro.style.color = 'white';
    erro.textContent = "Logou com sucesso!";

    setTimeout(function() {
      erro.style.display = 'none';
    }, 5000); 
  }
}


 function resetarDados() {
   document.getElementById("loginForm").reset(); // Limpa os campos do formulário
   document.getElementById("errorMessage").innerText = ""; // Limpa a mensagem de erro
 }

  




  

  