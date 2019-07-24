// var toppingsConstant = {
//   pepperoni: 4,
//   sausage: 2,
//   bacon: 5,
//   onion: 1
// }

//business logic

function Pizza(selectsize, toppings) {
  this.size = selectsize;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.CalcPrice = function() {
  if (this.size === "small") {
    this.price = 10;
  } else if (this.size === "medium") {
    this.price = 15;
  } else {
    this.price = 20;
  }

  {

  toppingsArray.length * 2 this.price;
  // Have to figure out how Ryan made this value to be multiplied by two then added to this.price.
}
//   this.toppings.forEach(function(top) {
//     // this.price += toppingsConstant[top];
//     this.price +=[top];
  }

//user interface logic

$(document).ready(function() {

  $("form#input").submit(function(event) {

    event.preventDefault();

    var inputSize = $("#size").val();

    var toppingsArray = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    var userPizza = new Pizza(inputSize, toppingsArray);
    userPizza.CalcPrice();

    $("#show-price").text("The price of your pizza is $" + userPizza.price + ".");

  });
});
