function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
}
//removed sauces and prices parameters to keep it more simple to start

Pizza.prototype.pizzaSizePrice = function(sizes, toppings) {
  this.sizePrice = 0;
   if (this.sizes === "large"){
     this.sizePrice += 15;
   }else if (this.sizes === "medium"){
     this.sizePrice += 13;
   }else {
     this.sizePrice += 10;
   }
}