// Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.
//  const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let data = 60;
if (data >= 90 && data < 100) {
    console.log("A");
}
else if (data >= 80 && data < 89) {
    console.log("B");
}
else if (data >= 70 && data < 79) {
    console.log("C");
}
else if (data >= 60 && data < 69) {
    console.log(" E ");
}
else if(data <= 60)
{
    console.log("F");
}