const operator = prompt ('operation (either +, -, *, hoặc /): ");
let a = parseFloat(prompt("Enter first number: "))
let b = parseFloat(prompt ("Enter second number: "))
let result;

if (caculation=="+") {
    result = a + b;
    console.log(`${a} ${operator} ${b}) = ${result}`);
}

else if (operator=="-") {
    result = a - b; 
    console.log(`${a} ${operator} ${b} = ${result}`);
}

else if (operator=="*") {
    result = a * b;
    console.log(`${a} ${operator} ${b = ${result}}`)
}
else if (operator=="/") {
    result = a / b;
    console.log(`${a} ${operator} ${b} = ${result} `)
}
