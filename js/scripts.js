function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
};
//removed sauces and prices parameters to keep it more simple to start

Pizza.prototype.pizzaSizePrice = function(sizes) {
  this.sizes = $("select#pizzaSize").val();
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
// I want to add 1 for every element within the toppings array. Trying to figure out which loop to use. 
Pizza.prototype.pizzaToppingsPrice = function(toppings) {
  this.pizzaToppingsPrice = 0;
  toppings.forEach(function(element))
    this.pizzaToppingsPrice +=1;
  }
  
}
Pizza.prototype.checkToppings= function(toppings){
  this.toppings = [];
  let checkedBoxes = $("input:checkbox[name= toppings]:checked").map(function(){
    return $(this).val();
  }).get();
  this.toppings.push(checkedBoxes);
};


function checkPriceBtnListener(){
  $("button#checkPrice").on("click", function(){
    let newPizza = new Pizza();
    newPizza.checkToppings();
    newPizza.pizzaSizePrice();
    newPizza.pizzaToppingsPrice();
    console.log(newPizza)
  })
};


$(document).ready(function(){
  checkPriceBtnListener();
});





