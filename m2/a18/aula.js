//
class Funcionario {
	constructor(nome, salario, cargo, idade, anoDeAdmissao, cpf) {
		this.nome = nome;
		this.salario = salario;
		this.cargo = cargo;
		this.idade = idade;
		this.anoDeAdmissao = anoDeAdmissao;
		this.cpf = cpf;
	}

	getSalario() {
		// calculo do salario liquido
		return this.salario - this.salario * 0.11; // desconto de 11% de impostos
	}

	aumentarSalario(quantiaDeAumento) {
		this.salario = this.salario + quantiaDeAumento;
		console.log(`O novo salário é R$ ${this.salario}`);
	}


}

// class GerenteRH {
//   constructor(nome, salario, cargo, idade, anoDeAdmissao, cpf) {
// 		this.nome = nome;
// 		this.salario = salario;
// 		this.cargo = cargo;
// 		this.idade = idade;
// 		this.anoDeAdmissao = anoDeAdmissao;
// 		this.cpf = cpf;
// 	}

//   getSalario() {
//     // calculo do salario liquido
//     return this.salario - (this.salario * 0.11);// desconto de 11% de impostos
//   }
// }

class Gerente extends Funcionario {
	constructor(
		nome,
		salario,
		idade,
		anoDeAdmissao,
		cpf,
		departamento,
		listaDeFuncionarios
	) {
		super(nome, salario, "Gerente", idade, anoDeAdmissao, cpf);
		this.departamento = departamento;
		this.listaDeFuncionarios = listaDeFuncionarios;
	}

	promoverFuncionario(funcionario) {
		funcionario.aumentarSalario(1500);
		console.log(
			`O funcionário ${funcionario.nome} recebeu uma promoção no departamento de ${this.departamento}`
		);
	}
}

let funcionario1 = new Funcionario(
	"João Miguel",
	2000,
	"Analista",
	25,
	2020,
	12345678900
);
let funcionario2 = new Funcionario(
	"Maria",
	2500,
	"Analista",
	30,
	2018,
	12345678901
);
let funcionario3 = new Funcionario(
	"Pedro",
	3000,
	"Analista",
	35,
	2015,
	12345678902
);

let listaDeFuncionarios = [funcionario1, funcionario2, funcionario3];

let gerente = new Gerente(
	"Leticia",
	10000,
	28,
	2024,
	12345678990,
	"Internacional",
	listaDeFuncionarios
);

gerente.promoverFuncionario(funcionario1);

// console.log(funcionario1);
console.log(gerente.getSalario());
