// 'use strict';

// console.log(tim._name);

// const targetObj = { a: 0 };
// const handler = {
//   set: function(target, prop, value, receiver) {
//     console.log(`[set]: ${prop}`);
//     target[prop] = value;
//     // throw new Error('cannot add prop');
//   },
//   get: function(target, prop, receiver) {
//     console.log(receiver);
//     // 値が見つからなかった時のデフォルト値
//     if(target.hasOwnProperty(prop)){
//       return target[prop];
//     }else{
//       return '-1';
//     }
//     console.log(`[get]: ${prop}`);
//     return target[prop];
//   },
//   deleteProperty: function(target, prop) {
//     console.log(`[delete]: ${prop}`);
//     delete target[prop];
//     // throw new Error('cannot delete prop');
//   }
// }
// const pxy = new Proxy(targetObj, handler);
// // pxy.a = 1;
// console.log(pxy.b);
// // pxy.b;
// delete pxy.a;

// // -----------------------------
// class C {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// const obj1 = new C(1, 2);
// console.log(obj1); // = Reflect.constructを呼んでいるのと同じ
// const obj2 = Reflect.construct(C, [1,2]);
// console.log(obj2);

// console.log('a' in obj1); //true
// console.log('c' in obj1); //false
// console.log(Reflect.has(obj1, 'b'));
// //------------------------------

// const bob = {
//   name: 'Bob',
//   _hello: function() {
//     console.log(`hello ${this.name}`);
//   }
// }

// const tom = {
//   name: 'Tom',
//   _hello: function() {
//     console.log(`hello ${this.name}`);
//   },
//   get hello() {
//     console.log(this);
//     return this._hello();
//   }
// }

// tom.hello;
// Reflect.get(tom, 'hello', bob);
// //--------------------------------

// const targetObj02 = { 
//   a: 0,
//   get value() {
//     return this.b;
//   }
// };

// const handler02 = {
//   get: function(target, prop, receiver) {
//     console.log(`[get]: ${prop}`);
//     if(target.hasOwnProperty(prop)) {
//       // return target[prop];
//       return Reflect.get(target, prop, receiver);
//     } else {
//       return -1;
//     }
//   }
// }
// const pxy02 = new Proxy(targetObj02, handler02);
// console.log(pxy02.value);
// console.log(pxy02.b);
// //--------------------------------------------

// const wm = new WeakMap();

// let o = {};
// //値を設定する'set()'
// wm.set(o, 'value1');


// console.log(wm.get(o));
// console.log(wm.delete(o));
// console.log(wm.get(o));
//--------------------------------------------

