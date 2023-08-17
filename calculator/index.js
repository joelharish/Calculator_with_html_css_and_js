const buttons = document.getElementsByTagName('button')

const btn13 = buttons[12]
btn13.addEventListener(('click'), function(){
  location.reload()
})

function Display(val)
{
  document.getElementById('num1').value+=val
}

function getResult(){
  let res = document.getElementById('num1').value
  let result = eval(res)
  document.getElementById('num1').value = result
}

