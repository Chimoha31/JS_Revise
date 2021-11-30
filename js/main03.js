'use strict';

const person = {
  name: 'Tom',
  bye: () => {
      console.log('Bye ' + this.name);
  },
  hello: function (greeting) {
      console.log(greeting + ' ' + this.name);
      return greeting + ' ' + this.name;
  },

  hello1s() {
      // setTimeout(this.hello.bind(this, "hello"), 1000)
      // setTimeout(() => {
      //     this.hello('hello');
      // }, 1000)

      const _this = this;
      setTimeout(function() {
          _this.hello('hello');
      }, 1000);
  }
  /**
   * 問題４：
   * 1秒後に"hello Tom"
   * と出力されるような、メソッドを
   * personオブジェクトに追加してみてください。
   * 
   * 以下のように使用するものとします。
   * `person.hello1s()` 
   * -> 1秒後に"hello Tom"と出力
   * 
   * 3通りの方法で実装してみてください。
   * １．bind
   * ２．アロー関数
   * ３．thisを一旦変数に代入
   */
}

person.hello1s();

/**
* 問題１：
* 1秒後に"hello Tom"
* と出力されるように、以下のコード
* の記載を変更しましょう。
*/
// setTimeout(person.hello.bind(person, "hello"), 1000);

/**
* 問題２：
* alertで"hello Tom"
* と出力されるように、
* 以下のコードを変更してください。
*/
// alert(person.hello("hello"));

/**
* 問題３：
* person.byeメソッドを１秒後に実行したかったので
* bindを使って束縛してみましたが、コンソールには
* "Bye"しか表示されませんでした。
* "Bye Tom"とするためにはどうすればよいでしょうか？
*/
setTimeout(function() {
  return person.bye()
}, 1000);


/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
 */
function hello2(name) {
    return function() {
      console.log("Hello " + name);
    }
  }
  
  /**
   * 実行文は以下の通りです。
   */
  setTimeout(hello2('Tom'), 1000);


  /**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {

  function callbackAfter1s(str) {
      setTimeout(console.log.bind(null, str), 1000);
  }

  return {
      plus: function(target) {
          const newVal = val + target;
          callbackAfter1s(`${val} + ${target} = ${newVal}`);
          val = newVal;
      },
      minus: function(target) {
          const newVal = val - target;
          callbackAfter1s(`${val} - ${target} = ${newVal}`);
          val = newVal;
      },
      multiply: function(target) {
          const newVal = val * target;
          callbackAfter1s(`${val} x ${target} = ${newVal}`);
          val = newVal;
      },
      divide: function(target) {
          const newVal = val / target;
          callbackAfter1s(`${val} / ${target} = ${newVal}`);
          val = newVal;
      }
  };
}

const calc3 = calcFactory(10, console.log);
calc3.plus(5); 
calc3.minus(3); 
calc3.multiply(3);
calc3.divide(2);