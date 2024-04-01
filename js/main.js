"use strict";

const btnMoradia = document.querySelector("#moradia .btn");
let valoresMoradia = document.querySelectorAll("#moradia .campo input");
let totalMoradia = document.querySelector("#moradia h1.total-moradia");
let labelsMoradia = [
  "Aluguel/Financiamento",
  "IPTU",
  "Condomínio",
  "Conta de Água",
  "Conta de Luz",
  "Conta de Gás",
  "Conta da Internet",
];
let coresMoradia = [
  "#0b00cc",
  "#6304e8",
  "#8843f2",
  "#a069f5",
  "#bd97f7",
  "#d7c1f9",
  "#f0e6fd",
];

const btnAlimentacao = document.querySelector("#alimentacao .btn");
let valoresAlimentacao = document.querySelectorAll("#alimentacao .campo input");
let totalAlimentacao = document.querySelector(
  "#alimentacao h1.total-alimentacao"
);
let labelsAlimentacao = ["Mercado", "Restaurante", "Delivery"];
let coresAlimentacao = ["#f47340", "#f8ab8f", "#f9e9e6"];

const btnSaude = document.querySelector("#saude .btn");
let valoresSaude = document.querySelectorAll("#saude .campo input");
let totalSaude = document.querySelector("#saude h1.total-saude");

const btnTransporte = document.querySelector("#transporte .btn");
let valoresTransporte = document.querySelectorAll("#transporte .campo input");
let totalTransporte = document.querySelector("#transporte h1.total-transporte");

const btnLazer = document.querySelector("#lazer .btn");
let valoresLazer = document.querySelectorAll("#lazer .campo input");
let totalLazer = document.querySelector("#lazer h1.total-lazer");

const btnAssinaturas = document.querySelector("#assinaturas .btn");
let valoresAssinaturas = document.querySelectorAll("#assinaturas .campo input");
let totalAssinaturas = document.querySelector(
  "#assinaturas h1.total-assinaturas"
);

const btnPet = document.querySelector("#pet .btn");
let valoresPet = document.querySelectorAll("#pet .campo input");
let totalPet = document.querySelector("#pet h1.total-pet");

//Selecionando os graficos
let ctx = document.getElementById("myChart");
let graficoMoradia = document.getElementById("grafico-moradia");
let graficoAlimentacao = document.getElementById("grafico-alimentacao");
let graficoSaude = document.getElementById("grafico-saude");
let graficoTransporte = document.getElementById("grafico-transporte");
let graficoLazer = document.getElementById("grafico-lazer");
let graficoAssinaturas = document.getElementById("grafico-assinaturas");
let graficoPet = document.getElementById("grafico-pet");

let opcoesGrafico = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        color: "rgb(0, 0, 0)",
        boxWidth: 10,
        boxHeight: 10,
        font: {
          size: 16,
        },
        usePointStyle: 10,
        textAlign: "center",
        padding: 20,
      },
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
};

let chartHome = new Chart(ctx, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartAlimentacao = new Chart(graficoAlimentacao, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

const listar = (lista) => {
  let valores = [];
  lista.forEach((item) => {
    valores.push(Number(item.value));
  });
  return valores;
};

const adicionarVirgula = (texto, valor) => {
  texto.textContent = valor.toFixed(2).replace(".", ",");
};

const calcular = (
  btn,
  listaValores,
  resultado,
  grafico,
  titulo,
  rotulos,
  cores,
  chart
) => {
  btn.addEventListener("click", function (e) {
    //previne o evento padrão do formulário
    e.preventDefault();
    //criar uma array com elementos do tipo número
    let valores = listar(listaValores);
    //Calcular o total da array acima
    let total = valores.reduce((acc, cur) => cur + acc, 0);
    //Substituir ponto por vírgula no total calculado acima
    adicionarVirgula(resultado, total);

    let dataGraficos = {
      labels: rotulos,
      datasets: [
        {
          label: titulo, //adicionar como parametro
          data: valores,
          backgroundColor: cores,
          hoverOffset: 4,
        },
      ],
    };

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(grafico, {
      type: "pie",
      data: dataGraficos,
      options: opcoesGrafico,
    });
  });
};

//Calcular categoria Moradia
calcular(
  btnMoradia,
  valoresMoradia,
  totalMoradia,
  ctx,
  "Mora",
  labelsMoradia,
  coresMoradia,
  chartHome
);
//Calcular categoria Alimentação
calcular(
  btnAlimentacao,
  valoresAlimentacao,
  totalAlimentacao,
  graficoAlimentacao,
  "Alimentação",
  labelsAlimentacao,
  coresAlimentacao,
  chartAlimentacao
);
//Calcular categoria Saúde
calcular(btnSaude, valoresSaude, totalSaude);
//Calcular categoria Transporte
calcular(btnTransporte, valoresTransporte, totalTransporte);
//Calcular categoria Lazer
calcular(btnLazer, valoresLazer, totalLazer);
//Calcular categoria Assinaturas
calcular(btnAssinaturas, valoresAssinaturas, totalAssinaturas);
//Calcular categoria Pet
calcular(btnPet, valoresPet, totalPet);

const dataAlimentacao = {
  labels: ["Mercado", "Restaurante", "Delivery"],
  datasets: [
    {
      label: "Alimentação",
      data: [300, 50, 100],
      backgroundColor: ["#f47340", "#f8ab8f", "#f9e9e6"],
      hoverOffset: 4,
    },
  ],
};

const dataSaude = {
  labels: ["Farmácia", "Consultas Médicas", "Plano de Saúde"],
  datasets: [
    {
      label: "Saúde",
      data: [300, 50, 100],
      backgroundColor: ["#3ccb4a", "#99e19a", "#e6f8e6"],
      hoverOffset: 4,
    },
  ],
};

const dataTransporte = {
  labels: ["Gasolina", "Público", "Uber"],
  datasets: [
    {
      label: "Transporte",
      data: [300, 50, 100],
      backgroundColor: ["#0297e2", "#4dc0f5", "#b2e4fb"],
      hoverOffset: 4,
    },
  ],
};

const dataLazer = {
  labels: ["Entretenimento", "Hobby"],
  datasets: [
    {
      label: "Lazer",
      data: [300, 50],
      backgroundColor: ["#f0a900", "#f9d371"],
      hoverOffset: 4,
    },
  ],
};

const dataAssinatura = {
  labels: ["Streaming", "Academia", "Cursos", "Outros"],
  datasets: [
    {
      label: "Assinaturas",
      data: [300, 50, 240, 180],
      backgroundColor: ["#b600de", "#e143f2", "#f3b8f8", "#fbe3fc"],
      hoverOffset: 50,
    },
  ],
};

const dataPet = {
  labels: ["Alimentação", "Banho/Tossa", "Saúde", "Outros"],
  datasets: [
    {
      label: "Valor",
      data: [300, 50, 240, 180],
      backgroundColor: ["#c60068", "#ef2f89", "#f38cbb", "#fce3ef"],
      hoverOffset: 50,
    },
  ],
};
