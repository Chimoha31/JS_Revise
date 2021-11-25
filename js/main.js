'use strict';


// const increment = function() {
//   for(let i = 1; i <= 3; i++) {
//     console.log(i);
//   }
// }

// increment();

const increment1 = function() {
  let num = 0;
  num++;
  console.log(num);
}

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
let a;

function fn() {
    if(true) {
        a = 'fn called';
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
var val;

function fn2() {
    val = 'val1';
    console.log(val); // 期待値->'val1'

    var val;
    if(true) {
        val = 'val2';
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