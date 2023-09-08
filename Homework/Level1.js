/*
You're building a simple greeting generator. 
Given a list of names in an array, print a personalized greeting for each name.
*/

//the names
const names = ["Alice", "Charlie", "Diego", "Eve", "Fiona", "Hassan", "Isabel", "Javier"];


//iterate through the names array
for (let i = 0; i < names.length; i++) {
  //store the current name in a variable
  const currentName = names[i];

  //log out a greeting using string interpolation
  //console.log(`Hello, ${currentName}!`);
}




/* 
You're creating a simple shopping list.
Given a list of items in an array, print each item out
in a message that says 'Buy: [ITEM]'

Example input: ["Chicken", "Juice", "Flour"]

Example output:
Buy: Chicken
Buy: Juice
Buy: Flour
*/

//items:
const items = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

//add your code below this line, include comments describing each line
for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    const message = `Buy: ${currentItem}`;
    //console.log(message);

}/*
You're building a temperature checker. 
Given an array of temperatures, print a message for each temperature,
indicating whether it's warm or cold (assume warm if temperature is above 60Â°F).
 
Example input: [55, 80, 23, 77]

Example output:
55 degrees is cold
80 degrees is warm
23 degrees is cold
77 degrees is warm
*/



//the temps
const temperatures = [38, 65, 25, 71, 57];

//iterate through the array
for (let i = 0; i < temperatures.length; i++) {
 //store each temperature in variable
 const currentTemperature = temperatures[i];

  //use a conditional to check if temperature is above 60
if (currentTemperature > 60) {
    //if it is, print out message indicating it is warm
    console.log(`${currentTemperature} degrees is warm`);
} else {
     //if not, print out message indicating is is cold
    console.log(`${currentTemperature} degrees is cold`);
}
}