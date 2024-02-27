// Classe Carro

class Carro {
	constructor(marca, modelo, ano) {
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
		this.rodas = 4;
	}

	exibirInfoCarro() {
		return `A info é: ${this.ano} ${this.marca} ${this.modelo}`;
	}

	get() {
		return {
			marca: this.marca,
			ano: this.ano,
			modelo: this.modelo,
		};
	}
}

// let civic = new Carro("honda", "ej1", "2024");
// console.log("civic", civic);

// //como usamos um metodo da classse?
// //civic.exibirInfoCarro()
// console.log("civic", civic.exibirInfoCarro());

// console.log("civic obj", civic.get());
// Classe Pessoa
class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	dizerOla() {
		return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
	}
}

// Classe Livro
class Livro {
	constructor(titulo, autor) {
		this.titulo = titulo;
		this.autor = autor;
	}

	exibirInfoLivro() {
		return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
	}
}

// Classe Animal
class Animal {
	constructor(nome, especie) {
		this.nome = nome;
		this.especie = especie;
	}

	exibirInfoAnimal() {
		return `Este é ${this.nome}, um(a) ${this.especie}.`;
	}
}

// Classe Produto
class Produto {
	constructor(nome, preco, quantidade) {
		//passamos para o construtor aquilo que a classe precisa
		//para ser instanciada

		// é tipo a funcao fabrica -> constroi um objeto a ser utilziada na class
		this.nome = nome;
		this.preco = preco;
		this.precoTotal = preco * quantidade;
		this.tipo = "Regular";
	}

	exibirInfoProduto() {
		return `O produto "${this.nome}" custa R$${this.preco}.`;
	}

	exibirPrecoTotal() {
		//porque não poderia ser apenas precoTotal? porque o método nao tem acesso ao parametro
		//recebido pelo construtor antes de ser inicializado
		return this.precoTotal;
	}
}

let refrigerante = new Produto("Guarana Antartica", 12.3, 3);
//armazenei na minha variavel um produto instanciado com os paremetros acima

let infoRefrigerante = refrigerante.exibirInfoProduto();

console.log(infoRefrigerante);
console.log("refri nome", refrigerante.nome);
