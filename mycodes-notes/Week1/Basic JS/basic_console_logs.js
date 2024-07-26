let arr =  [1,4,8]
let arr2 = [2,3,5]
console.log(arr + arr2) // 1,4,82,3,5 why? - because the + operator is used for concatenation of strings

// To add two arrays together, you can use the concat method
console.log(arr.concat(arr2)) // [1,4,8,2,3,5]

// or the spread operator
console.log([...arr, ...arr2]) // [1,4,8,2,3,5]

// or the push method
arr.push(...arr2)
console.log(arr) // [1,4,8,2,3,5]

// or the unshift method
arr.unshift(...arr2)
console.log(arr) // [2,3,5,1,4,8,2,3,5]


