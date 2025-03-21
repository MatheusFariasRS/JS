import * as numbers from './numbers.js'; //exporta tudo 
// import { sum, round } as numbers from './numbers.js'; exporta somente o que foi 
//especificado e n usa apelido, somente a function direto
import Product from './products.js';

const x = numbers.sum(3, 4);

console.log(x)
console.log(numbers.round(3.2345, 2))

//console.log(numbers.exp(3, 4));

const obj = new Product("Computador", 800.0, 10);

console.log(obj);