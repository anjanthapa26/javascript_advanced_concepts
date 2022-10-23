// Higher order functions 
// take one or more functions as arguments 
// or return a function as a result (often called a callback)

//example 1
const hof = () => () => 4;

// console.log(hof()())

// example 2 

const hof1 = (fn) => fn(4);

//console.log(hof1(function a(x) {return x}))

// Closures 

const closure = function() {
    let count = 0;
    return function increment() {
        count +=1
        return count
    }
    /*
    function decrement() {
        count -=1
        console.log(count)
    }
    */
}

const increment = closure()
console.log(increment())
console.log(increment())

