/**
 * 8 ways to get Undefined 
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined 
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly undefined 
 */

// let first ;
// console.log(first);

// function with no return
let first;

function second(a, b){
    const total = a + b;
}

const result = second();

// console.log(result);


// parameter that is not passed will be undefined
function third(a, b, c, d){
    const total = a + b + c +d;
    // console.log(a, b, c, d);
}

// third(2, 5);


// if return has nothing on the right side will return undefined
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    } 
    return a + b;
}

const total = noNegative(2, 5);
// console.log(total);



// property that doesn"t exists on an object will give you undefined
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);



// accessing array elements outside of the index range
const sixth = [4, 89, 56, 87, 54];
// you should not do it. Instead use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[500]);
console.log(sixth);

// 8. set a value directly undefined 
const eighth = undefined;
