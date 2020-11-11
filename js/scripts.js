//Business Logic
function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
};

Pizza.prototype.pizzaSizePrice = function(sizes) {
  this.sizes = sizes;
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

Pizza.prototype.toppingsPrice = function(sizes, toppings) {
  this.toppingsPrice = 0;
  let numOfToppings = toppings.length;
  if (sizes === "Large"){
    this.toppingsPrice+= numOfToppings*3;
  }else if (sizes === "Medium"){
    this.toppingsPrice+= numOfToppings*2;
  }else if (sizes === "Small") {
    this.toppingsPrice+= numOfToppings*1;
  }
};
  
Pizza.prototype.totalPrice = function(){
  this.totalPrice = this.sizePrice + this.toppingsPrice;
};


//UI Logic




$(document).ready(function(){
  $("button#checkPrice").on("click", function(){
    let sizes = $("select#pizzaSize").val();
    let toppings = $("input:checkbox[name= toppings]:checked").map(function(){return $(this).val();}).get();
    let newPizza = new Pizza(sizes, toppings);
    newPizza.pizzaSizePrice(sizes);
    newPizza.toppingsPrice(sizes, toppings);
    newPizza.totalPrice();
    $("div#order-confirmation").fadeIn();
    $(".size").html(newPizza.sizes);
    $(".toppings").html(newPizza.toppings.join(", "));
    $(".total").html(newPizza.totalPrice);
    console.log(newPizza);
  });
});





