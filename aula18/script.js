document.write("<h1>Hello world!</h1>");

let variavel = prompt("Escreva seu nome:");


//Estudem template strings
document.write(`<h2>Olá, sou o ${variavel}!</h2>`);

// document.createElement
// document.getElementById
// document.getElementByClass
let dezoito = "18";
let palavra = "Phelipe".replace("e", "i"); // retornar Philipi

"A idade do Phelipe é: 19".replace("19", "20"); //"A idade do Phelipe é: 20

"A natália é uma densenvolvedora incrivel".replace("incrivel", "maravilhosa")
//Como substituir mais de uma letra? //Comece pesquisando sobre REGEX



palavra.length;
palavra.toLowerCase(); //retornar em minusculo
palavra.toUpperCase(); //retornar em maiusculo




let alunoNota10 = "Phelipe Cezario" //

//Posição 0 da minha String -> P
//Posição 1 da minha String -> h
//Posição 2 da minha String -> e
//Posição 3 da minha String -> l
//Posição 4 da minha String -> i
//Posição 5 da minha String -> p
//Posição 6 da minha String -> e

//Caso eu quisesse apenas o primeiro nome dessa string?
//Para selecionar apenas uma parte da string, usamos o metodo slice
alunoNota10.slice(0, 6) // Phelipe

//Há varias formas de passar argumento para os métodos. Leia a documentação
//do MDN para entender os casos de uso




//nomes de produtos, preços

//Quando backend nao facilita a vida do front:
//DA RUIM
// Tem um tipo de dado
//COR: a gente pode mandar "amarelo" 

//"amarelo" e "AMARELO"

// if(cor.toLowerCase() == "amarelo")

// if(cor == "amarelo")
// if(cor == "AMARELO")