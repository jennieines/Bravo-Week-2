/*
You're creating a discount calculator for a store. 
Given an array of item prices, calculate and print the discounted price for each item. 
Apply a 10% discount to items priced at or above $50 and a 5% discount to all other items.

Print out a message indicating the original price and the new price of the item.

Example input: [70, 25, 50, 10]

Example output:
Original price: $70, Discount price: $63
Original price: $25, Discount price: $23.75
Original price: $50, Discount price: $45
Original price: $10, Discount price: $9.50
 */

const itemPrices = [25, 60, 30, 75, 15];

//add your code below this line, include comments describing your code
for (let i = 0; i < itemPrices.length; i++) {
    const currentPrice = itemPrices[i];
    let discount = 0;
    if (currentPrice >= 50) {
        discount = currentPrice * 0.10;
 } else {
    discount = currentPrice * 0.05;
 }
 const discountedPrice = currentPrice - discount;

 //console.log(`Original price: $${currentPrice}, Discount price: $${discountedPrice}`);
}

/*
You're creating a simple to do list. 

Given an array of tasks to complete, print each task out 
in a numbered list indicating the order of the tasks.

Example input: ["Do dishes", "Sweep floor", "Feed dog"]

Example output:
1. Do dishes
2. Sweep floor
3. Feed dog

Note: This is totally separate/different from the to do list project.
*/

const tasks = ["Buy groceries", "Finish homework", "Go for a run", "Call a friend"];

//add your code below
for (let i = 0; i < tasks.length; ++i) {
    const taskNumber = i + 1;
    const currentTask = tasks[i];
    //console.log(`${taskNumber}. ${currentTask}`);
}



/*
You're going to build a vowel counter. 
Given a string, count and print out the number of vowels in the string. 
For the purpose of this assignment, we will not consider y to be a vowel.
 
Example input: "Do you know where the mall is, Ellie?"

Example output:
Number of vowels: 12

*/

//HINT: The string 'aeiou' has been provided for you if you 
//think it might be helpful. You might want to look into what
//the 'includes' method does and how it might be useful here.

const text = "Hello, how are you today? Enjoy your stay!";
const vowels = "aeiou";
//add your code below
let vowelCount = 0;
for (let i = 0; i < text.length; i++) {
const currentChar = text[i];
if (vowels.includes(currentChar.toLowerCase())) {
    vowelCount++;
}
}

console.log(`Number of vowels: ${vowelCount}`);
