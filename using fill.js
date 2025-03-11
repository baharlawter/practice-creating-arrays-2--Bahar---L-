// Tasks
// Task 1: Initialize the Array
// 1. Create an array with a size of seven.
const newArray=Array(7);
// 2. Fill all slots with the string "Hello"using .fill
newArray.fill("Hello");
// 3. Log your array and confirm it has seven elements, all set to"Hello".
console.log(newArray);



// Task 2: Update the Array
// 1. Now, fill only part of the array with a different string or number using
// .fill. For example, you might fill it with “Hi” or 2 or 5. You will need to
// decide how many slots in the array to change.
let updatedArray=newArray.fill("Hi",2,5);
// 2. Log your new changes.
console.log(updatedArray);



// Task 3: Populate the Array with a for Loop
// 1. Create a new array with a size of five.
let newArray1=Array(5);
// 2. Using a for Loop, assign each slot a numeric value that is index * 10
for(let i=0; i<newArray1.leength; i++){newArray1[i]=i*10}
// 3. Log your results to confirm the array contains the correct values: 0, 10, 20,
// 30, 40
console.log(newArray1);