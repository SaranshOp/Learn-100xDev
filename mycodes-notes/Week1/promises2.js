var d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("foo");
  }, 1000);
});

function callback() {
  console.log(d);z
}
I;
console.log(d);
d.then(callback);
