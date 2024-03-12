//instanciamos a classe XMLHttpRequest
//ou seja, criando um novo objeto do tipo XMLHttpRequest e armazenando na variavel request
let request = new XMLHttpRequest();

//abri a request, selecionei o metodo e a api
request.open("GET", "https://api.chucknorris.io/jokes/random");

//enviei a requisição
request.send();

//Criei a função que será executada quando a requisição for feita
request.onload = function () {
	console.log(request.status);

	console.log(typeof request.response); // [json] string

	console.log("Fazendo um parse/conversão/desserialização dos dados"); //converter para um objeto "usável"

	let dadoConvertido = JSON.parse(request.response);

	console.log("dadoConvertido", dadoConvertido);

	console.log(typeof dadoConvertido); // objeto

	console.log(dadoConvertido.value); //acessando o valor de uma chave/propriedade do meu objeto

	const container = document.getElementById("resposta-api");
	container.innerText = dadoConvertido.value;
};
