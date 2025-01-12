// function multiplyBy5(num){
//   return num*5
// }

// console.log(multiplyBy5(5))
// multiplyBy5.power=2
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)//js me har ek cheez object hai
 
function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}
const chai=new createUser("chai",25)//new keyword prototype me huye changes ko inject karta hai
const tea=new createUser("tea",250)
chai.printMe()