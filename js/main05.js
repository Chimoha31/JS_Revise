"use strict";

// const btn = document.querySelector("button");
// btn.addEventListener("click", function task() {
//   console.log("task2 done");
// });

// function a() {
//   setTimeout(function task() {
//     console.log("task1 done");
//   }, 4000);
// }
// const startTime = new Date();
// while (new Date() - startTime < 5000);
// console.log("fn a done");

// a();

// new Promise(function (resolve, reject) {
//   reject("bye");
// })
//   .then()
//   .catch(function(data) {
//     console.log('data') //bye
//   })
//   .finally(function () {
//     console.log("終了処理");
//   });

function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data);
});
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });
// sleep(0).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)]);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
