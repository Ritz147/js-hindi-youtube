# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## project 3
``` javascript
const clock=document.getElementById('clock')
setInterval(function(){
  let date=new Date()
  const time=(date.toLocaleTimeString())
  //console.log(typeof time)
  clock.innerHTML=time
},1000)

```