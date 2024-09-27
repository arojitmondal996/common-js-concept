// strongly typed language
//  int a = 5;
//  string b = 'alim halim kalim';
//  bool c = True;
//  object student = { name: 'noya daman', id: 55}
//  int[] numbers = [12, 45, 78]
//  string[] friends = ['abul', 'babul']


// Javascript dynamic type language
// primitive type
const a = 5;
const b = 'Sagor';

// non-primitive
const ages = [45, 65, 48];
const student = {id: 23, class: 7}
console.log(typeof a, typeof b, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
q = {job: 'Backend end'}
console.log(p, q);