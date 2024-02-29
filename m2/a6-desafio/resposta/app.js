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
