function displayNumber(num){
    result.value+=num
    
}
function clearBox(){
    result.value=''
}

// method 1
function evaluateExp(){
exp=result.value
output=eval(exp)
result.value=output
}
// method2
result.value=eval(result.value)

// remove last iteam
function removelastitem(){
    result.value=result.value.slice(0,-1)
}
