// //MAIS ELEGANTW
// let numero1 = parseInt(prompt("Digite o numero 1: "));
// let numero2 = parseInt(prompt("Digite o segundo numero"));
// let operacao = prompt("Digite a operação desejada");

// //quero mostrar pro usuario o resultado
// //alert, console log
// let resultado = calculadora(operacao, numero1, numero2);
// alert(resultado);

//HOISTING -> PARA QUEM TIVER CURIOSIDADE


function soma(valor1, valor2) {
	return valor1 + valor2;
}

function subtracao(valor1, valor2) {
	return valor1 - valor2;
}

function divisao(valor1, valor2) {
	return valor1 / valor2;
}

function multiplicacao(valor1, valor2) {
	return valor1 * valor2;
}

//funcao calculadora que vai unir as 4 operacoes

function calculadora(operacao, numero1, numero2) {
	if (operacao == "soma") {
		return soma(numero1, numero2);
	}

	if (operacao == "subtracao") {
		return subtracao(numero1, numero2);
	}

	if (operacao == "divisao") {
		return divisao(numero1, numero2);
	}

	if (operacao == "multiplicacao") {
		return multiplicacao(numero1, numero2);
	}
}

let numero1 = parseInt(prompt("Digite o numero 1: "));
let numero2 = parseInt(prompt("Digite o segundo numero"));
let operacao = prompt("Digite a operação desejada");

//quero mostrar pro usuario o resultado
//alert, console log
let resultado = calculadora(operacao, numero1, numero2);
alert(resultado);

// //codigo
// //codigo
// //codigo//codigo
// //codigo
// v
// v
// //codigo
// visualViewport//codigo

//codigo
//codigo
//codigo
//codigo
//codigo
// v
// v
// //codigo
// visualViewport//codigo

//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
// v
// v
// //codigo
// visualViewport//codigo

//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
// v
// v
// //codigo
// visualViewport//codigo

//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
//codigo
calculadora("soma", 3, 4);
calculadora("soma", 3, 5);
calculadora("soma", 3, 3);
calculadora("soma", 3, 1);
