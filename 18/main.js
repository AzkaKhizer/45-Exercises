var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["Switzer Land", "Denmark", "Japan", "London"];
console.log("Original Order:", countriesToVisit);
// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in original order:", countriesToVisit);
//print the array in reversed order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("still in original order:", countriesToVisit);
console.log("Original Array Reversed:", countriesToVisit.reverse());
console.log("Back to Original Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
