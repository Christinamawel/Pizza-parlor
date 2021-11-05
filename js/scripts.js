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

  this.price = total;
}

// UI Logic
$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();
    const size = $('input[name="size"]:checked').val();
    const toppings = $('.toppings:checked').map(function() {return this.value;}).get();
    const sides = $('.sides:checked').map(function() {return this.value;}).get();
    console.log(toppings, size, sides);
    const order = new Order(toppings, size, sides);
    console.log(order);
    order.price()
    console.log(order)
  })
})