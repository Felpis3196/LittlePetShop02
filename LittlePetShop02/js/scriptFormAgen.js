function validarAgendamento() {
    let tutor = frmAgendamento.inNomeT.value;
    let animal = frmAgendamento.inNomeA.value;
    let data = frmAgendamento.inData.value;
    let horario = frmAgendamento.inHora.value;
    let erro = document.getElementById('mensagem-erro');

    if (tutor.trim() == '' || tutor.length < 3 || tutor.length > 100) {
    frmAgendamento.inNomeT.focus();
    erro.style.display = 'block';
    erro.textContent = "O campo de nome do tutor não pode estar vazio e deve conter entre 3 e 100 caracteres.";
    return false;
    }

    if (animal.trim() == '' || animal.length < 3 || animal.length > 100) {
    frmAgendamento.inNomeA.focus();
    erro.style.display = 'block';
    erro.textContent = "O campo de nome do animal não pode estar vazio e deve conter entre 3 e 100 caracteres.";
    return false;
    }
    
    var diaSemana = new Date(data).getDay();
    if (diaSemana < 1 || diaSemana > 5) {
    frmAgendamento.inData.focus();
    erro.style.display = 'block';
    erro.textContent = "A data deve estar entre segunda-feira e sexta-feira!";
    return false;
    }

    var partes = horario.split(':');
    var horas = parseInt(partes[0], 10);
    var minutos = parseInt(partes[1], 10); 
    if (horas < 6 || horas >= 18) {
    frmAgendamento.inHora.focus();
    erro.style.display = 'block';
    erro.textContent = "O horário deve estar entre 6h e 18h00!";
    return false;
    }

    var tabela = document.createElement('table');
    var linha = tabela.insertRow();
  
    var coluna1 = linha.insertCell();
    coluna1.textContent = 'Nome do Tutor:';
    var coluna2 = linha.insertCell();
    coluna2.textContent = tutor;
  
    linha = tabela.insertRow();
    coluna1 = linha.insertCell();
    coluna1.textContent = 'Nome do Animal:';
    coluna2 = linha.insertCell();
    coluna2.textContent = animal;
  
    linha = tabela.insertRow();
    coluna1 = linha.insertCell();
    coluna1.textContent = 'Data:';
    coluna2 = linha.insertCell();
    coluna2.textContent = data;
  
    linha = tabela.insertRow();
    coluna1 = linha.insertCell();
    coluna1.textContent = 'Horário:';
    coluna2 = linha.insertCell();
    coluna2.textContent = horario;
  
    // Adiciona a tabela ao documento HTML
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.appendChild(tabela);
    erro.style.display = 'block';
    erro.style.backgroundColor = 'lightgreen'
    erro.style.border = 'green'
    erro.style.color = 'white'
    erro.textContent = "Agendamento feito com sucesso!";
    return false;
  }

function resetarDados() {
document.getElementById("frmAgendamento").reset();
}


