// implementation of hof

const multplyBy = function(num1) {
    return function(num2) {
        return num1 * num2 
    }
}

const multplyByTwo = multplyBy(2)
console.log(multplyByTwo(4))