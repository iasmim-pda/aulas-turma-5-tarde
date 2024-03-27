class Usuario {
	constructor(nome, email, senha) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.dataDeCriacao = new Date();
	}
	//os métodos que tiverem relação com a criação do dado, ficam na model
}