//   ****** GRAFICO DE LINHA ****** //

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharLinha);

function desenharLinha() {
  let data = google.visualization.arrayToDataTable([
    ['Mês', 'Gato', 'Cachorro', 'Aves', 'Capivaras', 'Outros'],
    ['Jan', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Fev', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Mar', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Abr', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Mai', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Jun', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Jul', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Ago', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Set', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Out', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Nov', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
    ['Dez', Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10],
  ]);

  let options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  let chart = new google.visualization.LineChart(document.getElementById('linha'));

  chart.draw(data, options);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1; // Generates a random number between 1 and 1000
}

// ****** GRAFICO DE COMBINAÇÃO ****** //

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharCombinacao);

function desenharCombinacao() {
  // Some raw data (not necessarily accurate)
  let data = google.visualization.arrayToDataTable([
    ['Dia', 'Manhã', 'Dia', 'Noite'],
    ['Seg', Math.random()*6, Math.random()*8, Math.random()*12],
    ['Ter', Math.random()*6, Math.random()*8, Math.random()*12],
    ['Qua', Math.random()*9, Math.random()*8, Math.random()*12],
    ['Qui', Math.random()*6, Math.random()*13, Math.random()*12],
    ['Sex', Math.random()*6, Math.random()*4, Math.random()*2],
    ['Sab', Math.random()*5, Math.random()*8, Math.random()*12],


  ]);

  let options = {
    title: '',
    vAxis: { title: 'Quantidade' },
    hAxis: { title: 'Meses' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.ComboChart(document.getElementById('combinacao'));
  chart.draw(data, options);
}

//   ****** GRAFICO DE COLUNA ****** //

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(desenharColuna);
function desenharColuna() {
  let data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" }],
    ["Segunda", Math.random()*12, "color: #f19f77"],
    ["Terça", Math.random()*12, "color: #303134"],
    ["Quarta", Math.random()*12, "color: #f19f77"],
    ["Quinta", Math.random()*12, "color: #303134"],
    ["Sexta", Math.random()*12, "color: #f19f77"]
  ]);

  let view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  let options = {
    title: "",
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  let chart = new google.visualization.ColumnChart(document.getElementById("coluna"));
  chart.draw(view, options);
}

// PIZZA

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Gastos', 'R$'],
          ['Salário',     Math.random()*17],
          ['Aluguel',     Math.random()*9],
          ['Mercadorias', Math.random()*5],
          ['Contas',      Math.random()*5],
          ['Imposto',     Math.random()*19]
        ]);

        var options = {
          title: 'Gastos',
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }