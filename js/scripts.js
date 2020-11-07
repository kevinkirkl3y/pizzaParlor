function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
};

Pizza.prototype.checkToppings= function(toppings){
  this.toppings = [];
  this.chosenToppings = $("input:checkbox[name= toppings]:checked").map(function(){
    return $(this).val();
  }).get();
  this.toppings.push(this.chosenToppings);
};

Pizza.prototype.pizzaSizePrice = function(sizes) {
  this.sizes = $("select#pizzaSize").val();
  this.sizePrice = 0;
  if (this.sizes === "Large"){
    this.sizePrice += 15;
  }else if (this.sizes === "Medium"){
    this.sizePrice += 13;
  }else if (this.sizes === "Small") {
    this.sizePrice += 10;
  }else {
    alert("Please choose a size.")
  }
};

Pizza.prototype.pizzaToppingsPrice = function(toppings) {
  this.pizzaToppingsPrice = 0;
  let numOfToppings = this.chosenToppings.length;
  if (this.sizes === "Large"){
    this.pizzaToppingsPrice+= numOfToppings*3;
  }else if (this.sizes === "Medium"){
    this.pizzaToppingsPrice+= numOfToppings*2;
  }else if (this.sizes === "Small") {
    this.pizzaToppingsPrice+= numOfToppings*1;
  }
};
  
Pizza.prototype.totalPrice = function(){
  this.totalPrice = this.sizePrice + this.pizzaToppingsPrice;
};


function checkPriceBtnListener(){
  $("button#checkPrice").on("click", function(){
    let newPizza = new Pizza();
    newPizza.checkToppings();
    newPizza.pizzaSizePrice();
    newPizza.pizzaToppingsPrice();
    newPizza.totalPrice();
    $("div#order-confirmation").fadeIn();
    $(".size").html(newPizza.sizes);
    $(".toppings").html(newPizza.chosenToppings);
    $(".total").html(newPizza.totalPrice);
  });
};


$(document).ready(function(event){
  checkPriceBtnListener();
  event.preventDefault();
});





