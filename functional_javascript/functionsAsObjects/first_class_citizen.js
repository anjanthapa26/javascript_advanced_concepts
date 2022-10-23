// Functions are first class citizens in js 
// anything you can do with other types , you can do with functions as well
// 1 
//can assign function to variables 
const stuff = function() {}

//2 
// function as arguments to a function

const a = (fn) => {
    return  fn()
}

a(function() {console.log('hi there')})

 
//3 
// return functions as values from other functions

function b() {
    return function c() {
        console.log('I am function c');
    }
}
console.log(b()())
