// const fs = require("fs");

// function kiratReadfs(cb){
//     fs.readFile("a.txt", "utf-8", function(error,data) {
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// kiratReadfs(onDone);

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    console.log("inside kirat");
  var p = new Promise(function(resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function(err, data) {
        console.log("inside resolve");
      resolve(data);
    });
  })
  return p;
}

// callback function to call
function onDone(data) {
  console.log(data)
}

let a = kiratsReadFile()
console.log(a);
a.then(onDone);