// Making an Array of Countries and Print its Original Order

let countriesToVisit:string[] = ["Switzer Land", "Denmark", "Japan", "London"];
console.log("Original Order:", countriesToVisit);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its original order
console.log("still in original order:", countriesToVisit);

//print the array in reversed order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its original order
console.log("still in original order:", countriesToVisit);

// We have changed the original order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to it's original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());


