const accountId = 144553;
let accountEmail="rituraj24@gmail.com";
var accountPassword="12345"
accountCity="Jaipur";
//accountId=2;//not allowed 
console.log(accountId);
accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="Bangalore"
console.table([accountPassword,accountEmail,accountCity]);
/*
Prefer not to use var because of issue in block scope and functional scope
*/ 
let accountState;
console.log(accountState);