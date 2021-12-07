'use strict';
/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

class User {
  constructor(name) {
   this.name = name;
   this.redirectTo = '/';
  }

 login() {
   console.log(`User: ${this.name}`);
   return true;
 }

 checkRoll() {
   console.log(`You have normal roll`);
   return true;
 }

 redirect() {
   console.log(`redirect: ${this.redirectTo}`);
   return true;
 }
}

class AdminUser extends User{
 constructor(name){
   super(name);
   this.redirectTo = '/admin';
 }

 checkRoll() {
   console.log(`You have normal roll `);
   return true;
 }

 redirect() {
   console.log(`redirect: ${this.redirectTo}`);
   return true;
 }

}


function loginController(user) {
 if (user.login()
   && user.checkRoll()
   && user.redirect()) {
   console.log('login success');
 } else {
   console.log('login failed');
 }
}

// loginController(new User('Teddy'));
loginController(new AdminUser('Hanako'));


/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
  constructor() {
   this.val = null;
   this._operator;
  }

  set(val) {
    if(this.val === null) {
      this.val = val;
    } else {
      this._operator(this.val, val);
    }
    return this;
  }

  minus() {
    this._operator = function(val1, val2) {
      const result = val1 - val2;
      this._equal(result);
    }
    return this;
  }

  multiply() {
    this._operator = function(val1, val2) {
      const result = val1 * val2;
      this._equal(result);
    }
    return this;
  }

  divide() {
    this._operator = function(val1, val2) {
      const result = val1 / val2;
      this._equal(result);
    }
    return this;
  }

  plus() {
    this._operator = function(val1, val2) {
      const result = val1 + val2;
      this._equal(result);
    }
    return this;
  }

  _equal(result) {
    this.val = result;
    console.log(result);
  }
}

const calc = new Calculator();

calc.set(10)
 .minus()
 .set(3)
 .multiply()
 .set(6)
 .divide()
 .set(2)
 .plus()
 .set(2)