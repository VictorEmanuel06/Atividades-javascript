/*🟢 Nível 1 – Cálculo + Interpolação
🔹 Exercício 1 – Taxa de Entrega

Uma loja vendeu um produto por R$ 250,00.
A taxa de entrega é de 8%.

👉 Calcule:

O valor da taxa

O valor total com taxa

Mostre usando interpolação.*/

let valorproduto = 250;
let taxadeentrega = 0.08;

let valordataxa = (valorproduto * taxadeentrega);
let valortotal = (valorproduto + valordataxa);

console.log(`Valor da taxa de entrega: ${valordataxa.toFixed(2)}`);
console.log(`Valor total com a taxa de entrega: ${valortotal.toFixed(2)}`);



/*🟡 Nível 2 – Trabalhando com porcentagem
🔹 Exercício 2 – Aumento Salarial

Um funcionário ganha R$ 3000,00.
Ele recebeu um aumento de 12%.

👉 Calcule:

O valor do aumento

O novo salário

Mostre usando concatenação.*/

let funcionario = 3000;
let aumento = 0.12;

let valordoaumento = (funcionario * aumento);
let novosalario = (valordoaumento + funcionario);

console.log("O valor do aumento é: R$" + valordoaumento.toFixed(2));
console.log("O novo salário é: R$" + novosalario.toFixed(2));


/*🟡 Nível 2.5 – Média com mais números
🔹 Exercício 3 – Média de 4 notas

Notas:

9

5

7

8

👉 Calcule a média corretamente e mostre com 2 casas decimais.*/

let media1 = 9;
let media2 = 5;
let media3 = 7;
let media4 = 8;

let mediafinal = (media1 + media2 + media3 + media4) /4;

console.log(`Media final é: ${mediafinal.toFixed(2)}`)



/*🔵 Nível 3 – String + Método
🔹 Exercício 4 – Nome formatado

Crie uma variável:

let nome = "victor emanuel";

👉 Mostre:

Tudo em maiúsculo

Tudo em minúsculo

Quantidade de caracteres (use .length)*/

let nome = "Victor Emanuel";

console.log("Nome normal " + nome);
console.log(`Nome Maiúsculo ${nome.toUpperCase()}`);
console.log("Nome minúsculo: " + nome.toLowerCase());
console.log("Quantidade de caracteres: " + nome.length);


/*🔴 Nível 4 – Conversão + Cálculo
🔹 Exercício 5 – Multiplicação de String Numérica
let preco = "150";
let quantidade = "3";

👉 Converta os dois para número
👉 Multiplique
👉 Mostre o valor total com 2 casas decimais*/

let preco = "150";
let quantidade = "3";

let convertido1 = parseInt(preco,10);
let convertido2 = parseInt(quantidade,10);

let precomult = (convertido1 * convertido2);

console.log(`Valor total: R$ ${precomult.toFixed(2)}`);


