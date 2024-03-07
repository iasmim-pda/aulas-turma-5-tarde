// Juntos desenvolveremos uma aplicação que pede o nome, o animal,
// a raça e a idade de seu pet de estimação, após coletar esses dados dos valores
// dos inputs que o usuário digitou, deveremos então criar uma classe
// para estruturar esses dados e retornar na tela a seguinte estrutura
// de objeto:

//1) Criar a nossa classe modelo
//2) Fazer uma função
//3) Pegar os dados do input
//4) Instanciar uma classe Pet
//5) Mostrar em tela o nosso objeto criado

class Pet {
	constructor(nome, animal, raca, idade) {
		this.nome = nome;
		this.animal = animal;
		this.raca = raca;
		this.idade = idade;
	}
}
//Como eu crio um pet?
let pandora = new Pet("pandora", "cachorro", "cachorro de patricinha", 2);

// //pegando os valores do input inseridos pelo usuario
// const nome = document.getElementById("nome").value;
// const animal = document.getElementById("animal").value;
// const raca = document.getElementById("raca").value;
// const idade = document.getElementById("idade").value;

// //Como eu crio um pet a partir dos dados do usuario?
// const novoPet = new Pet(nome, animal, raca, idade);
// console.log(novoPet);

//pegamos o botao do html
const botao = document.getElementById("criar-pet");

//adicionamos o evento de click
//passamos a funcao que queremos que seja executada no click
botao.addEventListener("click", function () {
	//callback ;)
	//pegando os valores do input inseridos pelo usuario
	const nome = document.getElementById("nome").value;
	const animal = document.getElementById("animal").value;
	const raca = document.getElementById("raca").value;
	const idade = document.getElementById("idade").value;

	//Como eu crio um pet a partir dos dados do usuario?
	const novoPet = new Pet(nome, animal, raca, idade);
	console.log(novoPet);
	//eu quero mostrar esse pet no site

	//criar um elemento
	//adicionar o novo pet nesse elemento
	//adicionar esse elemnto dentro da div com id resposta
	const divResposta = document.getElementById("resposta");
	const mostra = document.createElement("h1");
  //Mas no nosso caso, o JSON.stringfy que vai funcionar melhor
  //esse método transforma o objeto em uma string 
	mostra.innerHTML = JSON.stringify(novoPet);
	divResposta.appendChild(mostra);
});
