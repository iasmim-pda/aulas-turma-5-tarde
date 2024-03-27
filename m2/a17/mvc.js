//Juntos vamos desenvolver um sistema que tenha um modelo de produto,
//que recebe imagem, título e preço, e retorna um objeto com as três propriedades,
//uma visualização que tenha um card de produto que deve conter uma imagem, um
//título e um parágrafo para o preço, para ligar o modelo a visualização, vamos
//criar um controlador que utiliza o modelo e com os dados retornados insere eles na visualização.

//Model:

class Produto {
	constructor(imagemLink, titulo, preco) {
		this.imagemLink = imagemLink;
		this.titulo = titulo;
		this.preco = preco;
	}
}

//------------------------------------------

// View

function CaixaProduto(imagemLink, titulo, preco) {
	return `
    <div>
      <img src='${imagemLink}'/>
      <h1>${titulo}</h1>
      <h2>${preco}</h2>
    </div>
  `;
}

//Controller
function ProdutoController() {
	const imagemLink = document.getElementById("imagemLink").value;
	const titulo = document.getElementById("titulo").value;
	const preco = document.getElementById("preco").value;

	const novoProduto = new Produto(imagemLink, titulo, preco);

	const resultado = document.getElementById("resultado");

	resultado.innerHTML = CaixaProduto(
		novoProduto.imagemLink,
		novoProduto.titulo,
		novoProduto.preco
	);
}
