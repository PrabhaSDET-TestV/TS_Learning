/**
 * TypeScript is statically typed language
 * Type Inference
 * Type Annotations
 */

let firstName_1: string;
firstName_1 = "Alexander";

let age_1: number; // Type Annotations
age_1 = 15;

let n: number = 50;
let lName: string = "The king";

let test = "TypeScript"; //Type=string -> CT -> Type Inference
let billAmount = 6000; //Type=number -> CT -> Type Inference

//null and undefine
let city: null = null;
let country: undefined = undefined;

//any
let value: any = 80;
value = "num";
value = true;

//void function does not return any value
function printAny() {
    console.log("Any"); // return type: void -> CT
}

function getNumber(): number {
    return 12;  // return type: number -> CT
}

function getAnyValue(): any {
    return "Automation Testing -- SDET" //return type: any -> CT
}

function addition(a ,b) {
    return a + b; //30 -- number //CT -> Type Inference will be applied as number
}

addition(10, 30);

 function add(a: number, b: number): number {
    return a + b; // CT -> return: number
 }