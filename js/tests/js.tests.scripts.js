function Pizza(sizes, sauces, toppings, prices) {
  this.sizes = sizes;
  this.sauces = sauces;
  this.toppings = toppings;
  this.prices = prices;
}
//Test the creation of a pizza object
//Describe: Pizza()
//code let sizes = "large"
//code let sauces = "pesto"
//code let toppings = "chicken"
//code let prices = 20
//code let newPizza = new Pizza(sizes, sauces, toppings, prices)
//Expect: result.toEqual("large", "pesto", "chicken", 20)
// This worked but I simplified it to size and topping for ease of working

Pizza.prototype.pizzaSizePrice = function(sizes) {
  this.sizePrice = 0;
  console.log(this.sizePrice)
   if (this.sizes === "large"){
     this.sizePrice += 15;
   }else if (this.sizes === "medium"){
     this.sizePrice += 13;
   }else {
     this.sizePrice += 10;
   }
   console.log(this.sizePrice)
}
// Describe: Pizza.prototype.pizzaSizePrice()
//code let newPizza = new Pizza("large")
//Expect: result.toEqual(15)
//code let newPizza2 = new Pizza("medium")
//Expect: result.toEqual(13)
//code let newPizza3 = new Pizza("small")
//Expect: result.toEqual(10)
//code let newPizza4 = new Pizza("jibberish")
//Expect: result.toEqual(10)

Pizza.prototype.pizzaToppingsPrice = function(toppings) {
  this.toppingsPrice = 0;
  for (Pizza.toppings)

}