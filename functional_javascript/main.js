// amazon shopping 
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

// implement a cart features:

// add items to cart 

const addItem = (val,...items) => {
    items.forEach((item) => {
         user.cart.push(item)
    })
}

const taxOnItem = (percent) => {
    user.cart.forEach((item,idx) => {
        user.cart[idx] = item - (percent*item) / 100 
    })
}

const emptyCart = () => {
    user.cart = []
}
addItem(1,2,5,7,3)
console.log(user.cart)

taxOnItem(4)
console.log(user.cart)