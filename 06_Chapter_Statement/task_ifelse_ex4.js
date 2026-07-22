// Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.
function fizzBuzz(data) {
for (let i = 1; i <= data; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // Print the number if it is not a multiple of 3 or 5
    else {
        console.log(i);
    }
}
}