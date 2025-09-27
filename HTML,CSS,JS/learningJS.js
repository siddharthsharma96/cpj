// console.log(a);
// // Hoisting
// var a = 10;
// a = "hjhj";
// console.log(a);
// // console.log(b);
// // Temporal Dead Zone(TDZ)
// let b = 20;
// console.log(b);

// {
//   let b = 50;
//   console.log(b);
// }

// console.log(b);

// const c = 30;
// // c = 20;
// console.log(c);

// 1.Named Function
xyz();

// Function Declaration
function xyz() {
  console.log("sdhfgsdhjgf");
  console.log("sdhfgsdhjgf");
  console.log("sdhfgsdhjgf");
  console.log("sdhfgsdhjgf");
  console.log("sdhfgsdhjgf");
}

// function Invocation
// xyz();

// 2. Function Expression

let asd = function () {
  console.log("function expression");
};

asd();

// 3. Arrow function

let qwe = () => {
  console.log(" Arrow function ");
};

qwe();

// 4.Callback function
// IIFE Immediately Invoked Function Expression

(() => {
  console.log("IIFE ");
  console.log("Callback function");
})();

function addSum(parameter1, paramneter2) {
  let a = parameter1;
  let b = paramneter2;
  console.log(a + b);
}
