// Model: ele é o manipulador de dados, no caso aqui vamos consumir a API do GitHub e tratar esse dados no model;
// A View: é o que você quer mostrar na tela e também manipular elementos que estão diretamente ligados a visualização;
// O Controller:  é o que faz a comunicação entre o Model e a View, é ele que vai saber qual dado é transitado entre os dois.

// Modelo
class Produto {
  constructor(imagem, titulo, preco) {
    this.imagem = imagem;
    this.titulo = titulo;
    this.preco = preco;
  }
}

// Visualização
class ProdutoCard {
  constructor(produto) {
    this.produto = produto;
  }

  render() {
    return `
      <div class="card">
        <img src="${this.produto.imagem}" alt="${this.produto.titulo}">
        <h2>${this.produto.titulo}</h2>
        <p>${this.produto.preco}</p>
      </div>
    `;
  }
}

// Controlador
class ProdutoController {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(imagem, titulo, preco) {
    const produto = new Produto(imagem, titulo, preco);
    this.produtos.push(produto);

    const produtoCard = new ProdutoCard(produto);
    document.body.innerHTML += produtoCard.render();
  }
}