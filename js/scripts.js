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

//user interface logic

$(document).ready(function() {

  $("form#input").submit(function(event) {

    event.preventDefault();

    var inputSize = ($("#size").val());

    var newPizza = new Pizza(inputSize);

    var price = 0

    $("input:checkbox[name=topping]:checked").each(function() {
      price = parseInt($(this).val())
      for (var i = 0; i < ".checkbox".length; i++) {
        if (".checkbox" [i].checked) {
          price.push(".checkbox" [i].value);
        }
      }


      if (newPizza.size === "small") {
        price += 10;
      } else if (newPizza.size === "medium") {
        price += 15;
      } else {
        price += 20;
      }

      $("#show-price").text("The price of your pizza is $" + price + ".");

      // console.log(price);
    });
  });
});
