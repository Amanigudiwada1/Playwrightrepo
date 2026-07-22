let k = 37;
console.log(--k + k--); // 36 + 36 = 72
console.log(k);// 35

let a = 5; 
let b = a-- - --a; // 5 - 3 = 2
console.log(b,a);//2 3


let i = 1; 
let r = i++ > 1 ? i++ : ++i; // 1 > 1 ? 2 : 3 = 3
console.log(r,i); // 3 3