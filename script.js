// Receiving inputs from the user
const input1 = window.prompt("Enter the first number: ")
const input2 = prompt("Enter the second number: ")
const operation = window.prompt("Choose an operaion from the list: +, -, *, /")

// converting the numbers to integers
const num1 = parseInt(input1)
const num2 = parseInt(input2)

// if statement to run the operation

if (operation == "+") {
    result = num1 + num2;
} else if(operation == "*"){
    result = num1 * num2;
} else if (operation == "-"){
    result = num1 - num2;
} else if(operation == "/") {
    result = num1 / num2;
} else {
    alert("Invalid operation. Refresh and try again!")
}

alert(result);





