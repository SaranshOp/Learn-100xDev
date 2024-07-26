let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Call) => {
  setTimeout(() => {
    console.log("Order Placed");
  }, 2000);
  Call();
};
let production = () => {
  console.log("Production done");
};

order(production);
