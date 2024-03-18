class Carro {
	constructor(make, model, year, mileage, price) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.mileage = mileage;
		this.price = price;
	}
}
//Nesse array vazio eu vou armazenar todos os carros que eu criar
//isso aqui vai simular o nosso banco de dados
let listagemDeCarros = [];

//seleciono o meu formulario
const formulario = document.getElementById("car-form");

//Quando trabalhamos com a tag form nós podemos pegar todos os
// inputs do formulario em um objeto quando fazemos o submit dos dados\
//adiciono um evento de submit ao formulario

formulario.addEventListener("submit", function (evento) {
	//previno o comportamento padrão do formulario
	evento.preventDefault();
	//pego os valores dos inputs
	const make = document.getElementById("make").value;
	const model = document.getElementById("model").value;
	const year = document.getElementById("year").value;
	const mileage = document.getElementById("mileage").value;
	const price = document.getElementById("price").value;

	let objeto = {
		marca: make,
		modelo: model,
		ano: year,
		quilometragem: mileage,
		preco: price,
	};

	//posso criar um objeto a partir de uma instancia de uma classe
	//que é basicamente um modelo

	let carro = new Carro(make, model, year, mileage, price);
	//adiciono o carro no array
	listagemDeCarros.push(carro);
	renderizarCarros(listagemDeCarros);
});

function renderizarCarros(arrayDeCarros) {
	//pego a div onde vou adicionar os carros
	const container = document.getElementById("car-list");
	//limpo o conteudo da div
	container.innerHTML = "";
	//para cada carro no array
	//forEach é um método de array, um laço de repetição
	//o que ela faz é pegar cada item do array e executar uma função
	//nesse caso, para cada item do array de carros
	//ou para cada carro
	//eu estou criando o card
	arrayDeCarros.forEach((carro) => {
		//crio um card
		const card = document.createElement("div");
		//adiciono a classe card
		card.classList.add("card");
		//adiciono o html do card
		card.innerHTML = `
				<h2>${carro.make}</h2>
				<p>${carro.model}</p>
				<p>${carro.year}</p>
				<p>${carro.mileage}</p>
				<p>${carro.price}</p>
				`;
		//adiciono o card no container
		container.appendChild(card);
	});

	//se eu quisesse fazer a mesma coisa com um for
	//Porém o forEach é mais legível/semântico/bonito
	// for(let i = 0; i < arrayDeCarros.length; i++){
	// 	const carro = arrayDeCarros[i];
	// 	const card = document.createElement("div");
	// 	card.classList.add("card");
	// 	card.innerHTML = `
	// 			<h2>${carro.make}</h2>
	// 			<p>${carro.model}</p>
	// 			<p>${carro.year}</p>
	// 			<p>${carro.mileage}</p>
	// 			<p>${carro.price}</p>
	// 			`;
	// 	container.appendChild(card);
	// }

}



//Peguei o meu formulario
//Adicionei um evento de submit
//Quando o formulario for submetido
//Vou pegar os valores dos inputs
//Vou criar um objeto com esses valores a partir da classe Carro
//Vou adicionar esse objeto no array listagemDeCarros
//Vou chamar a função renderizarCarros e passar o array listagemDeCarros como argumento






























class Carro {
	constructor(make, model, year, mileage, price) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.mileage = mileage;
		this.price = price;
	}
}

let carList = [];

document.getElementById("car-form").addEventListener("submit", function (e) {
	e.preventDefault();
	const make = document.getElementById("make").value;
	const model = document.getElementById("model").value;
	const year = document.getElementById("year").value;
	const mileage = document.getElementById("mileage").value;
	const price = document.getElementById("price").value;
	const car = new Carro(make, model, year, mileage, price);
	carList.push(car);
	displayCars();
});

document.getElementById("remove-car").addEventListener("click", function () {
	carList.pop();
	displayCars();
});

function displayCars() {
	const carListDiv = document.getElementById("car-list");
	carListDiv.innerHTML = "";
	carList.forEach((car, index) => {
		const carCard = document.createElement("div");
		carCard.className = "car-card";
		carCard.innerHTML = `
          <h2>Carro ${index + 1}</h2>
          <p>Marca: ${car.make}</p>
          <p>Modelo: ${car.model}</p>
          <p>Ano: ${car.year}</p>
          <p>Quilometragem: ${car.mileage}</p>
          <p>Preço: ${car.price}</p>
      `;
		carListDiv.appendChild(carCard);
	});
}
