 function onFocusInput(object){
    document.getElementById("A").focused=false;
    //document.getElementById("B").focused=false;
    object.focused = true;
}

function addToDisplay(c) {
     
      if(document.getElementById("A").focused)
    document.cal.A.value += c;
    else 
    document.cal.B.value += c;
     
    
}
function operation(operator) {
    
    var a = Number(document.getElementById("A").value);
    var b = Number(document.getElementById("B").value);

    if (operator == '+') {
        
        result = a + b;
    
    } else if (operator == '-') {
        
        result = a - b;
        
    } else if (operator == '×') {
        
        result = a * b;
        
    } else if (operator == '÷') {
        
        result = a / b;
        
    } else {
        document.cal.result.value = result;
        
    } 
    if(operator == "=") {
        document.cal.equal.value = operator;
    
    } else{
   document.cal.operator.value = operator;
    }
}
function clearFields(field) {
    if(field == 'A') {
        document.cal.A.value = "";
    
    } else if (field == 'B') {
        document.cal.B.value = "";
    } else  {
        document.cal.result.value = "";
    }
    
}

