# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Template Literal

`${const} ${const}` = Hello World

## Destructuring assignment

const x = [1, 2, 3, 4, 5];
const [y, z] = x;

console.log(y); // 1
console.log(z); 

const obj ={
    name:'juan',
    apellido:'perez'
}

const {name, apellido} = obj;

## Default Parameters

const suma =(num1 = 0, num2 =2) => num1 + num2;

suma(0)

## Rest / Spread Operator
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


## ES6 Modules and How to Use Import and Export in JavaScript

file a
export const n = 10

file b
import { n } from 'a'
console.log(n);

