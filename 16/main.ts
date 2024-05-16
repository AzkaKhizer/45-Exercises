// creating guest list array

let guestList = ["Aafia", "Isbah", "AbdulMoiz", "Amna"];
 
// making variable for those who cannot come
let notComing = guestList[0];

// print the name of guest who can't come
console.log(notComing, "cannot come");

// add or remove values from guest list array
guestList.splice(0,1, "Rida");

//message print for bigger table
console.log("Good news, We have found a new table for Dinner");

//adding a new guest at starting index of array
guestList.unshift("Bilal");

//adding a new guest at ending index of array
guestList.push("Zain");

//get a middle index of our guest list array

let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new guest to middle index of array
guestList.splice(middleIndex,0, "Siraj");

//print message of updated list
console.log("Updated list of our Guests");

// sending a invitation message  to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam, ${oneguest}, Would you like to dinner with me?`));

