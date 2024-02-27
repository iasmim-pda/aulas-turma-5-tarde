let historicoPedidos = {
	idCliente: "12345",
	pedidos: [
		{
			idPedido: "ord001",
			data: "2022-01-01",
			itens: [
				{
					idProduto: "abc",
					nomeProduto: "Produto 1",
					quantidade: 2,
					preco: 19.99,
				},
				{
					idProduto: "def",
					nomeProduto: "Produto 2",
					quantidade: 1,
					preco: 29.99,
				},
			],
		},
		{
			idPedido: "ord002",
			data: "2022-02-01",
			itens: [
				{
					idProduto: "ghi",
					nomeProduto: "Produto 3",
					quantidade: 3,
					preco: 9.99,
				},
			],
		},
		{
			idPedido: "ord003",
			data: "2022-03-01",
			itens: [
				{
					idProduto: "jkl",
					nomeProduto: "Produto 4",
					quantidade: 1,
					preco: 39.99,
				},
				{
					idProduto: "mno",
					nomeProduto: "Produto 5",
					quantidade: 2,
					preco: 49.99,
				},
			],
		},
	],
};

let corpoTabela = document.querySelector("#tabelaHistoricoPedidos tbody");

historicoPedidos.pedidos.forEach((pedido) => {
	let linha = document.createElement("tr");

	let colunaIdPedido = document.createElement("td");

	colunaIdPedido.textContent = pedido.idPedido;

	let colunaData = document.createElement("td");
	colunaData.textContent = pedido.data;

	let colunaItens = document.createElement("td");

	pedido.itens.forEach((item) => {
		let paragrafo = document.createElement("p");
		paragrafo.textContent = `${item.quantidade}x ${item.nomeProduto} - R$${item.preco}`;
		colunaItens.appendChild(paragrafo);
	});

	linha.appendChild(colunaIdPedido);
	linha.appendChild(colunaData);
	linha.appendChild(colunaItens);

	corpoTabela.appendChild(linha);
});
