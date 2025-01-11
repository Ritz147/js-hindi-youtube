# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## project2
``` javascript
const form=document.querySelector('form')//form ya toh get type se select hota hai ya toh post type se//jab bhi submit hota hai toh uski values ya toh url ya toh server me chali jaati hai//default action ko rok lo
form.addEventListener("submit",function(e){
  e.preventDefault();
  let height=Number(document.querySelector('#height').value)//string me .value krke aayega toh use integer me convert krna hoga
  let weight=Number(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  let counter=0
  if(isNaN(height) || height<=0){
    //console.log("in if block")
    results.innerHTML=`Please give a valid height ${height}`
    counter++
  }
  if(isNaN(weight) || weight<=0){
    //console.log("in if block")
    results.innerHTML=`Please give a valid height ${weight}`
    counter++
  }
  if(counter==0){
    const bmi=(weight/((height*height)/10000)).toFixed(2)//to 2 decimal places
    if(bmi<18.6){
      results.innerHTML=`${bmi}<br>You are Underweight`
    }
    else if(bmi>=18.6 && bmi<24.9){
      results.innerHTML=`${bmi}<br>You are in the Normal Range`
    }
    else{
      results.innerHTML=`${bmi}<br>You are Overweight`
    }
  }
})
//agar hum height weight event listener ke bahar likhenge toh hume empty values milegi load hone ke baad but hume wo values tab chahiye jab submit hui ho
```