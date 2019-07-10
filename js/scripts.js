// var checkboxes = document.getElementsByName('employee');
// var selected = [];
//   for (var i=0; i<checkboxes.length; i++) {
//      if (checkboxes[i].checked) {
//         selected.push(checkboxes[i].value);
//      }
//   }

//business logic

function Pizza(selectopping, selectsize) {
  this.topping = selectopping;
  this.size = selectsize;
};

//user interface logic

$(document).ready(function() {

  $("form#input").submit(function(event) {

    event.preventDefault();

    // var inputTitle = ($("#title").val());
    var inputSize = ($("#size").val());

    var newPizza = new Pizza(inputTopping, inputSize);

    var price = 0

    if (newPizza.size === "Small"){
      price += 10;
    } if else (newPizza.size === "Medium"){
      price += 15;
    } else {
      price += 20;
    }
    //
    // if (newTicket.age === "discount"){
    //   price -= 5
    // }
    //
    // if (newTicket.time === "matinee"){
    //   price += 2
    // } else {
    //   price += 5
    // }

    $("#show-price").text("The price of your pizza is $" + price + ".");

    // console.log(price);
  });
});
