// Immutability 
// not changing state instead returning copy of the state 
// be familiar with the concept of structural sharing (for memory efficiency)

const obj = {name:'Anjan'}

const clone = (obj) => {
    return {...obj} // this is pure
}

// maintaining immutability of state,
// by copying the obj to another variable
const updateName = () => {
    const obj2 = clone(obj)
    obj2.name = 'ram'
    return obj2
}


console.log(updateName(obj))
console.log(obj)