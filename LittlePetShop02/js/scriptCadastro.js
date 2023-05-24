
function validarCadastro() {
  let cpf = frmCadastro.frmCpf.value;
  let fullname = frmCadastro.frmNomeCompleto.value;
  let adress = frmCadastro.frmEndereco.value;
  let cidade = frmCadastro.frmCidade.value;
  let uf = frmCadastro.frmUf.value;
  let email = frmCadastro.frmEmail.value;
  let pass = frmCadastro.frmSenha.value;
  let nascimento = frmCadastro.frmNascimento.value;
  let tel = frmCadastro.frmFone.value;
  let petNome = frmCadastro.frmPetNome.value;
  let petIdade = frmCadastro.frmPetIdade.value;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  const uppercaseRegex = /^[A-Z]+$/;
  const emailRegex = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
  const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const foneRegex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;


  if (cpf.length !== 11) {
    erro.style.display = 'block';
    erro.textContent = ("O CPF informado não tem 11 dígitos");
    return false;
  }

  let cpfIsValid = true;
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(9, 10))) {
    cpfIsValid = false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(10, 11))) {
    cpfIsValid = false;
  }

  if (cpfIsValid) {
    let novoCpf =
      cpf.substr(0, 3) +
      "." +
      cpf.substr(3, 3) +
      "." +
      cpf.substr(6, 3) +
      "-" +
      cpf.substr(9, 2);
    ;
  } else {
      erro.style.display = "block";
      erro.textContent = ("O CPF informado não é válido!");
  }


  if (!alphanumericRegex.test(fullname)) {
    frmCadastro.frmNomeCompleto.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo nome deve conter apenas letras e números';
    return false;
  }
  if (fullname.length < 3 || fullname.length > 100) {
    frmCadastro.frmNomeCompleto.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo nome deve ter entre 3 e 100 caracteres';
    return false;
  }

  if (!alphanumericRegex.test(adress)) {
    frmCadastro.frmEndereco.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo endereço deve conter apenas letras e números';
    return false;
  }
  if (adress.length < 3 || adress.length > 100) {
    frmCadastro.frmEndereco.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo endereço deve conter entre 3 e 100 caracteres';
    return false;
  }


  if (!alphanumericRegex.test(cidade)) {
    frmCadastro.frmCidade.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo cidade deve conter apenas letras e números';
    return false;
  }
  if (cidade.length < 3 || cidade.length > 50) {
    frmCadastro.frmCidade.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo cidade deve conter entre 3 e 50 caracteres';
    return false;
  }


  if (!uppercaseRegex.test(uf)) {
    frmCadastro.frmUf.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo UF deve conter apenas maiúsculas';
    return false;
  }
  if (uf.length > 2) {
    frmCadastro.frmUf.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo UF deve conter até 2 caracteres';
    return false;
  }


  if (!emailRegex.test(email)) {
    frmCadastro.frmEmail.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo email deve estar em formato válido';
    return false;
  }
  if (email.length < 3 || email.length > 100) {
    frmCadastro.frmEmail.focus();
    erro.style.display = 'block';
    erro.textContent = 'O campo email deve conter entre 3 e 100 caracteres';
    return false;
  }


  if (!passRegex.test(pass)) {
    frmCadastro.frmSenha.focus();
    erro.style.display = 'block';
    erro.textContent = 'A senha não é forte o bastante. Ela deve conter: letras maiúsculas, letras minúsculas, números e caracteres especiais';
    return false;
  }
  if (pass.length < 8 || pass.length > 30) {
    frmCadastro.frmSenha.focus();
    erro.style.display = 'block';
    erro.textContent = 'A senha deve ter entre 8 e 30 caracteres';
    return false;
  }


  if (nascimento.trim() === '' || !dataRegex.test(nascimento)) {
    frmCadastro.frmNascimento.focus();
    erro.style.display = 'block';
    erro.textContent = 'Insira uma data em formato válido (dd/mm/aaaa)';
    return false;
  }

  const nascimentoParts = nascimento.match(dataRegex);
  const day = parseInt(nascimentoParts[1], 10);
  const month = parseInt(nascimentoParts[2], 10);
  const year = parseInt(nascimentoParts[3], 10);

  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
    frmCadastro.frmNascimento.focus();
    erro.style.display = 'block';
    erro.textContent = 'Insira uma data válida (dd/mm/aaaa)';
    return false;
  }


  if (!foneRegex.test(tel)) {
    frmCadastro.frmFone.focus();
    erro.style.display = 'block';
    erro.textContent = 'Insira um telefone válido';
    return false;
  }


  if (!alphanumericRegex.test(petNome)) {
    frmCadastro.petNome.focus();
    erro.style.display = 'block';
    erro.textContent = 'O nome do pet deve conter apenas letras e números';
    return false;
  }
  if (petNome.length < 3 || petNome.length > 100) {
    frmCadastro.petNome.focus();
    erro.style.display = 'block';
    erro.textContent = 'O nome do pet deve ter entre 3 e 100 caracteres';
    return false;
  }


  if (!dataRegex.test(petIdade)) {
    frmCadastro.petIdade.focus();
    erro.style.display = 'block';
    erro.textContent = 'Insira uma data em formato válido (dd/mm/aaaa)';
    return false;
  }

  const petIdadeParts = petIdade.match(dataRegex);
  const petDay = parseInt(petIdadeParts[1], 10);
  const petMonth = parseInt(petIdadeParts[2], 10);
  const petYear = parseInt(petIdadeParts[3], 10);

  if (petDay < 1 || petDay > 31 || petMonth < 1 || petMonth > 12 || petYear < 1900 || petYear > 2100) {
    frmCadastro.frmNascimento.focus();
    erro.style.display = 'block';
    erro.textContent = 'Insira uma data válida (dd/mm/aaaa)';
    return false;
  }


  else{
    erro.style.display = 'block';
    erro.style.backgroundColor = 'lightgreen';
    erro.style.borderColor = 'green'
    erro.color = 'white'
    erro.textContent = 'Cadastrado com sucesso!'
    setTimeout(function() {
      erro.style.display = 'none';
    }, 5000); 
  }
  return true;
}


  function exibirCampoOutros() {
    var selectTipoAnimal = document.getElementById("selectTipoAnimal");
    var campoOutros = document.getElementById("campoOutros");
  
    if (selectTipoAnimal.value === "outros") {
      campoOutros.style.display = "block";
    } else {
      campoOutros.style.display = "none";
    }
  }


  function resetarDados() {
    document.getElementById("loginForm").reset(); // Limpa os campos do formulário
    document.getElementById("errorMessage").innerText = ""; // Limpa a mensagem de erro
  }
 
  
  