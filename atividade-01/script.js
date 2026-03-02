/*Exercício 1 – Comissão de Vendedor

Um vendedor vendeu R$ 1500,00.
Ele recebe 10% de comissão.

Calcule a comissão e mostre o resultado usando concatenação.*/

let vendedor = 1500;
let comissao = vendedor * 0.10;

console.log("O resultado da Comissão é $" + comissao.toFixed(2));


/* Exercício 2 – Salário com Bônus

Um funcionário ganha R$ 2000,00.
Recebe um bônus de R$ 500,00.

Calcule o salário total e mostre usando interpolação. */

let salario = 2000;
let bonus = 500;
let total = salario + bonus;

console.log(`O salário total é $ ${total.toFixed(2)}`)

/*Exercício 3 – Desconto em Produto

Um produto custa R$ 350,00.
Ele está com 20% de desconto.

Calcule:

O valor do desconto

O valor final do produto

Exiba tudo no console.*/

let produto = 350;
let desconto = 0.20;

let valordodesconto = produto * desconto;
let valorfinal = produto - valordodesconto;

console.log(`O valor do desconto é $ ${valordodesconto.toFixed(2)}`)
console.log(`Valor final do produto: $ ${valorfinal.toFixed(2)}`)

/*Exercício 4 – Média de Notas

Um aluno tirou as notas:

7

8

6

Calcule a média e exiba o resultado com 2 casas decimais usando .toFixed().*/

const media1 = 7;
const media2 = 8;
const media3 = 6;

const mediafinal = (media1 + media2 + media3) /3;

console.log(`Media final é  ${mediafinal.toFixed(2)}`)



/*Exercício 5 – Nome em Maiúsculo

Crie uma variável com seu nome.

Exiba:

Seu nome normal

Seu nome todo em maiúsculo (usando método)*/

let nome = "victor";

console.log("Nome normal: " + nome);
console.log(`Nome Maiusculo: ${nome.toUpperCase()}`);


/*Exercício 6 – Conversão de Número

Crie uma variável:

let numero = "50";

Converta para número e multiplique por 2.

Exiba o resultado.*/

let numero = "50";
let convertido = parseInt(numero,10);
let resultado = convertido * 2;

console.log("Resultado: " + resultado);
