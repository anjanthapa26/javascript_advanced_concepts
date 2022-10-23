// no side effect


const array = [1,2,3]
//This function does not modifies the outside
//world, it does modifies the inside variables

const removeLastItem = (arr) => {

    // objects are passed by reference
    // so [].concat(arr) will give another array
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}


const multiply = (arr) => {
    return arr.map(item => item * 2)
}
a = [1,2,3]
b = [5,6,7]

/*
console.log([...a,...b])
console.log(removeLastItem(array))
console.log(multiply(array))
console.log(array)
*/


// input ---- > output

// Even if the program is run multiple times
// its output value remains the same 
// functions are first class citizens in js
// also called referential transparency 
const abb = (num1,num2) => {
    return num1 + num2
}

const bcd = (num4) => {
    return num4 * 4
}
console.log(bcd(abb(3,4)))

