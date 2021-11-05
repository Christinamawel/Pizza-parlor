// Business Logic

const Order = function(toppings, size, sides) {
  this.toppings = toppings;
  this.size = size;
  this.sides = sides;
}

Order.prototype.price = function() {
  let total = 0

  switch (this.size) {
    case("small"):
      total += 2
      break;
    case("medium"):
      total += 4
      break;
    case("large"):
      total += 6
      break;
  }

  this.toppings.forEach(function(topping) {
    switch (topping) {
      case("cheese"):
      case("pepperoni"):
      case("sausage"):
        total += 2
        break;
      case("olives"):
      case("mushrooms"):
      case("onion"):
      case("peppers"):
      case("jalapenos"):
      total += 1
      break;
    }
  })

  this.sides.forEach(function(side){
    switch (side) {
      case("bread"):
      case("salad"):
        total += 5
        break;
      case("coke"):
        total += 2
        break;
    }
  })

  this.totalPrice = total;
}

// UI Logic
$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();
    const size = $('input[name="size"]:checked').val();
    const toppings = $('.toppings:checked').map(function() {return this.value;}).get();
    const sides = $('.sides:checked').map(function() {return this.value;}).get();
    const order = new Order(toppings, size, sides);
    order.price();
    $("#total-cost").text("$" + order.totalPrice);
    $("#checkout-section").show();
    $("#pizza-order-form").hide();

    $("#delivery").click(function() {
      let deliveryPrice = order.totalPrice + 5
      $("#delivery-form").show();
      $("#delivery-cost").text("$" + deliveryPrice);
    })
    $("#carryout").click(function() {
      $("#delivery-form").hide();
    })
    $("#online").click(function() {
      $("#pay-form").show();
    })
    $("#in-store").click(function() {
      $("#pay-form").hide();
    })

    $("#change-order").click(function() {
      location.reload();
    })
  })
})