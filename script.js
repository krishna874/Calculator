 

function onFocusInput(object){
    document.getElementById("A").focused=false;
    document.getElementById("B").focused=false;
    object.focused = true;
}

function addToDisplay(c) {
     
      if(document.getElementById("A").focused)
    document.cal.A.value += c;
    else 
    document.cal.B.value += c;
     
    
}
var operand;
function setOperator(operator) {
    operand = operator;
    document.cal.operator.value = operator;
    
    
}
function operation(operand) {
    operand = document.cal.operator.value;
    
    var a = Number(document.getElementById("A").value);
    var b = Number(document.getElementById("B").value);
    var result;
    if (operand == '+') {
        
         result = a + b;
    
    } else if (operand == '-') {
        
        result = a - b;
        
    } else if (operand == '×') {
        
        result = a * b;
        
    } else if(operand == '÷') {
        
        result = a / b;
        
    } else {
        alert("enter correct operator");
    }
    document.getElementById("equal").value = "=";
document.getElementById("result").value = result;
 
    
    
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

