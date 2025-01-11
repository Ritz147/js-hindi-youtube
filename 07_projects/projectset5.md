# Projects related to Async
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
``` javascript
//generate a random color
const body=document.querySelector('body')
const randomcolor= function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    const randomNum=Math.floor(Math.random()*16)
    color=color+hex[randomNum]
  }
  return color
}
console.log(randomcolor())
let intervalId;
const startChangingColor=function(){
  if(!intervalId){
    intervalId=setInterval(function(){
      let color=randomcolor()
      body.style.backgroundColor=color
    },500)
  }
}
stopChangingColor=function(){
  clearInterval(intervalId)
  intervalId=null
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)
```