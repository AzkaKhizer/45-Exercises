let userName = ["Admin","Aafia","Isbah","AbdulMoiz","Khizer"];

userName.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
});
