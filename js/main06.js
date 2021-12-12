// 'use strict';

const targetObj = { a: 0 };
const handler = {
  set: function(target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
    // throw new Error('cannot add prop');
  },
  get: function(target, prop, receiver) {
    console.log(receiver);
    // 値が見つからなかった時のデフォルト値
    if(target.hasOwnProperty(prop)){
      return target[prop];
    }else{
      return '-1';
    }
    console.log(`[get]: ${prop}`);
    return target[prop];
  },
  deleteProperty: function(target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
    // throw new Error('cannot delete prop');
  }
}
const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
console.log(pxy.b);
// pxy.b;
delete pxy.a;