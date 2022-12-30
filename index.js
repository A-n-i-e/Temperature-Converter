degree = document.getElementById("degrees");
result = document.getElementById("result");
unit = document.getElementById("unit");

degree.oninput =()=>{
    if (unit.value == 'celsius'){
        let output = ( parseFloat(degree.value) * 9/5) + 32;
        if (!isNaN(output)){
            result.value =  parseFloat(output.toFixed(2)) + 'F';
        }
        else{
            result.value = ' ';
        }
    }
    else{
        let output = ( parseFloat(degree.value) - 32) * 9/5;
        if (!isNaN(output)){
            result.value =  parseFloat(output.toFixed(2)) + 'C';
        }
        else{
            result.value = ' ';
        } 
    }
}

