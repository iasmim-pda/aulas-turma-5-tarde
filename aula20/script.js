// Ele quer que o usuario possa inserir uma senha
// enquanto a senha tive menos de 8 digitos
// aparecerá um alert dizendo "a senha deve ter mais de 8 digitos"

let inserir = prompt("Crie uma senha, ela deve ter no mínino 8 digitos");

if (inserir.length < 8) {
	alert("A senha deve ter no minino 8 dígitos");
} else {
	alert("Senha criada com sucesso.");
}

//Refatorando com o While para que o código repita até o usuario escrever a senha correta

// inserir -> string
// como eu posso saber quantos caracteres tem numa string?
//com o .length -> então para saber se a string inserir tem no minino
// 8 caracteres, usamos inserir.length

while (inserir.length < 8) {
	//ESSE BLOCO DE CÓDIGO SO VAI ACONTECER SE A VARIAVEL TIVER MENOS DE 8 DIGITOS
	//ELSE, NAO ENTRA E SEGUE O RESTO DO CODIGO DEPOIS WHILE
	alert("A senha deve ter no minino 8 dígitos");

	//Reatribuindo um novo valor a variavel "inserir"
	inserir = prompt("Crie uma senha, ela deve ter no mínino 8 digitos");

	//Gil iria serir o prompt novamente aqui
	// if (inserir.length < 8) { //overengineering -> a condição do while já esta feita
	// 	alert("Tente novamente");
	// }
	//
}

// if (inserir >= 8) {
// 	alert("Senha criada com sucesso.");
// }

// o usuario insere uma senha
//se


//DIFERENCA DO WHILE VS WHILE
//A diferença é que o código dentro do DO, será reproduzido pelo 
//menos uma vez

// Ja quando usamos apenas while, o código de dentro do escopo do while
//só será reproduzido enquanto e quando a condição verdeiro

do {
	alert("Insira sua senha");
	inserir = prompt("Crie uma senha, ela deve ter no mínino 8 digitos");
}
 while (inserir.length < 8);
 {
	alert("A senha deve ter no minino 8 dígitos");

	//Reatribuindo um novo valor a variavel "inserir"
	inserir = prompt("Crie uma senha, ela deve ter no mínino 8 digitos");
}
