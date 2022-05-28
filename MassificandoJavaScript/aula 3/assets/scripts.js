// O que são vetores ou arrays?

// Como declarar um array :
// let array = ['string', 1, true];
// console.log(array);

// Pode guardar vários tipos de dados :
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

// forEach (Itera um array)
// array.forEach(function(item, index){console.log(item, index)});

// push() (Adiciona item no final do array)
// Ex 1:
// array.push('novo, item');
// console.log(array)

// Ex 2:
// array.push(1);
// console.log(array)

// Ex 3:
// array.push([]);
// console.log(array)

// array.pop();  (Pop apaga a ultima posição do array)
// console.log(array);

// array.shift(); (Shift apaga a primeira posição do array)
// console.log(array); 

// array.unshift('novo item no inicio'); (Adiciona item no início do array)
// console.log(array);

// console.log(array.indexOf(true)); (Retorna o índice de um valor)

// array.splice(0, 3); (Remove ou substitui um item pelo índice)
// console.log(array);

// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// let object = {string: 'string',  number: 1,  boolean: true,  array: ["array"],  objectInterno: {objectInterno: 'objeto interno'}};
// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

// var {string, boolean, objectInterno} = object;
// console.log(string, boolean, objectInterno);