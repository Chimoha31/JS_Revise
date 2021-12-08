"use strict";

const btn = document.querySelector("button");
btn.addEventListener("click", function task() {
  console.log("task2 done");
});

function a() {
  setTimeout(function task() {
    console.log("task1 done");
  }, 4000);
}
const startTime = new Date();
while (new Date() - startTime < 5000);
console.log("fn a done");

a();

new Promise(function (resolve, reject) {
  reject("bye");
})
  .then()
  .catch(function(data) {
    console.log('data') //bye
  })
  .finally(function () {
    console.log("終了処理");
  });
