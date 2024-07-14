// Using var
var x = 10;
console.log('Initial value of x:', x); // Output: 10

// Reassigning x
x = 20;
console.log('Reassigned value of x:', x); // Output: 20

// Using const
const y = 30;
console.log('Initial value of y:', y); // Output: 30

// Attempting to reassign y
try {
    y = 40;
} catch (error) {
    console.error('Error when trying to reassign y:', error.message); 
}
