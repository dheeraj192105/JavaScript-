const accountId = 255605
let accountEmail = "raj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; "MP"

// accountId = 5// not allowed
// this curly barces means Scope--> {}

accountEmail = "mayur@.com"
accountPassword = "5556160"
accountCity = "Karnataka"

console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



