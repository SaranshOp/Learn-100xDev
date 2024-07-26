//  https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (fruit_name, Call) => {
//   setTimeout(() => {
//     console.log("Order Placed");
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     setTimeout(() => {
//       Call();
//     }, 2000);
//   }, 2000);
// };
// let production = () => {
//   console.log("Production has started");
// };

// order(0, production);

// callback hell - nesting of functions

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log("start the machine");
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log("serve Ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// production();

let is_shop_open = true;

// let order = (timeout, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, timeout);
//     } else {
//       reject(console.log(`Our shop is closed`));
//     }
//   });
// };

// order(2000, () => {
//   console.log(`${stocks.Fruits[0]} was selected`);
// })
//   .then(() => {
//     return order(0o0, () => {
//       console.log("production has started");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("The fruit has been chopped");
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("start the machine");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`Ice cream placed on ${stocks.holder[1]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} as toppings`);
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("serve Ice cream");
//     });
//   })
//   .catch(() => {
//     console.log(`Customer left`);
//   })
//   .finally(() => {
//     console.log(`Day ended, shop is closed`);
//   });


// let order2 = (time2, work2)=>{
//     setTimeout(()=>{
//         work2();
//     }, time2);
// }

// order2(0, ()=>{
//     console.log(`second order placed`);
// })
// order2(2000, ()=>{
//     console.log(`${stocks.Fruits[2]} was selected`);
// })


// async await
