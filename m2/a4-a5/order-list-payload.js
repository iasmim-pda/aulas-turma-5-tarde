//Recebe os dados de algum lugar -> BACKEND

let historicoPedidos = {
	customerId: "12345",
	nome: "Ana Carolina",
	endereco: {
		rua: "Castro Alves",
		numero: "12a",
	},
	pedidos: [
		{
			orderId: "ord001",
			date: "2022-01-01",
			items: [
				{
					name: "Product 1",
					productId: "abc",
					quantity: 2,
					price: 19.99,
				},
				{
					name: "Product 2",
					productId: "def",
					quantity: 1,
					price: 29.99,
				},
			],
		},
		{
			orderId: "ord002",
			date: "2022-02-01",
			items: [
				{
					name: "Product 3",
					productId: "ghi",
					quantity: 3,
					price: 9.99,
				},
			],
		},
	],
};

// console.log(historicoPedidos);
console.log(historicoPedidos.pedidos[0].items[0].name);

// {
//   name: "Product 1",
//   productId: "abc",
//   quantity: 2,
//   price: 19.99,
// },

function Produto(nome, quantidade, preco) {
	return {
		nomeProduto: nome,
		precoTotal: quantidade * preco,
	};
}

//Peguei um item aleatorio do meu objeto historicoPedidos apenas para exemplo
//historicoPedidos -> OBJETO
// pedidos -> array dentro do objeto historicoPedidos -> peguei o primeiro pedido
//dentro do primeiro pedido, peguei o primeiro item acessando o array items
let produto = historicoPedidos.pedidos[0].items[0];

console.log("produto", produto);

let produtoFormatado = Produto(produto.name, produto.quantity, produto.price);

console.log("produtoFormatado", produtoFormatado);
