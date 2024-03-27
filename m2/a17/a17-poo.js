//MVC orientado a objetos puro!!! 
// Modelo
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