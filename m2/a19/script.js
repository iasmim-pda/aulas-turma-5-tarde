let unhoisted = "unhoisted";

function soma(a, b) {
	//hoisting
	return a + b;
}

const subtracao = function (a, b) {
	//unhoisted
	return a - b;
};

//essa é a forma utilizada normalmente
//arrow function -> "unhoisted"
const subtracaoArrow = (a, b) => {
	//unhoisted
	return a - b;
};

// ES6+
//muiyo mUITO importante no modulo 4/5

const divisao = (a, b) => a / b;
const soma = (a, b) => a + b;
const formataNome = (nome) => `Sr(a)${nome}`;

divisao(6, 2);

const alerta = (frase) => {
	alert(frase);
};

function ehMaiorDeIdade(idade) {
	if (idade >= 18) {
		console.log("é maior de idade");
	} else {
		console.log("menor de idade");
	}
}

//ternário
function ehMaiorDeIdadeTernario(idade) {
	let resultado =
		idade >= 18 ? "você é maior de idade" : "você é menor de idade";
    return resultado
}

const ehMaiorDeIdadeArrow = (idade) =>
	idade >= 18 ? "você é maior de idade" : "você é menor de idade";

function seuNomeEhJulia(nome) {
	let resultado = nome === "Julia" ? "é sim, brother" : "não é";
  return resultado
}

function seuNomeEhJuliaOuNatalia(nome) {
	let resultado =
		nome === "Julia"
			? "é igual a julia"
			: nome === "Natalia"
			? "é igual a natalia"
			: "não é nem natalia nem julia, é andré"; 
}

//Nós também podemos encadear vários ternários
//é uma boa prática? depende, uns gostam outros criticam (ias é uma delas)
