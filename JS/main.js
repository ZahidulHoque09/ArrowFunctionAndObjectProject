//Annonymus function :define with const

/* const x = function () {
  console.log("Representation of annonymus Function:");
};

x();
 */

// Representation of Arrow Function:

/* const addPrice=()=>{};
const addVat=()=>{};
const addDisscount=()=>; */

/* 
const arrow = () => {
  console.log("This is arrow function:");
};
arrow(); */

// Todo: Take 2 number(num1,num2) then .. Sum , Subtract , multiply, division; modulus, exponential.

const sum = (num1, num2) => {
  let totalSum = num1 + num2;

  // creat en object in  between function

  let SumObjkt = { result: totalSum, functionName: "sum" };
  // creat en object in  between function
  return SumObjkt;
};

const subtract = (num1, num2) => {
  let totalSubtract = num1 - num2;
  // creat en object in  between function
  let SubtractObjkt = { result: totalSubtract, functionName: "subtract" };
  // creat en object in  between function
  return SubtractObjkt;
};

const multiply = (num1, num2) => {
  let totalMultiply = num1 * num2;
  // creat en object in  between function
  let MultiplyObjkt = { result: totalMultiply, functionName: "multiply" };
  // creat en object in  between function
  return MultiplyObjkt;
};

const division = (num1, num2) => {
  let totalDivision = num1 / num2;
  // creat en object in  between function
  let DivisionObjkt = { result: totalDivision, functionName: "division" };
  // creat en object in  between function
  return DivisionObjkt;
};

const modulus = (num1, num2) => {
  let totalModulus = num1 % num2;
  // creat en object in  between function
  let ModulusObjkt = { result: totalModulus, functionName: "modulus" };
  // creat en object in  between function
  return ModulusObjkt;
};

const exponential = (num1, num2) => {
  let totalExponential = num1 ** num2;
  // creat en object in  between function
  let ExponentialObjkt = {
    result: totalExponential,

    functionName: "exponential",
  };
  // creat en object in  between function
  return ExponentialObjkt;
};

// Use arry to collect all the date that is why i used arry here:

let allfunc = [sum, subtract, multiply, division, modulus, exponential];

/* Call command for all function:

allfunc[5](); */

// use here loop here to run all function

let num1 = 20;
let num2 = 40;

for (let i = 0; i <= allfunc.length; i++) {
  let finalResult = allfunc[i](num1, num2);

  if (finalResult.functionName == "sum") {
    console.log(
      "This is the sum function and the result is:",
      finalResult.result
    );
  } else if (finalResult.functionName == "subtract") {
    console.log(
      "This is the subtract function and the result is:",
      finalResult.result
    );
  } else if (finalResult.functionName == "multiply") {
    console.log(
      "This is the multiply function and the result is:",
      finalResult.result
    );
  } else if (finalResult.functionName == "division") {
    console.log(
      "This is the division function and the result is:",
      finalResult.result
    );
  } else if (finalResult.functionName == "modulus") {
    console.log(
      "This is the modulus function and the result is:",
      finalResult.result
    );
  } else if (finalResult.functionName == "exponential") {
    console.log(
      "This is the exponential function and the result is:",
      finalResult.result
    );
  }
}

/* sum();
subtract();
multiply();
division();
modulus();
exponential(); */
