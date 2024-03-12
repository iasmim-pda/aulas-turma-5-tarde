const button = document.getElementById("botao");
//Jquery abstrai o uso do getElementById
const botao = $("#botao"); //# -> id . -> class
const botaoHtml = $("button");
//O $ é o objeto do Jquery, ele seleciona os elementos do DOM

botao.click(() => {
	alert("Botão clicado!");
});

// O Ajax é uma função do Jquery que faz requisições HTTP
// para uma API ou servidor
// $.ajax() -> função do Jquery que faz requisições HTTP

// $.ajax({
// 	url: "url da api",
// 	type: "POST", // 'POST', 'PUT', 'DELETE', 'PATCH'
// 	data: {
// 		// os dados que serão enviados para a API/servidor
// 		nome: "Fulano",
// 		idade: 18,
// 	},
// 	sucess: (respostaApi) => {
// 		console.log(respostaApi);
// 	},
// 	error: (erro) => {
// 		console.error("Erro:", erro);
// 	},
// });

$.ajax({
	url: "https://api.chucknorris.io/jokes/random",
	type: "GET", // 'POST', 'PUT', 'DELETE', 'PATCH'
	dataType: "json", // 'xml', 'html', 'script', 'json'
	success: (data) => {
		//// função que será executada quando a requisição for feita

		//PERCEBAM QUE O JQUERY QUANDO USAMOS AJAX JÁ FAZ O PARSE DO JSON AUTOMATICAMENTE
		const container = $("#resposta-api"); //peguei a div
		container.text(data.value); //adicionei o texto da api na div
	},

	error: (error) => {
		console.error("Erro:", error);
	},
});

// $.ajax({
// 	type: "method", //"GET", // 'POST', 'PUT', 'DELETE', 'PATCH'
// 	url: "url", // url da API
// data: { //os dados que serão enviados para a API/servidor
// 	nome: "Fulano",
// }, //
// 	dataType: "dataType", // 'xml', 'html', 'script', 'json'
// 	success: function (response) {
// 		// função que será executada quando a requisição for feita
// 		console.log(response);
// 	},
// 	error: function (error) {
// 		// função que será executada caso ocorra um erro
// 		console.error("Erro:", error);
// 	},
// });

//Quando o código que é lido de cima para baixo chega em um erro não tratado
//Isso quebra a aplicação
//O código para de ser executado

//Chamando uma função que não existe
//funcaoQueNaoExiste();
//TRY E CATCH
try {
	//tente executar a função funcaoQueNaoExiste
	funcaoQueNaoExiste();
} catch (error) {
	//pega o erro
	//se não funcionar, não pare meu código meu não bino
	//me diga qual é o erro e siga o baile
	//o catch serve para tratar o erro
	//sabe quando aparece um "aconteceu um erro, tente novamente"
	//nos aplicativos que vocês usam?
	// é o catch que faz isso
	//é um erro sendo tratado
	alert("Ocorreu um erro, tente novamente mais tarde");
	console.error("Erro:", error);
}

function somaDoisNumeros(numero1, numero2) {
	//se a função não receber um número
	//ela vai retornar um erro
	//isso é uma validação
	if (typeof numero1 !== "number" || typeof numero2 !== "number") {
		//se o tipo de numero1 não for number
		// ou o tipo de numero2 não for number

		//lança um erro
		//para fazer a validação daquilo que minha função está recebendo
		throw new Error("Os parâmetros devem ser números");
		//throw -> vem do inglês "lançar" ou "jogar"
		//ou seja, ele jogar um erro
	}
	return numero1 + numero2;
}

//a função somaDoisNumeros espera receber dois números
// se não receber, a função joga um erro

//O que para a aplicação é um erro não tratado

//cabe a minha aplicação tratar esse erro

try {
	//tente somar
	somaDoisNumeros(1, "2");
} catch (error) {
	//se não conseguir, pegue o erro
	//e mostre no console
	console.error("Erro TRATADO:", error);
}
