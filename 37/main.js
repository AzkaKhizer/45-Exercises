function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the \"").concat(printMessage, "\" prints on shirt."));
}
;
makeShirt();
makeShirt("Medium");
makeShirt("small", "I Love Javascript");
