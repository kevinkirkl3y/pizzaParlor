function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
};
//removed sauces and prices parameters to keep it more simple to start

Pizza.prototype.pizzaSizePrice = function(sizes) {
  this.sizePrice = 0;
   if (this.sizes === "large"){
     this.sizePrice += 15;
   }else if (this.sizes === "medium"){
     this.sizePrice += 13;
   }else if (this.sizes === "small") {
     this.sizePrice += 10;
   }else {
     alert("Please choose a size.")
   }
};

function checkPriceBtnListener(){
  $("button#checkPrice").on("click", function(){
    let sizes = $("select#pizzaSize").val();
    let newPizza = new Pizza(sizes)
    newPizza.pizzaSizePrice(sizes)
    console.log(newPizza);
  })
}


$(document).ready(function(){
  checkPriceBtnListener();
})





