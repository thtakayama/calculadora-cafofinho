"use strict";

const btnMoradia = document.querySelector("#moradia .btn");
let valoresMoradia = document.querySelectorAll("#moradia .campo input");
let totalMoradia = document.querySelector("#moradia h1.total-moradia");

const btnAlimentacao = document.querySelector("#alimentacao .btn");
let valoresAlimentacao = document.querySelectorAll("#alimentacao .campo input");
let totalAlimentacao = document.querySelector(
  "#alimentacao h1.total-alimentacao"
);

const btnSaude = document.querySelector("#saude .btn");
let valoresSaude = document.querySelectorAll("#saude .campo input");
let totalSaude = document.querySelector("#saude h1.total-saude");

const btnTransporte = document.querySelector("#transporte .btn");
let valoresTransporte = document.querySelectorAll("#transporte .campo input");
let totalTransporte = document.querySelector("#transporte h1.total-transporte");

const btnLazer = document.querySelector("#lazer .btn");
let valoresLazer = document.querySelectorAll("#lazer .campo input");
let totalLazer = document.querySelector("#lazer h1.total-lazer");

const listar = (lista) => {
  let valores = [];
  lista.forEach((item) => {
    valores.push(Number(item.value));
    console.log(valores);
  });
  return valores;
};

const adicionarVirgula = (texto, valor) => {
  texto.textContent = valor.toFixed(2).replace(".", ",");
};

const calcular = (btn, listaValores, resultado) => {
  btn.addEventListener("click", function (e) {
    //previne o evento padrão do formulário
    e.preventDefault();
    //criar uma array com elementos do tipo número
    let valores = listar(listaValores);
    //Calcular o total da array acima
    let total = valores.reduce((acc, cur) => cur + acc, 0);
    //Substituir ponto por vírgula no total calculado acima
    adicionarVirgula(resultado, total);
  });
};

//Calcular categoria Moradia
calcular(btnMoradia, valoresMoradia, totalMoradia);
//Calcular categoria Alimentação
calcular(btnAlimentacao, valoresAlimentacao, totalAlimentacao);
//Calcular categoria Saúde
calcular(btnSaude, valoresSaude, totalSaude);
//Calcular categoria Transporte
calcular(btnTransporte, valoresTransporte, totalTransporte);
//Calcular categoria Lazer
calcular(btnLazer, valoresLazer, totalLazer);
