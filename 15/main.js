var guestList = ["Aafia", "Isbah", "Abdul Moiz"];
var notComing = guestList[2];
console.log(notComing, "cannot come.");
guestList.splice(2, 3, "Rida");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
