function comparadorNumerico(n1, n2) {
    const primeiraFrase = criouPrimeiraFrase(n1, n2);
    const segundaFrase = criouSegundaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criouPrimeiraFrase(n1, n2) {
    let valoresIguais = ' ';

    if(n1 !== n2) {
        valoresIguais = 'não';
    }

    return `os números ${n1} e ${n2}${valoresIguais}são iguais.`
};

function criouSegundaFrase(n1, n2) {
    const soma = n1 + n2;

    var resultadoDe10 = 'menor';
    var resultadoDe20 = 'menor';

    const compararCom10 = soma > 10;
    const compararCom20 = soma > 20;

    if(compararCom10) {
        resultadoDe10 = 'maior';
    }

    if(compararCom20) {
        resultadoDe20 = 'maior';
    }

    return `Sua soma ${soma}, que é ${resultadoDe10} que 10 e ${resultadoDe20} que 20.`;
}

console.log( comparadorNumerico (20,  20));