// write a function named changeColor  
    // - get the container1 color value by using getElementById and store it in a variable
    // - get the input1 value by using getElementById and store it in a variable
    // - update the background color of container1 by the input1 value
    // - And clear the input that user enter to empty value
function changeColour(){
    var color = document.getElementById("container1")
    var input = document.getElementById("input1")
    color.style.backgroundColor = input.value;
    input.value = null;
}