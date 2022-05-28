 // Tipos primitivos:

// boolean -- Declara se é verdadeiro ou falso
// var vOuF = false;
// console.log(typeof(vOuF));

/*--------------------------------------------------------------------*/

// number -- Declara se o valor é inteiro ou fracionado.
// var numeroQualquer = 1;
// console.log(typeof(numeroQualquer));

/*--------------------------------------------------------------------*/

// string -- Declara por nome.
// var nome = 'rodrigo';
// console.log(typeof(nome));

/*--------------------------------------------------------------------*/

// function -- Funcão é inicio de um bloco de códigos.
// var funcao = function() {}
// console.log(typeof(funcao));

/*--------------------------------------------------------------------*/

// Escopo: 
// O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

// Escopo Global - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

// Escopo Local - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

/*--------------------------------------------------------------------*/

// Como declarar: 

// var =  (Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null);

// Ex:
// var variavel = 'rodrigo' ;  
// variavel = 'araujo';
// console.log(variavel);

/*--------------------------------------------------------------------*/

// let = (Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null);

// Ex:
// let variavel2 = 'rodrigo';
// variavel2 = 'araujo';
// console.log(variavel2);

/*--------------------------------------------------------------------*/

// const = (Escopo local de bloco, somente leitura, não pode ter seu valor alterado, e obrigatóriamente deve conter um valor inicial);

// Ex: 
// const constante = 'rodrigo';
//constante = 'araujo'; - (Não pode ser ressignificada, não pode ser reatribuida);
// console.log(constante);

// Ex: Escopo Global 
// var escopoGlobal = 'global';
// console.log(escopoGlobal);

// Ex: Escopo Local 
// function escopoLocal() {
//     let escopoLocalInterno = 'local';
//     console.log(escopoLocalInterno);
// }
// escopoLocal();

/*--------------------------------------------------------------------*/

// Atribuição:
// var atribuicao = 'rodrigo'; 

// Comparação:
// var comparacao = '0' == 0;
// console.log(comparacao);

// Comparação Idêntica 
// var comparacaoIdentica = '0' === 0;
// console.log(comparacaoIdentica);

/*--------------------------------------------------------------------*/

// Operadores Aritméticos

// Adição
// var adicao = 1 + 1;
// console.log(adicao);

// Subtração
// var subtracao = 2 - 1;
// console.log(subtracao);

// Multiplicação
// var multiplicacao = 5 * 2;
// console.log(multiplicacao);

// Divisão Real
// var divisaoReal = 99 / 3;
// console.log(divisaoReal);

// Divisão Inteira 
// var divisaoInteira = 68 % 5;
// console.log(divisaoInteira);

// Potenciação 
// var potenciacao = 2 ** 10;
// console.log(potenciacao);

/*--------------------------------------------------------------------*/

// Operadores Relacionais

// Maior Que
// var maiorQue = 5 > 2;
// console.log(maiorQue);

// Menor Que
// var menorQue = 5 < 2;
// console.log(menorQue);

// Maior ou Igual
// var maiorOuIgual = 5 >= 2;
// console.log(maiorOuIgual);

// Menor ou Igual
// var menorOuIgual = 5 <= 2;
// console.log(menorOuIgual);

/*--------------------------------------------------------------------*/

// Operadores Lógicos

// var e = true && false;
// console.log (e);

// var ou = true || false;
// console.log(ou);

// var nao = !true;
// console.log(nao);

/*--------------------------------------------------------------------*/






