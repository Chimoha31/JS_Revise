const obj = { a: 0 };
const json = JSON.stringify(obj);

localStorage.setItem('key', json);
// localStorage.setItem('key2', '1');
const result = localStorage.getItem('key');
console.log(result);
const obj2 = JSON.parse(result);
console.log(obj2);
// ------------------------------------

const arry = [1, 2, 3, 4, 5];
// const arry2 = arry.concat([6, 7, 8]);
const arry02 = ([0, ...arry, 6, 7, 8])

arry.push(6);
arry.pop();
// arry.shift();
arry.unshift(0);
const result02 = arry.splice(0, 2, 111, 222);
console.log(arry02, result02);
// ------------------------------------
const arry03 = [1, 2, 3, 4, 5];

arry03.forEach(function(v, i, arry){
  console.log(v);
});

const newArry = arry03.map(function(v, i, arry) {
  return v * 2;
});
console.log(arry03, newArry);

const filterArry = arry03.filter(function(v, i, arry) {
  return i >= 1;
});
console.log(filterArry);
// ------------------------------------

const arry04 = [1, 2, 3, 4, 5];

const result03 = arry04.reduce(function(accu, curr) {
  console.log(accu, curr);
  return accu + curr * 2;
}, 0);

console.log(result03);

