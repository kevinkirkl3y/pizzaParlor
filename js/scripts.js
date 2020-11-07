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

Pizza.prototype.pizzaToppingsPrice = function(toppings) {
  this.pizzaToppingsPrice = 0;
  let numOfToppings = this.chosenToppings.length;
  if (this.sizes === "large"){
    this.pizzaToppingsPrice+= numOfToppings*3;
  }else if (this.sizes === "medium"){
    this.pizzaToppingsPrice+= numOfToppings*2;
  }else if (this.sizes === "small") {
    this.pizzaToppingsPrice+= numOfToppings*1;
  }
};
  
Pizza.prototype.totalPrice = function(){
  this.totalPrice = this.sizePrice + this.pizzaToppingsPrice;
}

Pizza.prototype.displayPizzaOrder = function(){
  const newPizza = 
  $("div#order-confirmation").fadeIn();
}


function checkPriceBtnListener(){
  $("button#checkPrice").on("click", function(){
    let newPizza = new Pizza();
    newPizza.checkToppings();
    newPizza.pizzaSizePrice();
    newPizza.pizzaToppingsPrice();
    newPizza.totalPrice();
    newPizza.displayPizzaOrder();
    
  })
};


$(document).ready(function(){
  checkPriceBtnListener();
});





