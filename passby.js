// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);


//  object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'Borsha'}
let student2 = {name: 'kalil', partner: 'porsha'}

function makeMove(couple1, couple2){
    couple1.name = 'onita';
    couple2.name = 'mim';
}

console.log(student1, student2);
makeMove(student1, student2);