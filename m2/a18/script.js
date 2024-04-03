// Classe base
// console.log(teste)
console.log(teste);
class Funcionario {
	constructor(nome, salario) {
		this.nome = nome;
		this.salario = salario;
	}

	aumentarSalario(quantia) {
		this.salario += quantia;
		console.log(`O salário de ${this.nome} agora é ${this.salario}`);
	}
}

// Classe derivada
class Gerente extends Funcionario {
	constructor(nome, salario, departamento) {
		super(nome, salario);
		this.departamento = departamento;
	}

	promoverFuncionario(funcionario) {
		funcionario.aumentarSalario(1000);
		console.log(
			`${funcionario.nome} foi promovido no departamento de ${this.departamento}`
		);
	}
}

// Criando uma instância de Gerente e Funcionario
const gerente = new Gerente("João", 5000, "Vendas");
const funcionario = new Funcionario("Maria", 2000);

gerente.promoverFuncionario(funcionario); // O salário de Maria agora é 3000. Maria foi promovido no departamento de Vendas.
