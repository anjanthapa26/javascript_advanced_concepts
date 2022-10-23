//Idempotence:
// function that always returns what is expected to do
// if though console.log() communicates with outside world
// this function still returns the same expected output mutliple times 
// so it is idempotence 
const notGood = (num) => {
    console.log(num)
}

notGood(43)

// calling a function over and over inside itself
// returns same output 
// also called Idempotence
console.log(Math.abs(Math.abs(-50)))