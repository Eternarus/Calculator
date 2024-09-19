let display = document.getElementById("result")

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try{
        display.value = eval(display.value)
    }
    catch(erroe){
        display.value = "Error"
    }
}