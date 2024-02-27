//O que são funções fábricas?

//São funções que vão receber dados e retornar esses dados no formato de um objeto

let jujuba = {
	animal: "Girafa",
	altura: "5.5",
	nome: "Jujuba",
};

let pandora = {
	animal: "cachorro",
	altura: "40cm",
	nome: "pandora",
};

//Toda vez que for criar um novo animal, temos que criar na mão um novo objeto

//chato, não? eu odeio coisa manual

//Uma solução mais chique

//função fábrica

// function criarAnimal(animal, altura, nome) {
// 	let animalFabricado = { //declarei a variavel
// 		animal: animal,
// 		altura: altura,
// 		nome: nome,
// 	};
// 	return animalFabricado; //retormo a variavel
// }

//1 refact -> estou retornando direto

// function criarAnimal(animal, altura, nome) {
// 	return {
// 		animal: animal,
// 		altura: altura,
// 		nome: nome,
// 	};
// }

//2 refact-> quando o parametro tem o mesmo nome da chave/propriedade não precisamos repetir
function Animal(animal, altura, nome) {
	return {
		animal,
		altura,
		nome,
	};
}

let nick = Animal("cachorro", 0.5, "nick");
let duke = Animal("cachorro", 0.4, "duke");

console.log("nick", nick);
console.log("duke", duke);

//Como estamos lidando com objeto, nós podemos acessar suas chaves/propriedades
console.log("qual o nome do cachorro da bea?", duke.nome);
console.log("qual altura do cachorro da bea?", duke.altura);
