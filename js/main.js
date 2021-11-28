"use strict";

// const increment = function() {
//   for(let i = 1; i <= 3; i++) {
//     console.log(i);
//   }
// }

// increment();

const increment1 = function () {
  let num = 0;
  num++;
  console.log(num);
};

increment1();
increment1();
increment1();

/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */

function fn() {
  let a;
  if (true) {
    a = "fn called";
  }
  return a; // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
var val = 'val1';

function fn2() {
  console.log(val); // 期待値->'val1'
  
  if (true) {
    let val = "val2";
    console.log(val); // 期待値->'val2'
  }

  console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
    // return increment;
  }

  
increment();
increment();
increment();
increment();

/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

const calc = (function(value) {
  return {
    plus: function(target) {
      const newVal = value + target;
      console.log(`${value} + ${target} = ${newVal}`);
      value = newVal;
    },
    
    minus: function(target) {
      const newVal = value - target;
      console.log(value + ' - ' + target + ' = ' + newVal);
      value = newVal;
    },
    
    multiply: function(target) {
      const newVal = value * target;
      console.log(value + ' * ' + target + ' = '+ newVal);
      value = newVal;
    },
    
    divide: function(target) {
      const newVal = value / target;
      console.log(value + ' / ' + target + ' = '+ newVal);
      value = newVal;
    }
  }
})(10);


calc.plus(5);     
calc.minus(3);    
calc.multiply(3);  
calc.divide(2);    

function printTypeAndValue(val) {
  console.log(typeof val, val);
}

let a = 0;
printTypeAndValue(a);

let b = '1' + a;
printTypeAndValue(b);

let c = 15 - b;
printTypeAndValue(c);

let d = c - null;
printTypeAndValue(d);

let e = d - true;
printTypeAndValue(e);


/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false);
//0 == false, true
console.log("0 === false", 0 === false);
//0 === false, false
console.log('"false" == false', "false" == false);
//"false" == false, false
console.log('"0" == 0', "0" == 0);
//"0" == 0, true
console.log('Boolean("0") === false', Boolean("0") === false);
//Boolean("0") === false', false
console.log('Boolean(0) === false', Boolean(0) === false);
//Boolean(0) === false, true
console.log('!Boolean(0) === false', !Boolean(0) === false);
//!Boolean(0) === false, false
console.log('-1 == false', -1 == false);
//-1 == false, false
console.log('!10 === false', !10 === false);
//!10 === false, true 

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let z = 0;

function fn(num) {
  if(num === undefined || num == null) {
    num = -1;
  }
    console.log(num);
}
fn(z);


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */
 function greeting(name, greet = "hello, ") {
   console.log(greet + name);
 }

 greeting("Bob", "hi, ");
 greeting("Bob");
 

 /**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val5 = 0;
let val6 = val5;
val6 = 1;
console.log(val5); // 0


let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;

console.log(obj); // {prop1: 9}


function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);

 console.log(obj); // {prop1: 9} {prop2: 8}


function fn2(arg) {
    arg = {};
    return arg;
}
const obj4 = fn2(obj); // 問題４

console.log(obj);  //{prop1: 9} {prop2: 8}