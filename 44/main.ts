function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singleItem=> console.log(singleItem));
    console.log("\nNow enjoy Sandwich!!");

}

makeSandwich("1)chicken","2)cheese","3)mayo","4)ketchup");

makeSandwich("1)egg","2)onion","3)tomatoes");

makeSandwich("1)butter","2)chicken","3)mayo","4)ketchup","5)tomatoes","6)onion","7)lettuce");