function makeShirt (size:string = "Large", printMessage:string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the "${printMessage}" prints on shirt.`)
};

makeShirt();

makeShirt("Medium");

makeShirt("small", "I Love Javascript");