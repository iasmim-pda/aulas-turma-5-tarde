
/* Enunciado do Projeto: Renderização de Histórico de Pedidos de E-commerce

Neste projeto, você utilizará HTML, CSS, DOM e JavaScript para criar um site
que renderiza o histórico de pedidos de um cliente em um comércio de 
smartphones. O histórico de pedidos será fornecido como um objeto 
JavaScript, que você usará para criar uma tabela dinâmica.

Objetivo:

Seu objetivo é criar uma página web que exiba o histórico de pedidos do 
cliente de maneira clara e fácil de entender. Cada pedido deve ser exibido 
em uma linha separada, com colunas para o ID do pedido, a data do pedido, 
os itens do pedido, o endereço de entrega e o status do pedido.

Passo a Passo:

Crie o HTML básico: Comece criando um arquivo HTML básico com uma tabela 
vazia. A tabela deve ter um cabeçalho com colunas para o ID do pedido, a 
data do pedido, os itens do pedido, o endereço de entrega e o status do 
pedido.

Estilize a tabela com CSS: Use CSS para estilizar a tabela. 
Você pode definir a cor de fundo, a cor do texto, a fonte, o tamanho da 
fonte, o espaçamento, as bordas e outros aspectos visuais da tabela.

Incorpore o objeto JavaScript: Adicione o objeto JavaScript fornecido ao 
seu arquivo HTML. Este objeto contém o histórico de pedidos que você estará 
renderizando.

Use JavaScript e DOM para preencher a tabela: Use JavaScript para iterar 
sobre o objeto de histórico de pedidos e criar uma nova linha na tabela 
para cada pedido. Para cada pedido, crie uma nova célula para cada 
propriedade do pedido (ID do pedido, data do pedido, itens do pedido, 
endereço de entrega, status do pedido) e adicione o valor da propriedade 
como o conteúdo da célula.

*/
let historicoPedidos = {
  idCliente: "12345",
  nomeCliente: "João Silva",
  pedidos: [
      {
          idPedido: "ord001",
          data: "2022-01-01",
          itens: [
              {
                  idProduto: "iphone12",
                  nomeProduto: "iPhone 12 Pro Max",
                  quantidade: 1,
                  preco: 1099.99,
              },
              {
                  idProduto: "galaxyS21",
                  nomeProduto: "Samsung Galaxy S21",
                  quantidade: 1,
                  preco: 799.99,
              },
          ],
          enderecoEntrega: {
              rua: "Rua Principal, 123",
              cidade: "São Paulo",
              estado: "SP",
              cep: "01234-567",
              pais: "Brasil",
          },
          status: "Entregue",
      },
      {
          idPedido: "ord002",
          data: "2022-02-01",
          itens: [
              {
                  idProduto: "pixel6",
                  nomeProduto: "Google Pixel 6",
                  quantidade: 1,
                  preco: 599.99,
              },
          ],
          enderecoEntrega: {
              rua: "Rua Secundária, 456",
              cidade: "Rio de Janeiro",
              estado: "RJ",
              cep: "98765-432",
              pais: "Brasil",
          },
          status: "Em trânsito",
      },
      {
          idPedido: "ord003",
          data: "2022-03-01",
          itens: [
              {
                  idProduto: "oneplus9",
                  nomeProduto: "OnePlus 9 Pro",
                  quantidade: 1,
                  preco: 969.99,
              },
          ],
          enderecoEntrega: {
              rua: "Rua Alternativa, 789",
              cidade: "Belo Horizonte",
              estado: "MG",
              cep: "54321-876",
              pais: "Brasil",
          },
          status: "Pendente",
      },
      {
          idPedido: "ord004",
          data: "2022-04-01",
          itens: [
              {
                  idProduto: "iphoneSE",
                  nomeProduto: "iPhone SE",
                  quantidade: 1,
                  preco: 399.99,
              },
          ],
          enderecoEntrega: {
              rua: "Rua Paralela, 1011",
              cidade: "Curitiba",
              estado: "PR",
              cep: "76543-210",
              pais: "Brasil",
          },
          status: "Pendente",
      }
  ],
};

console.log(historicoPedidos);
