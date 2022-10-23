// partial Application 

const mulitply = (a,b,c) => a * b * c;

// partial application is on the second call , expect all the argument
const partialMultiply4 =mulitply.bind(null,4)
//console.log(partialMultiply4(4,5))



// partial function 


function add(x,y,z) {
    return x + y + z
}

function partial(fn,...args) {
    return function(...moreArgs)  {
        return fn(...args, ...moreArgs)
    } 
}

const plus3 = partial(add, 1,2)
console.log(plus3(3))