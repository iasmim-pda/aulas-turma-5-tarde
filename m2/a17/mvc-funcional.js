// Modelo
class Produto {
  constructor(imagem, titulo, preco) {
    this.imagem = imagem;
    this.titulo = titulo;
    this.preco = preco;
  }
}

// Visualização
const ProdutoCard = (produto) => `
  <div class="card">
    <img src="${produto.imagem}" alt="${produto.titulo}">
    <h2>${produto.titulo}</h2>
    <p>${produto.preco}</p>
  </div>
`;

// Controlador
const ProdutoController = () => {
  let produtos = [];

  const adicionarProduto = (imagem, titulo, preco) => {
    const produto = new Produto(imagem, titulo, preco);
    produtos = [...produtos, produto];

    document.body.innerHTML += ProdutoCard(produto);
  };

  return {
    adicionarProduto
  };
};

const produtoController = ProdutoController();
produtoController.adicionarProduto('imagem.jpg', 'Produto 1', 'R$100');
produtoController.adicionarProduto('imagem2.jpg', 'Produto 2', 'R$200');