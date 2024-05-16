var current_users = ["Aafia", "Isbah", "AbdulMoiz", "Khizer", "Taha"];
var new_users = ["Azka", "Amna", "Ali", "Aafia", "Isbah"];
new_users.forEach(function (oneNewUser) {
    var ourCondition = current_users.some(function (oneCurrentUser) { return oneCurrentUser.toLowerCase() === oneNewUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(oneNewUser, " is already taken"));
    }
    else {
        console.log("This User Name ".concat(oneNewUser, " is available"));
    }
});
