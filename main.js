const input = document.getElementById("js-inputValue");
const cf = document.getElementById("toFahrenheit");
const fc = document.getElementById("toCelsuis");
const result = document.getElementById("js-result");
let temp;
function convert(){
    if(cf.checked){
        temp = (9*(Number(input.value))/5)+32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(fc.checked){
        temp = (5*((Number(input.value))-32))/9;
        result.textContent = temp.toFixed(1) + "C";
    }
    else{
        result.textContent = "Select a Unit";
    }   
}
