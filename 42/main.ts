function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}
// function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_names=["Harry Potter", "Ali", "Usman"];

// call make_great function to modify magician names
let great_magicians = make_great(magician_names);

//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
