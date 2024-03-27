//Model:

class Usuario {
	constructor(nome, email, senha) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.dataDeCriacao = new Date();
	}
	//os métodos que tiverem relação com a criação do dado, ficam na model
}
// ----------------------------------------------------------------------
// const novoUsuario = new Usuario("Miszael", "miszael@pda.com", "123456")
// console.log(novoUsuario)

// ----------------------------------------------------

// View -> Visualização dos dados, a parte que mostra pro usuário
//função de view
function CardUsuario(dadosUsuario) { //recebe o nosso dado, que é do tipo Usuario, que vem da model
	//innerHTML -> Pega a string e transforma em html
	const view = `
 <div>
  <h3>${dadosUsuario.nome}</h3>
  <p>${dadosUsuario.email}</p>
  <p>Data de criação: ${dadosUsuario.dataDeCriacao}</p>
 </div>
 `;

 return view
}

//-----------------------------------------------------
//Controller -> Faz a comunicação entre a view e a model

// Controlador 
//Como o sistema de controle lida com exceções ou situações imprevistas?
//Sim, no controller que vai haver a tratativa de exceções
// O que podemos usar pra lidar com exceções? Try e Catch no controller
function UsuarioController(){
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value

  //usando a Model para criar um novo dado!!
  const novoUsuario = new Usuario(nome, email, senha)

  const divResultado = document.getElementById("resultado")

  //chamei a minha função de view
  //ela retorna um html
  // adicionei esse html na minha div resultado
  divResultado.innerHTML = CardUsuario(novoUsuario)
}













//MVC ORIENTAÇAO A OBJETO
//// Modelo
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

// Visualização
class UsuarioCard {
  constructor(usuario) {
    this.usuario = usuario;
  }

  render() {
    return `
      <div class="card">
        <h2>${this.usuario.nome}</h2>
        <p>${this.usuario.email}</p>
      </div>
    `;
  }
}

// Controlador
class UsuarioController {
  constructor() {
    this.usuarios = [];
  }

  adicionarUsuario(nome, email) {
    const usuario = new Usuario(nome, email);
    this.usuarios.push(usuario);

    const usuarioCard = new UsuarioCard(usuario);
    document.body.innerHTML += usuarioCard.render();
  }
}

const usuarioController = new UsuarioController();
usuarioController.adicionarUsuario('João Silva', 'joao.silva@example.com');
usuarioController.adicionarUsuario('Maria Pereira', 'maria.pereira@example.com');

