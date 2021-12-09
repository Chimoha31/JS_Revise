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

// function sleep(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(val++);
//       resolve(val);
//     }, val * 500);
//   });
// }

// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });
// // Promise.race([sleep(2), sleep(3), sleep(4)]).then(function (data) {
// //   console.log(data);
// // });
// // sleep(0).then(function(val) {
// //   return Promise.all([sleep(2), sleep(3), sleep(4)]);
// // }).then(function(val) {
// //   return sleep(val);
// // }).then(function(val) {
// //   return sleep(val);
// // }).then(function(val) {
// //   return sleep(val);
// // })

// setTimeout(function task1() {
//   console.log('task1');
// });

// new Promise(function promise(resolve) {
//   console.log('promise');
//   resolve();
// }).then(function job1() {
//   console.log('job1');
// });

// console.log('global end');



// new Promise(function promise(resolve) {
//   console.log('promise');

//   setTimeout(function task1() {
//     console.log('task1');
//     resolve();
//   });
// }).then(function job1() {
//   console.log('job1');
//   setTimeout(function task1() {
//     console.log('task2');

//     queueMicrotask(function job4() {
//       console.log('job4');
//     })
//   });

// }).then(function job2() {
//   console.log('job2');
// }).then(function job3() {
//   console.log('job3');
// })

// console.log('glabal end');


function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  console.log(val);
}

init();
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })

