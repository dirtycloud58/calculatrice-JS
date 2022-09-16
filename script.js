const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('score');

buttons.forEach((button) => {
button.addEventListener('click', (e) => {
result.textContent += e.target.id
})
})

equal.addEventListener('click',()=>{
result.textContent = eval(result.textContent)
})

clear.addEventListener('click', ()=> {
  result.textContent = "";
})

ce.addEventListener('click', (e) => {

  let newResult = result.textContent.replace(/.$/, '');
  result.textContent = newResult;
})

