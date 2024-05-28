const fs = require("fs").promises;

async function readFile() {
    try {
        const data = await fs.readFile("a.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

console.log("hi there");

let a = 0;

// takes very long, longer than the file read
for (let i = 0; i < 1000000000; i++) {
    a++;
}

console.log("hi there 2");

readFile();

for (let i = 0; i < 1000000000; i++) {
    a++;
}

console.log("hi there 3");