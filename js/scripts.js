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

Pizza.prototype.pizzaToppingsPrice = function(toppings) {
  this.pizzaToppingsPrice = 0;
  
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
    let sizes = $("select#pizzaSize").val();
    let newPizza = new Pizza(sizes);
    newPizza.checkToppings();
    newPizza.pizzaSizePrice(sizes);
    console.log(newPizza)
  })
};


$(document).ready(function(){
  checkPriceBtnListener();
});





