let divP = document.getElementById('principal');
let divS = document.querySelector('.segundaria');
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let seletor = document.querySelector('select');
let opção = document.querySelector('option');

function trocarcor(){
      divP.style.backgroundColor = seletor.value;
}