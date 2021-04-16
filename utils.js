// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w*h
}

const perimeter = (w, h) => {
  return (w*2)+(h*2)
}

const circleArea = r => {
  return (3.14)*(r**2)
  // should return the area of the circle
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  shoppingCart.forEach((cartItem, i) => {
    if(cartItem.name == item.name){
        delete shoppingCart[i]
    }
  })

}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, shoppingCart
}
