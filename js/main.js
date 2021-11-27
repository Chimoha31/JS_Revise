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



function hello(name) {
  name = name || 'Tom';
  console.log('Hello ' + name);
}

hello();

let name;
name && hello(name);