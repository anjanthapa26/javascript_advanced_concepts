// composition 

//  data --> fn ---> data ---> fn -->


const compose = (f,g) => (data) => f(g(data))

const mulitplyBy3 = (num) => num * 3

const MakePositive = (num) => Math.abs(num)

const mulitplyBy3AndAbsolute = compose(mulitplyBy3,MakePositive)

console.log(mulitplyBy3AndAbsolute(-40))