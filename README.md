# 🐾 Little PetShop

Projeto desenvolvido para simular um site completo de uma PetShop que cuida de animais abandonados e oferece serviços de convivência para pets deixados pelos tutores. Utilizando **HTML**, **CSS** e **JavaScript**, a aplicação simula páginas funcionais com agendamentos, login, gráficos de movimentação e contato.

---

## 🌐 Sobre o Projeto

A **Little PetShop** é uma iniciativa fictícia voltada ao cuidado de animais abandonados, oferecendo também serviços temporários de hospedagem e socialização para animais de estimação. O site criado representa as principais funcionalidades dessa empresa.

O projeto foi desenvolvido com foco em:
- Estruturação com **HTML5**
- Estilização com **CSS3**
- Funcionalidades com **JavaScript**
- Visualização de dados com **Google Charts**

---

## 📄 Páginas do Projeto

### `1 - Agendamento.html`
Formulário para registrar agendamentos, solicitando:
- Nome do tutor
- Nome do pet
- Data desejada
- Horário

### `2 - Contato.html`
Informações de contato da PetShop:
- E-mail
- Telefone
- Nome do atendente
- Endereço completo

### `3 - Dashboard.html`
Exibe gráficos com base em dados simulados:
- Espécies mais atendidas
- Períodos do dia com mais movimento
- Quantidade de agendamentos por dia
- Classificação de gastos da empresa

### `4 - Login.html`
Página para login, pedindo:
- E-mail
- Senha

Inclui validação de acesso e mensagens visuais de erro/sucesso.

### `5 - Register.html`
Página de cadastro com os seguintes campos:
- Nome completo
- CPF
- Endereço
- Cidade
- Estado (UF)
- Data de nascimento
- E-mail
- Telefone
- Senha

Validação detalhada é feita via JavaScript.

### `6 - Loja.html`
Página inicial do site, com links de navegação para todas as outras páginas.

---

## 🎨 Estilização (CSS)

Cada página possui seu próprio arquivo CSS dedicado, controlando:
- Fontes
- Cores de fundo
- Espaçamentos
- Layout geral

---

## 🖼️ Imagens

O projeto inclui diversas imagens:
- Fotos reais: Gato branco, gato preto, dogue alemão, capivara.
- Ícones em PNG: Representações cartunizadas de comida, transportadoras, telefone, e-mail, etc.

Essas imagens são usadas para tornar a interface mais visual e amigável.

---

## 🧠 Funcionalidades com JavaScript

### `scriptCadastro.js`
Validações para o cadastro:
- Nome: 3 a 100 caracteres
- Endereço: Apenas letras e números
- Cidade: Letras e números (3 a 50 caracteres)
- Data de nascimento: Verificações adicionais
- Exibição de mensagens de erro

---

### `scriptLogin.js`
Validações para o login:
- Mensagens de erro e sucesso
- Cores visuais (vermelho para erro, verde para sucesso)

---

### `charts.js`
Uso da biblioteca **Google Charts** para renderizar:
- Gráfico de Linha
- Gráfico de Coluna
- Gráfico de Combinação
- Gráfico de Pizza 3D

Os dados são gerados de forma aleatória para fins de simulação.

---

### `scriptFormAgen.js`
Validações para agendamento:
- Nome do tutor e do animal: 3 a 100 caracteres
- Data válida: Somente dias úteis (segunda a sexta)
- Horário: Entre 6h e 18h
- Exibição de mensagens de sucesso/erro

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
