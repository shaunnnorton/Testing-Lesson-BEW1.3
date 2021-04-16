const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function() {
    const area = utils.area(1,2)
    expect(area).to.be.a("number")
    expect(area).to.equal(2)
})
it("should return the perimeter of a rectangle", function() {
    const perimeter = utils.perimeter(4,5)
    expect(perimeter).to.be.a("number")
    expect(perimeter).to.equal(18)
})
it("should return the area of a circle given a radius", function() {
    const area = utils.circleArea(2)
    expect(area).to.be.a("number")
    expect(area).to.equal(12.56)
})




// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
    utils.addItemToCart({ name:"Banana", price:0.69, quantity: 1 })
    utils.addItemToCart({ name:"Pickle", price:4.20, quantity: 1 })
    utils.addItemToCart({ name:"Ham", price:6.66, quantity: 1 })
    const shoppingCart = utils.getShoppingCart()
    expect(shoppingCart).to.be.a("Array")
    expect(shoppingCart).to.deep.include({ name:"Banana", price:0.69, quantity: 1 })
    expect(shoppingCart).to.deep.include({ name:"Pickle", price:4.20, quantity: 1 })
    expect(shoppingCart).to.deep.include({ name:"Ham", price:6.66, quantity: 1 })
})

it("Should add a new item to the shopping cart" , function() {
    utils.addItemToCart({ name:"Cake", price:420.69, quantity: 666 })
    const cart = utils.shoppingCart
    expect(cart).to.be.an("Array")
    expect(cart).to.deep.include({ name:"Cake", price:420.69, quantity: 666 })
})

it("Should return the number of items in the cart", function() {
    utils.addItemToCart("Banana")
    utils.addItemToCart("Pickle")
    const cartLength = utils.getNumItemsInCart()
    expect(cartLength).to.be.a("Number")
    expect(cartLength).to.equal(2)
})

it("Should remove items from cart", function() {
    utils.addItemToCart({ name:"Cake", price:420.69, quantity: 666 })
    let cart = utils.shoppingCart
    expect(cart).to.deep.include({ name:"Cake", price:420.69, quantity: 666 })
    utils.removeItemFromCart({ name:"Cake"})
    cart = utils.shoppingCart
    expect(cart).to.not.deep.include({ name:"Cake", price:420.69, quantity: 666 })
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
