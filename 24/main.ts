// define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten= 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

console.log("\nIs apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

console.log("\nIs APPLE is equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase()== "apple");

console.log("\nIs APPLE not equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() != "apple");

console.log("\nIs ten is equal to twenty?");
console.log(10 == twenty);

console.log("\nIs ten not equal to twenty?");
console.log(ten != 20);

console.log("\nTen is greater than zero");
console.log(ten > 0);

console.log("\nTwenty is less than 10");
console.log(twenty < 10);

console.log("\nIs ten is greater than or equal to five");
console.log(ten >= 5);

console.log("\nTwenty is less than or equal to ten");
console.log(20 <= ten);

console.log("\nTwenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equal to ten and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

console.log("\nTwenty is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\nTwenty is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// test whether an item is included in an array
console.log("\nIs orange included in my fruits array");
console.log(fruits.includes("orange"));

console.log("\nIs orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
