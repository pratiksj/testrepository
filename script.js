alert('Hellow TEJ');
let submitbutton=document.getElementById('submit-btn');
 submitbutton.addEventListener('click',function(){
alert('submitted')
  
})

let count = 0;
  const valueDisplay= document.getElementById("valueDisplay");
  function increment(){
count++;
  valueDisplay.innerText= count;
  
}
function decrement(){
count--;
  valueDisplay.innerText=count;
  
}  