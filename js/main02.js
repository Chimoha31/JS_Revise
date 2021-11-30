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



window.name = 'Moko';

//普通のthisのオブジェクト
const person1 = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
  }
}


const abc = () => console.log('Bye ' + this.name);
//アロー関数を使った場合
const person2 = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
    abc();
  }
}

person1.hello();
person2.hello();


/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person3 = {
  hello: function () {
      return 'hello Tom';
  }
}

setTimeout(function() {
  const result = person3.hello();
  console.log(result);
}, 1000);

/**
* 問題２：
* setTimeoutの実行から１秒後にブラウザの
* ダイアログに'hello Tom'と表示されるように
* 実装してみましょう。
* 
* ※必ずperson.helloメソッドは解答内で使用してください。
* ※alertは第一引数に渡した文字列を画面のダイアログに表
* 示する関数です。
*/

setTimeout(function() {
   const hello = person3.hello();
   alert(hello);
}, 1000);


/**
* 問題３：
* objにgreetingというメソッドを実装しました。
* これをsetTimeoutで１秒後に表示するようなafter1sの
* 関数にコールバックとして渡しました。
* その後objに格納したgreeting関数を別の関数で
* 上書きしました。
* この時、１秒後にコンソールに出力されるのは
* 'hello'または'hey'のどちらでしょうか？
*/
const obj10 = {};

obj10.greeting = function() {
  console.log('hello');
}

function after1s(callack) {
  setTimeout(callack, 1000);
}

// この時点で実行します。
after1s(obj10.greeting);
// 
// この後でgreetingを書き換えます。
obj10.greeting = function() {
  console.log('hey');
}


/**
* 問題４：
* 以下のcalcFactoryを修正して、計算式を
* コンソール(console.log)に表示するか、
* ダイアログ(alert)に出力するかを
* 使い分けできるようにしてください。
* 
* ※コールバック関数を用いて実装してください。
*/
function calcFactory(val, callback) {
  return {
      plus: function(target) {
          const newVal = val + target;
          callback(`${val} + ${target} = ${newVal}`);
          val = newVal;
      },
      minus: function(target) {
          const newVal = val - target;
          callback(`${val} - ${target} = ${newVal}`);
          val = newVal;
      },
      multiply: function(target) {
          const newVal = val * target;
          callback(`${val} x ${target} = ${newVal}`);
          val = newVal;
      },
      divide: function(target) {
          const newVal = val / target;
          callback(`${val} / ${target} = ${newVal}`);
          val = newVal;
      }
  };
}

const calc2 = calcFactory(10, alert);
calc2.plus(5); 
calc2.minus(3); 
calc2.multiply(3);
calc2.divide(2);


