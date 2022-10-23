//exericse
// function along with its lexical scope (bundled together) forms a closure
// level -------1 
function x() {
    let a = 4;
    function y() {
        console.log(a)   // a reference is persisted not the value of a
    }
    return y; // when y is returned it forms closure with its lexcial environment
}

let w = x(); // since x is executed from the call stack and it returns y
//console.log(w);
/****** */
//after many lines of codes when z() executes, it has a returned value of y,
// since y still remembers its lexical scope even though x has been poped out of 
// of call stack , this concept is called closure
//w();



/*********************** */
// level --------------> 2

 function z() {
    let b = 100;
    function x() {
        let a = 500;
        function y() {
            console.log(a,b)
        }
        y()
        
    }
    x()
 }

 console.log(z())