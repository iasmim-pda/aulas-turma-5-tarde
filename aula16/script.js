// Criar uma função que recebe uma idade
// verifica se a idade é maior que 18
// Se sim, impre no console pode entrar

let idade = 18;

//Escopo globa, tudo que estiver no arquivo, fora das chaves
let nomeGlobal = "Carlos"; // Essa variavel faz parte do escopo GLOBAL
//Ou seja, pode ser acessada por todo arquivo script.js

function verificacaoIdade(idade) {
	//Escopo Local -> dentro da função verificacaoIdade
	console.log(nomeGlobal);
	let nome = "Joao"; //variavel local, só pode ser acessada dentro da funcao

	// console.log(nome);
}

//Toda vez que você abrir as chaves { } você está abrindo um novo escopo

verificacaoIdade(19);

//console.log(nome); //meu filho, nome do que?
//não faz parte do meu escopo, brother

//O ESCOPO GLOBAL NAO ACESSA UMA VARIAVEL LOCAL
//O ESCOPO LOCAL ACESSA TODAS AS VARIAVEIS GLOBAIS
//O PAI NAO ACESSA O FILHO
// MAS O FILHO ACESSO O PAI

function exibirNome(nome) {
	return nome;
}

function soma(numero1, numero2) { //numero1 e numero2 -> sao parametros
	let somando = numero1 + numero2;
	return somando;
}

//Quando declaramos a função, declaramos seus parametros

//Já quando chamamos a função, passamos para ela os argumentos
soma(2, 4) // 2 e 4 -> são argumentos

//Garanta que os argumentos correspondam aos parametros!!!
soma("numero 2", "numero 4")
//Isso pode? pode
//vai funcionar? nao, vai retornar uma frase



function subtracao(numero1, numero2) {
  //quando declaramos variaveis dentro de uma funcao
  //podemos usar isso para garantir que a funçao tenha TUDO
//que ela precisa para executar
//sem depender de contexto externo

  let stringResultado = "Resultado: "
  let resultado = numero1 - numero2


  //uma vez que nossa funcao encontra a palavra return, ela vai retornar
  //o que precisa e parar a execuçao da função
  return stringResultado + resultado //encerra execução e retorna a variavel resultado

  if(resultado > 2){
    console.log(resultado)
  }

  //pode ter qualquer coisa acontecendo aqui embaixo
}