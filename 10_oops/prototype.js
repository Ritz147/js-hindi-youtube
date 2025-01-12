// let myName="ritu     "
// String.prototype.truelength=function(){
//     this.str=this.valueOf()
//     this.str=this.str.trim()
//     this.len=this.str.length
//     console.log(`true length of ${this.valueOf()} is ${this.len}`)
// }
// console.log(myName.truelength())

let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
      console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log("Hitesh is present in all objects")
}
//heroPower.hitesh()
myHeroes.hitesh()//humne top level ki hierarchy access kr li
Array.prototype.ritu=function(){
    console.log("Ritu is present in all arrays")
}
myHeroes.ritu()
//heroPower.ritu()
//inheritence
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}

const TeachingAssistant={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingAssistant
}

Teacher.__proto__=User //prototypal inheritence Teacher User ki properties ko access kr skta hai

//modern syntax

Object.setPrototypeOf(TeachingAssistant,Teacher)//TeachingAssistant Teacher ki property access kr skta hai