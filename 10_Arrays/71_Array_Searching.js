 //Searching

// let results = ["pass", "fail", "pass", "error", "fail"];

// // indexOf — returns first index, or -1 if not found

// results.indexOf("fail"); //1
// console.log(results);

let results = ["pass", "fail", "pass", "error", "fail"];

// This finds the first index of "fail"
let failIndex = results.indexOf("fail"); // returns 1

// Log the index
console.log("First 'fail' is at index:", failIndex);

// Log the whole array
console.log("Results array:", results);








results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");

// includes — returns boolean
results.includes("error"); // true