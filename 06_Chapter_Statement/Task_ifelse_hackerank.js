/*You are given a variable marks. Your task is to print:

- AA if marks is greater than .
- AB if marks is greater than  and less than or equal to .
- BB if marks is greater than  and less than or equal to .
- BC if marks is greater than  and less than or equal to .
- CC if marks is greater than  and less than or equal to .
- CD if marks is greater than  and less than or equal to .
- DD if marks is greater than  and less than or equal to .
- FF if marks is less than or equal to .

Note

Do not declare the variable marks. It is declared inside our code checker.
Use console.log for printing statements to the console.*/
// my code 

function processData(input) {
    var marks = Number(input);
    var MARKS_TEST = marks;
    //Head Ends Here

//Do not declare variable marks.
//Write your code below this line.

if (input > 90) {
    console.log("AA");
}
else if (input > 80 && input <= 90) {
    console.log("AB");
}
else if (input > 70 && input <= 80) {
    console.log("BB");
}
else if (input > 60 && input <= 70) {
    console.log("BC");
}
else if (input > 50 && input <= 60) {
    console.log("CC");
}