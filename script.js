 

function onFocusInput(object) {
    document.getElementById("A").focused = false;
    //document.getElementById("B").focused = false;
    object.focused = true;
}

function addToDisplay(c) {
     
    if (document.getElementById("A").focused) {
        document.cal.A.value += c;
    } else {
        document.cal.B.value += c;
    }
}
var operand;
function setOperator(operator) {
    operand = operator;
    document.cal.operator.value = operator;
onFocusInput(document.getElementById("B"));
    
}
function operation() {
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
        
    } else if (operand == '÷') {
        
        result = a / b;
        
    } else {
        alert("enter correct operator");
    }
    document.getElementById("equal").value = "=";
    document.getElementById("result").value = result;
 
    
    
}
function clearFields(field) {
    if (field == 'A') {
        document.cal.A.value = "";
        onFocusInput(document.getElementById("A"));
    
    } else if (field == 'B') {
        document.cal.B.value = "";
        onFocusInput(document.getElementById("B"));
    } else if (field == 'result'){
        document.cal.result.value = "";
    } else {
        document.cal.A.value = "";
        document.cal.B.value = "";
        document.cal.result.value = "";
        document.cal.operator.value = "";
        document.getElementById("equal").value = "";
        onFocusInput(document.getElementById("A"));
    }
    
}

