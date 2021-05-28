const Stack = require('./Stack');

const pokemonCards = new Stack();
pokemonCards.push('Vivid voltage')


let result= pokemonCards.peek();
console.log(result);
console.log(result === 'Vivid voltage');

pokemonCards.push('Rebel Clash')
pokemonCards.push('Champions Path')
pokemonCards.push('XY Evolutions')

result = pokemonCards.pop();
console.log(result);
console.log(result === 'XY Evolutions');

result = pokemonCards.pop();
console.log(result);
console.log(result === 'Champions Path');

result = pokemonCards.pop();
console.log(result);
console.log(result === 'Rebel Clash');

result = pokemonCards.pop();
console.log(result);
console.log(result === 'Vivid voltage');

result = pokemonCards.pop();
console.log(result);
console.log(result === undefined);
