// setTimeout(() => {
//   console.log("Hello worlds");
// }, 0);

// console.log("hello world");

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success == true) {
//     resolve("I have to give him treat");
//   } else {
//     reject("Not to give any treat");
//   }
// });

// let a = async () => {
//   try {
//     console.log("checkinh=g");

//     let response = await myPromise;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// a();

// let fetchApi = async () => {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(res);
//     if (res.ok) {
//       let data = await res.json();
//       console.log(data);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchApi();

// Selector

// Tag
var heading1 = document.getElementsByTagName("h1");
// HJTMLCOllection
console.log(heading1[0]);

// Id selector
var id = document.getElementById("a");
console.log(id);

// Class Selector
let av = document.getElementsByClassName("v");
// HTMLcollection
console.log(av[1]);

// Querry Slectoir
let w = document.querySelector(".v");
console.log(w);

let q = document.querySelectorAll(".v");
console.log(q[0]);

// Read Operations

console.log(w.textContent);

// write Opeartion

w.textContent = "Hello Written by JS";

w.classList.add("y");

w.classList.remove("ghgh");
w.classList.toggle("qw");

w.style.color = "red";
