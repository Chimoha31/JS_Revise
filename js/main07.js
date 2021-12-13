const obj = { a: 0 };
const json = JSON.stringify(obj);

localStorage.setItem('key', json);
// localStorage.setItem('key2', '1');
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);
console.log(obj2);
// ------------------------------------

const arry = [1, 2, 3, 4, 5];
// const arry2 = arry.concat([6, 7, 8]);
const arry2 = ([0, ...arry, 6, 7, 8])

arry.push(6);
arry.pop();
// arry.shift();
arry.unshift(0);
const result02 = arry.splice(0, 2, 111, 222);
console.log(arry2, result02);