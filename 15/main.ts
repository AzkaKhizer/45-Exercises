let guestList = ["Aafia", "Isbah", "Abdul Moiz"];

let notComing = guestList[2];

console.log(notComing, "cannot come.");

guestList.splice(2,3, "Rida");
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));

