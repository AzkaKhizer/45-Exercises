let current_users = ["Aafia","Isbah","AbdulMoiz","Khizer","Taha"]

let new_users = ["Azka","Amna","Ali","Aafia","Isbah"]

new_users.forEach(oneNewUser => {
    let ourCondition= current_users.some(oneCurrentUser => oneCurrentUser.toLowerCase() === oneNewUser.toLowerCase())
    if(ourCondition){
        console.log(`Sorry ${oneNewUser} is already taken`)}
        else{console.log(`This User Name ${oneNewUser} is available`)}
    }
);














