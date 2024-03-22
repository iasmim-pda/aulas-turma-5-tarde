// let fruta = "maçã";

// function escolherFruta(fruta) {
// 	//Se eu for comparar mais de duas/uma vez
// 	// eu uso o switch case
// 	//fruta == banana
// 	switch (fruta) {
// 		//fruta == banana

// 		case "banana": //fruta === banana
// 			//sim, fruta é igual a banana
// 			console.log("Banana é boa para a digestão.");
// 			//escreve codigo normla
// 			//pode chamar fuções
// 			//pode faZer comparações
// 			break;

// 		case "laranja": //fruta === laranja
// 			console.log("Laranja é rica em vitamina C.");
// 			break;

// 		case "maçã":
// 			console.log("Maçã é deliciosa e nutritiva.");
// 			break;

// 		default:
// 			console.log("Desculpe, não temos informações sobre essa fruta.");
// 			break;
// 	}
// }

// function calculadora(operacao, numero1, numero2) {
// 	switch (operacao) {
// 		case "soma":
// 			somar(numero1 + numero2);
// 			break;

// 		case "subtração":
// 			console.log(numero1 - numero2);
// 			break;

// 		case "multiplicação":
// 			console.log(numero1 * numero2);
// 			break;

// 		case "divisão":
// 			console.log(numero1 / numero2);
// 			break;

// 		default:
// 			console.log("Operação inválida");
// 			break;
// 	}
// }

// escolherFruta("banana");

// function encontrarPrimeiroNumeroPositivo(array) {
// 	let primeiroNumeroPositivo = null;

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] > 0) {
// 			primeiroNumeroPositivo = array[i];

// 			break;
// 		}
// 	}

// 	return primeiroNumeroPositivo;
// }

// console.log(encontrarPrimeiroNumeroPositivo([1, 2, 3, 4, 5])); // 1
// console.log(encontrarPrimeiroNumeroPositivo([-1, -2, -3, 4, -5])); // 4

// function listarLivros(usuario, ...livros) {
// 	console.log("Usuário: " + usuario);
// 	console.log("Livros: " + livros.join(", "));
// }

// listarLivros(
// 	"João",
// 	"O Senhor dos Anéis",
// 	"Harry Potter",
// 	"O Guia do Mochileiro das Galáxias"
// );

// console.log(todosLivrosFavoritos); // ["O Senhor dos Anéis", "Harry Potter", "O Pequeno Príncipe", "Dom Quixote"]

function postarTweet(usuario, ...tweets) {
	//[	"Javascript é bom demais!!","Olha como eu aprendi REST!", "A turma5 é fera demais!!"]
	console.log("primeiro tweet: ", tweets[0]);
	for (let i = 0; i < tweets.length; i++) {
		console.log("Tweet postado pelo usuario " + usuario + ": ", tweets[i]);
	}
}

// postarTweet(
// 	"olivcode", //usuario
// 	"Javascript é bom demais!!",
// 	"Olha como eu aprendi REST!",
// 	"A turma5 é fera demais!!"
// );

let livrosFavoritosJoao = ["O Senhor dos Anéis", "Harry Potter"];
let livrosFavoritosMaria = ["O Pequeno Príncipe", "Dom Quixote"];
let livrosFavoritosNateli = [
	"Jogos Vorazes",
	"A viagem ao centro da terra",
	"Percy Jackson",
];



let todosLivrosFavoritos = [
	...livrosFavoritosJoao,
	...livrosFavoritosMaria,
	...livrosFavoritosNateli,
];
console.log("todosLivrosFavoritos", todosLivrosFavoritos);
console.log("livrosFavoritosJoao", ...livrosFavoritosJoao);
