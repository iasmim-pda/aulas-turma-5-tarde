class Usuario {
	#password;
	constructor(email, senha) {
		this.email = email;
		this.#password = senha;
	}

	isAdmin() {
		return this.admin === true;
	}

	// get password() {
	// 	return this.#password;
	// }

	// set password(value) {
	// 	this.#password = value;
	// }
}

const User1 = new Usuario("iasmim@email.com", "1234");

console.log(User1.password); // 1234
console.log(User1);

//Os getters são usados para obter o valor de uma propriedade específica. 
//Eles são especialmente úteis quando você quer fazer algum tipo de cálculo ou 
//manipulação de dados antes de retornar a propriedade. Aqui estão alguns exemplos práticos:
class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  // Getter para calcular a área do círculo
  get area() {
    return Math.PI * this.raio * this.raio;
  }

  // Getter para calcular a circunferência do círculo
  get circunferencia() {
    return 2 * Math.PI * this.raio;
  }
}

let c = new Circulo(5);
console.log(c.area); // 78.53981633974483
console.log(c.circunferencia); // 31.41592653589793

class Pessoa {
  constructor(primeiroNome, ultimoNome) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
  }

  // Getter para obter o nome completo
  get nomeCompleto() {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  }

	// Setter para definir o nome completo
	set nomeCompleto(value) {
		const partes = value.split(" ");
		this.primeiroNome = partes[0];
		this.ultimoNome = partes[1];
	}
}

let p = new Pessoa("João", "Silva");
console.log(p.nomeCompleto); // João Silva

//Os setters são usados para definir o valor de uma propriedade específica. 
//Eles são especialmente úteis quando você quer fazer algum tipo de validação ou 
//manipulação de dados antes de definir a propriedade. 