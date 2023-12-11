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

btnMoradia.addEventListener("click", function (e) {
  //previne o evento padrão do formulário
  e.preventDefault();
  //criar uma array vazia
  let valores = listar(valoresMoradia);
  console.log(valores);
  let total = valores.reduce((acc, cur) => cur + acc, 0);
  console.log(total);
  adicionarVirgula(totalMoradia, total);
  // totalMoradia.textContent = total.toFixed(2).replace(".", ",");
});
