// Business Logic

const Order = function(toppings, size, sides) {
  this.toppings = toppings;
  this.size = size;
  this.sides = sides;
}

Order.prototype.price = function() {
  let total = 0

  // this.size.forEach(function(size) {
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
  // })

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
  let pizzaCount = 0;

  // $("#pizza-add").click(function(){
  //   pizzaCount++;
  //   $("#more-pizza").append('<fieldset id="size-fieldset-' + pizzaCount +'class="new-pizza"><legend>Choose Your Pizza Size:</legend><label for="small"><input id="small" value="small" type="radio" name="size' + pizzaCount + '" class="size"> Small</label><label for="medium"><input id="medium" value="medium" type="radio" name="size' + pizzaCount + '" class="size" checked> Medium</label><label for="large"><input id="large" value="large" type="radio" name="size' + pizzaCount + '" class="size"> Large</label></fieldset><fieldset id="topping-fieldset-' + pizzaCount + 'class="new-pizza-toppings"><legend>Choose Your Topping:</legend><label for="cheese"> <input id="cheese" value="cheese" type="checkbox" name="toppings' + pizzaCount + '" class="toppings" checked> Cheese </label><label for="pepperoni"> <input id="pepperoni" value="pepperoni" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Pepperoni </label><label for="sausage"> <input id="sausage" value="sausage" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Sausage</label><label for="olives"> <input id="olives" value="olives" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Olives</label><label for="mushrooms"> <input id="mushrooms" value="mushrooms" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Mushrooms</label><label for="onion"> <input id="onion" value="onion" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Onion </label><label for="peppers"> <input id="peppers" value="peppers" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Green Peppers</label><label for="jalapenos"> <input id="jalapenos" value="jalapenos" type="checkbox" name="toppings' + pizzaCount + '" class="toppings"> Jalapenos</label>')
  // })

  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();
    // const size = []
    const size = $(".size:checked").val()
    const toppings = $('.toppings:checked').map(function() {return this.value;}).get()
    const sides = $('.sides:checked').map(function() {return this.value;}).get();
    const order = new Order(toppings, size, sides);

    // $(".new-pizza-toppings").each(function(){
    //   toppings.push($('.toppings:checked').map(function() {return this.value;}).get());
    // });
    // $(".new-pizza").each(function(){
    //   size.push($(".size:checked").val());
    // });

    console.log(order);

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
  });
});