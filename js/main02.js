'use strict';
/**
 * 問題１：
 * obj.prop1の値をminus関数を用いて-1したい
 * と思いました。
 * しかしminus関数実行後のobj.prop1の値は変
 * わっていませんでした。
 * 以下のminus関数をどのように修正すればobj.prop1
 * の値を変更することができるでしょうか？
 * 
 */
// let obj1 = {
//   prop1: 10
// }

// function minus(obj1, val) {
//   let prop1 = obj1.prop1;
//    obj1.prop1 = prop1 - val;
// }

// minus(obj1, 1);
// console.log(obj1.prop1);
// /**
// * 問題２：
// * double関数を使ってobj.prop1の値を２倍にしたい
// * と思っていました。しかし、コンソールに表示された
// * のは元の値である'9'でした。
// * どうすれば、'18'が表示されるようになるでしょうか？
// * 
// * '18'が表示されるように、double関数内を修正してください。
// */

// function double(obj) {
//   let { prop1 } = obj;
//   obj.prop1 = obj.prop1 * 2;
// }

// double(obj);
// console.log(obj.prop1);


// /**
// * 問題３：
// * 以下のコードでfn関数を実行した後にprop3の
// * 値を出力した場合に1、2、3のどれが出力
// * されるか、そして*なぜそのようになるのか*を
// * 考えてみてください。
// */
// obj.prop2 = {
//   prop3: 1
// }

// function fn({ prop2 }) {
//   let prop = prop2;
//   prop.prop3 = 2;
//   prop = { prop3: 3 };
//   return { prop2: prop };
// }
// obj = fn(obj);
// console.log(obj.prop2.prop3);

// /**
// * 問題４：
// * through関数を経由して格納されるobj2は
// * objと等価でしょうか？
// */
// function through (obj) {
//   return obj;
// }

// const obj9 = through(obj);
// console.log(obj === obj9);



// function hello(name) {
//   console.log('hello ' + name);
// }

// function bye() {
//   console.log('Bye');
// }

// function fn(cb) {
//   cb('Tom');
// }

// fn(hello);
// fn(bye);
// fn(function(name) {
//   console.log('Hello ' + name);
// });

// setTimeout(hello, 1000);

window.name = "Hana";

const person = {
  name: 'Chiho',
  hello: function() {
    console.log('Hello ' + this.name);
  }
}

// オブジェクトのメソッドとして実行される場合、呼び出し元のオブジェクトを参照
person.hello();

const helloChiho = person.hello.bind(person);

//関数として実行される場合はthisはグローバルオブジェクトを参照
// function fn(ref2) {
//   ref2();
// }
// fn(helloChiho);



function u(name, name1) {
  console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

const s = u.bind(tim);
s();

/*apply(), call()メソッドの 第二引数以降は、仮引数として扱われる*/
//配列を使う場合は、apply
u.apply(tim, ['Tim', 'Bob']);
//変数が独立している場合は、call
u.call(tim, 'Tim', 'Bob');


//apply()の使用例(ES5まで / ES6の導入で使用回数激減。その代わり、spread構文が使われるようになった)
const arr = [1, 2, 3,4 ,5];
const result1 = Math.max.apply(null, arr);
console.log(result1);

//spread構文の場合(ES6以降 / こちらを使用するのがベター)
const arr1 = [1 ,2 ,3, 4, 5];
const result2 = Math.max(...arr1);
console.log(result2);