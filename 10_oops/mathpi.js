const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)//ye properties itni harcoded hoti hai ki hum writable ko true bhi nahi kr skte
//object ke baare me kuch hidden properties ke baare me batati hai
console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);
const chai={
    name:"ginger chai",
    price:"250",
    isAvailable:true,
    orderChai:function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{writable:false,enumerable:false});
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
for(let [key,value] of Object.entries(chai)){
    if(typeof value !=='function')
    console.log(`${key} ${value}`);
}