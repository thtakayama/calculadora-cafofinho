"use strict";

const btnMoradia = document.querySelector("#moradia .btn");
let valoresMoradia = document.querySelectorAll("#moradia .campo input");
let totalMoradia = document.querySelector("#moradia h1.total");

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

//Calculaar categoria Moradia
calcular(btnMoradia, valoresMoradia, totalMoradia);
