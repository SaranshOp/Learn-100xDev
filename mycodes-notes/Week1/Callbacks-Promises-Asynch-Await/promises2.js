var d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("foo");
  }, 2000);
});

function callback() {
  console.log(d);
}
function logdata(data) {
  return " yes " + data;
}

console.log(d);
let c = d.then(callback);

let a = 0;
for (let i = 0; i < 1050000000; i++) {
  a += i;
}
console.log(a);

console.log(c);

let b = 0;
for (let i = 0; i < 1000000000; i++) {
  b += i;
}
console.log(b);
