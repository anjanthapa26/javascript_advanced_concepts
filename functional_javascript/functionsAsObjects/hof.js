// takes functions as arguments or returns functions 



/*****************************/
// login system with simple function


const letAdamLogin = () => {
    let array = [];
    for(let i = 0; i < 100000; i++) {
        array.push(i)
    }
    return 'Access granted to Adam'
}
const letEvaLogin = () => {
    let array = [];
    for(let i = 0; i < 100000; i++) {
        array.push(i)
    }
    return 'Access granted to Eva'
}

//console.log(letAdamLogin())
//console.log(letEvaLogin())


/********************/

// functions that accepts parameter f(a,b)
const giveAccesTo = (name) => 'Access granted to ' + name;

const letUserLogin = (user) => {
    let array = [];
    for(let i = 0; i < 100000; i++) {
        array.push(i)
    }
   giveAccesTo(user);
}

//console.log(letUserLogin('anjan'))
//console.log(letUserLogin('ram'))



/**************************** */
// on hof we can give it a data and also tell function what to with extra abilities 
// hof 
// hof comes into play when the utility as much shirnked to (dry principle requirements)

const giveAcces = (name) => 'Access granted to ' + name;

function authenticate(verify) {
    let array = [];
    for(let i = 0; i < verify; i++) {
        array.push(i)
    }
    return true;
}

function letPerson(person,fn) {
    if(person.level === 'admin') {
        fn(4000);
    }
    else if (person.level === 'user') {
        fn(1000);
    }
    return giveAcces(person.name);
}

console.log(letPerson({level:'admin', name:'Tim'},authenticate))