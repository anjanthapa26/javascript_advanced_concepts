// currying 

const mulitply = (a,b) => a * b
console.log(mulitply(2,3))

const curriedMultiply = (a) => (b) => b * a;

console.log(curriedMultiply(4)(5))