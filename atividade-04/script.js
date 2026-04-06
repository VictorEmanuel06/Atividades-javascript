//Soma de dois números
function somar(a,b) {
    return a + b;
}

console.log(somar(2, 3));

//Número par ou ímpar
function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    } 
}

console.log(verificarPar(5)); //mosta o resultado


//Contar de 1 a 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Maior número de um array
function maiorNumero(lista) {
    return Math.max(...lista);
}

console.log(maiorNumero([1, 5, 3, 9, 2])); //9


//Inverter uma string
function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}

console.log(inverterTexto("javascript"));

//Contar vogais
function contarVogais(texto) {
    let contador = 0;
    let vogais = "aeiouAEIOU";

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("OpenAI"));


//Tabuada
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

tabuada(5);