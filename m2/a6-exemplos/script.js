setTimeout(() => {
  
}, timeout);

//callbacks é mais utlizado quando estamos trabalhando com metodos de array
// programação funcional -> callback



function subtrair(a, b) {
  return a - b;
}

function somar(a, b) {
  return a + b;
}

function calculadora(operacao, numero1, numero2) {
  return operacao(numero1, numero2); //ela recebe a função que vai executar algo
}

console.log(calculadora(somar, 2, 3)); // 5
console.log(calculadora(subtrair, 2, 3)); // -1

const div = document.createElement('div');

div.innerText = "Olá, mundo!";

div.innerHTML = "<h1>Olá, mundo!</h1> <p>Isso é um paragrafo</p>";