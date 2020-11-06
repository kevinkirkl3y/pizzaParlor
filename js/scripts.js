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

function checkToppings(){
  $("input[name:'toppings']").change(function(){
    //let userToppings = $(this).val();
    if ($(this).is(':checked')){
      let checked = $(this).val();
      tmp.push(checked);
    }else{
      tmp.splice($.inArray(checked, tmp),1);
    }
  });
  console.log(tmp)
  console.log(newPizza);
}
function checkPriceBtnListener(){
  let tmp = [];
  $("button#checkPrice").on("click", function(){
    let sizes = $("select#pizzaSize").val();
    let newPizza = new Pizza(sizes);
    newPizza.pizzaSizePrice(sizes);
  })
};


$(document).ready(function(){
  checkPriceBtnListener();
});





