function saymyname(){
    console.log("Hello World")
}
//saymyname()
//saymyname is just the reference of the function
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// const result=addTwoNumbers(3,5)
// console.log(result)
function addTwoNumbers(number1,number2){
    // console.log("Ritu")
    // let result=number1+number2;
    // return result;
    return number1+number2;
}
// const sum=addTwoNumbers(3,5)
// //console.log(sum)
// function loginUserMessage(username="sam"){
//    console.log(`${username} just logged in`);
// }
// //console.log(loginUserMessage("Ritu"))
// loginUserMessage();
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))