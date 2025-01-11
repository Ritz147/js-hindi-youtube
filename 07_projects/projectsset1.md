# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## project 1
```javascript
console.log("hitesh")
const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector("body")
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener("click",function(e){
    console.log(e)//event ka object
    console.log(e.target)//event aa kahan se raha hai
    let color=e.target.getAttribute("id")
    switch(color){
      case "grey":
        body.style.backgroundColor="grey"
        break;
      case "white":
      body.style.backgroundColor="white"
      break;
      case "blue":
      body.style.backgroundColor="blue"
      break;
      case "yellow":
      body.style.backgroundColor="yellow"
      break;
    }
  })
})
```
