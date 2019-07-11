// var checkboxes = document.getElementsByName('employee');
// var selected = [];
//   for (var i=0; i<checkboxes.length; i++) {
//      if (checkboxes[i].checked) {
//         selected.push(checkboxes[i].value);
//      }
//   }

//business logic

function Pizza(selectsize) {
  this.size = selectsize
}
//
// Pizza.prototype.addTopping = function() {
//
// }

//user interface logic

$(document).ready(function() {

  $("form#input").submit(function(event) {

    event.preventDefault();

    // var inputTitle = ($("#title").val());
    var inputSize = ($("#size").val());

    var newPizza = new Pizza(inputSize);

    var price = 0

    $("input:checkbox[name=topping]:checked").each(function() {
      price = parseInt($(this).val())
      console.log(price);


    if (newPizza.size === "small"){
      price += 10;
    } else if (newPizza.size === "medium"){
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
});
