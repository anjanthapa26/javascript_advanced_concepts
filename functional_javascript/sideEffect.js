//no side effects 

//input ---> output 


const arr = [1,2,3]


// this function has side effect
// it modifies array outside of itself
const a = (arr) => {
    arr.pop()
}

const mutate = (arr) => {
    arr.forEach((item) => {
        arr.push(1)
    })
}
 
a(arr);
console.log(arr)

mutate(arr)
console.log(arr)