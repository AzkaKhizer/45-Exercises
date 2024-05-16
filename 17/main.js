// creating guest list array
var guestList = ["Aafia", "Isbah", "AbdulMoiz", "Amna"];
// making variable for those who cannot come
var notComing = guestList[0];
// print the name of guest who can't come
console.log(notComing, "cannot come");
// add or remove values from guest list array
guestList.splice(0, 1, "Rida");
//message print for bigger table
console.log("Good news, We have found a new table for Dinner");
//adding a new guest at starting index of array
guestList.unshift("Bilal");
//adding a new guest at ending index of array
guestList.push("Zain");
//get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Siraj");
//print message of updated list
console.log("Updated list of our Guests");
// sending a invitation message  to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam, ".concat(oneguest, ", Would you like to dinner with me?")); });
console.log("Unfortunately, The new dinner table is not arrived on time, so I can only invite two guests to dinner with me");
// using while loop to remove guests from the array until only two names are remaining
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you to dinner"));
}
console.log("Invitation to the last two guests");
guestList.forEach(function (lastTwo) { return console.log("luckily, ".concat(lastTwo, ", you are still invited to dinner.")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
