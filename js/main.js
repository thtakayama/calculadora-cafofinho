"use strict";
//Smooth scroll
const menuNav = document.querySelector('.menu ul');

menuNav.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('menu_link')) {
    const menuLinks = document.querySelectorAll('.menu_link');
    menuLinks.forEach(link => {
      link.classList.remove('active');
      link.style.color='rgba(0,0,0,0.4)';
    });
    const id = e.target.getAttribute('href');
    let curSection = document.querySelector(id);
    e.target.classList.add('active');
    e.target.style.color = `var(--cor-${curSection.querySelector('button').dataset.bg})`;
    curSection.style.scrollMarginTop = '80px';
    curSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
})

const menuMobile = document.querySelector('.menu-mobile');

menuMobile.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('fa-solid')) {
    const menuLinks = document.querySelectorAll('.fa-solid');
    menuLinks.forEach(link => {
      link.classList.remove('active');
      link.style.color='rgba(0,0,0,0.4)';
    });
    const id = e.target.dataset.id;
    let curSection = document.querySelector(id);
    e.target.classList.add('active');
    e.target.style.color = `var(--cor-${curSection.querySelector('button').dataset.bg})`;
    curSection.style.scrollMarginTop = '80px';
    curSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
})

//Dados Moradia
const btnMoradia = document.querySelector("#moradia .btn");
let valoresMoradia = document.querySelectorAll("#moradia .campo input");
let totalMoradia = document.querySelector("#moradia h1.total-moradia");
let graficoMoradia = document.getElementById("grafico-moradia");
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
//Dados Alimentação
const btnAlimentacao = document.querySelector("#alimentacao .btn");
let valoresAlimentacao = document.querySelectorAll("#alimentacao .campo input");
let totalAlimentacao = document.querySelector(
  "#alimentacao h1.total-alimentacao"
);
let graficoAlimentacao = document.getElementById("grafico-alimentacao");
let labelsAlimentacao = ["Mercado", "Restaurante", "Delivery"];
let coresAlimentacao = ["#f47340", "#f8ab8f", "#f9e9e6"];
//Dados Saúde
const btnSaude = document.querySelector("#saude .btn");
let valoresSaude = document.querySelectorAll("#saude .campo input");
let totalSaude = document.querySelector("#saude h1.total-saude");
let graficoSaude = document.getElementById("grafico-saude");
let labelsSaude = ["Farmácia", "Consultas Médicas", "Plano de Saúde"];
let coresSaude = ["#3ccb4a", "#99e19a", "#e6f8e6"];
//Dados Transporte
const btnTransporte = document.querySelector("#transporte .btn");
let valoresTransporte = document.querySelectorAll("#transporte .campo input");
let totalTransporte = document.querySelector("#transporte h1.total-transporte");
let graficoTransporte = document.getElementById("grafico-transporte");
let labelsTransporte = ["Gasolina", "Público", "Uber"];
let coresTransporte = ["#0297e2", "#4dc0f5", "#b2e4fb"];
// Dados Lazer
const btnLazer = document.querySelector("#lazer .btn");
let valoresLazer = document.querySelectorAll("#lazer .campo input");
let totalLazer = document.querySelector("#lazer h1.total-lazer");
let graficoLazer = document.getElementById("grafico-lazer");
let labelsLazer = ["Entretenimento", "Hobby"];
let coresLazer = ["#f0a900", "#f9d371"];
//Dados Assinaturas
const btnAssinaturas = document.querySelector("#assinaturas .btn");
let valoresAssinaturas = document.querySelectorAll("#assinaturas .campo input");
let totalAssinaturas = document.querySelector(
  "#assinaturas h1.total-assinaturas"
);
let graficoAssinaturas = document.getElementById("grafico-assinaturas");
let labelsAssinaturas = ["Streaming", "Academia", "Cursos", "Outros"];
let coresAssinaturas = ["#b600de", "#e143f2", "#f3b8f8", "#fbe3fc"];
//Dados Pet
const btnPet = document.querySelector("#pet .btn");
let valoresPet = document.querySelectorAll("#pet .campo input");
let totalPet = document.querySelector("#pet h1.total-pet");
let graficoPet = document.getElementById("grafico-pet");
let labelsPet = ["Alimentação", "Banho/Tossa", "Saúde", "Outros"];
let coresPet = ["#c60068", "#ef2f89", "#f38cbb", "#fce3ef"];

//Dados Total
let graficoTotal = document.getElementById("grafico-total");
let labelsTotal = ["Moradia", "Alimentação", "Saúde", "Transporte", "Lazer", "Assinaturas", "Pet"];
let coresTotal = ["#8843f2", "#f47340", "#3ccb4b", "#0297e2", "#f9d371", "#e143f2", "#ef2f88"];

let valoresCategorias = [
  totalMoradia.innerHTML,
  totalAlimentacao.innerHTML,
  totalSaude.innerHTML,
  totalTransporte.innerHTML,
  totalLazer.innerHTML,
  totalAssinaturas.innerHTML,
  totalPet.innerHTML,
];

//Selecionando os graficos
let ctx = document.getElementById("myChart");

let opcoesGrafico = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        color: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 10,
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
      top: 0,
    },
  },
  responsive: true,
};

let chartHome = new Chart(graficoMoradia, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartAlimentacao = new Chart(graficoAlimentacao, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartSaude = new Chart(graficoSaude, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartTransporte = new Chart(graficoTransporte, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartLazer = new Chart(graficoLazer, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartAssinaturas = new Chart(graficoAssinaturas, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartPet = new Chart(graficoPet, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

let chartTotal = new Chart(graficoTotal, {
  type: "pie",
  data: [],
  options: opcoesGrafico,
});

const listar = (lista) => {
  let valores = [];
  lista.forEach((item) => {
    valores.push(Number(item.value.replace(/\./g, '').replace(',', '.')));
  });
  return valores;
};

const formatarNumero = (texto, valor) => {
  const options = { style: 'currency', currency: 'BRL' };
  const numberFormat = new Intl.NumberFormat('pt-BR', options);
  //texto.textContent = valor.toFixed(2).replace(".", ",");
  texto.dataset.total = valor;
  texto.textContent = numberFormat.format(valor);
};

const calcular = (
  btn,
  listaValores,
  resultado,
  grafico,
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
    formatarNumero(resultado, total);

    let listaCategorias = valoresCategorias
      .map((item) => Number(item))
      .reduce((acc, cur) => cur + acc, 0);

      const calcularPorcentagem = (listaValores) => {
        let listaPorcentagem = listaValores.map((item) => {
          return Math.round((item * 100) / total);
        });
        return listaPorcentagem;
      }

      let porcentagem = calcularPorcentagem(valores);

    let dataGraficos = {
      labels: rotulos,
      datasets: [
        {
          label: "Porcentagem(%)",
          data: porcentagem,
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

const calcularPorcentagem = (listaValores) => {
  let listaPorcentagem = listaValores.map((item) => {
    return Math.round((item * 100) / 132);
  });
  return listaPorcentagem;
}

//Calcular categoria Moradia
calcular(
  btnMoradia,
  valoresMoradia,
  totalMoradia,
  graficoMoradia,
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
  labelsAlimentacao,
  coresAlimentacao,
  chartAlimentacao
);
//Calcular categoria Saúde
calcular(
  btnSaude,
  valoresSaude,
  totalSaude,
  graficoSaude,
  labelsSaude,
  coresSaude,
  chartSaude
);
//Calcular categoria Transporte
calcular(
  btnTransporte,
  valoresTransporte,
  totalTransporte,
  graficoTransporte,
  labelsTransporte,
  coresTransporte,
  chartTransporte
);
//Calcular categoria Lazer
calcular(
  btnLazer,
  valoresLazer,
  totalLazer,
  graficoLazer,
  labelsLazer,
  coresLazer,
  chartLazer
);
//Calcular categoria Assinaturas
calcular(
  btnAssinaturas,
  valoresAssinaturas,
  totalAssinaturas,
  graficoAssinaturas,
  labelsAssinaturas,
  coresAssinaturas,
  chartAssinaturas
);
//Calcular categoria Pet
calcular(
  btnPet,
  valoresPet,
  totalPet,
  graficoPet,
  labelsPet,
  coresPet,
  chartPet
);
//calcular total
function resolveTotal() {
  return new Promise((resolve) => {
    let valorTotalContainer = document.querySelector('.total-absoluto');

    let valoresTotal = [+totalMoradia.dataset.total, +totalAlimentacao.dataset.total, +totalSaude.dataset.total, +totalTransporte.dataset.total, +totalLazer.dataset.total, +totalAssinaturas.dataset.total, +totalPet.dataset.total];
    
    const calcularPorcentagem = (listaValores) => {
      let listaPorcentagem = listaValores.map((item) => {
        return Math.round((item * 100) / valoresTotal.reduce((cur, acc) => cur + acc, 0));
      });
      return listaPorcentagem;
    }

    let porcentagem = calcularPorcentagem(valoresTotal);

    let dataGraficos = {
      labels: labelsTotal,
      datasets: [
        {
          label: "Porcentagem(%)",
          data: porcentagem,
          backgroundColor: coresTotal,
          hoverOffset: 4,
        },
      ],
    };

    if (chartTotal) {
      chartTotal.destroy();
    }

    chartTotal = new Chart(graficoTotal, {
      type: "pie",
      data: dataGraficos,
      options: opcoesGrafico,
    });
    //resolve(valorTotalContainer.innerHTML = valorTotal.toFixed(2).replace(".", ","));
    resolve(formatarNumero(valorTotalContainer, valoresTotal.reduce((cur, acc) => cur + acc, 0)));
  });
}

async function asyncCall() {
  let result = await resolveTotal();
}

btnMoradia.addEventListener('click', asyncCall);
btnAlimentacao.addEventListener('click', asyncCall);
btnSaude.addEventListener('click', asyncCall);
btnTransporte.addEventListener('click', asyncCall);
btnLazer.addEventListener('click', asyncCall);
btnAssinaturas.addEventListener('click', asyncCall);
btnPet.addEventListener('click', asyncCall);

const btnTotal = document.querySelector('.btn-total');
const btnFecharModal = document.querySelector('.modal-fechar');
const modal = document.querySelector('.modal');
btnTotal.addEventListener('click', () => {
  modal.classList.toggle('active');
})

btnFecharModal.addEventListener('click', () => {
  modal.classList.remove('active');
})