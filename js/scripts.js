// Business Logic

const Order = function(toppings, size, sides) {
  this.toppings = toppings;
  this.size = size;
  this.sides = sides;
}

Order.prototype.price = function() {
  let total = 0
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
  console.log(total);
}

const order = new Order(["cheese", "pepperoni", "olives"], "medium", ["bread"])
console.log(order);
order.price();