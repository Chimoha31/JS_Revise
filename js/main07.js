const obj = { a: 0 };
const json = JSON.stringify(obj);

localStorage.setItem('key', json);
// localStorage.setItem('key2', '1');
const result = localStorage.getItem('key');
console.log(result);
const obj2 = JSON.parse(result);
console.log(obj2);
// ------------------------------------

const arry = [1, 2, 3, 4, 5];
// const arry2 = arry.concat([6, 7, 8]);
const arry02 = ([0, ...arry, 6, 7, 8])

arry.push(6);
arry.pop();
// arry.shift();
arry.unshift(0);
const result02 = arry.splice(0, 2, 111, 222);
console.log(arry02, result02);
// ------------------------------------
const arry03 = [1, 2, 3, 4, 5];

arry03.forEach(function(v, i, arry){
  console.log(v);
});

const newArry = arry03.map(function(v, i, arry) {
  return v * 2;
});
console.log(arry03, newArry);

const filterArry = arry03.filter(function(v, i, arry) {
  return i >= 1;
});
console.log(filterArry);
// ------------------------------------

const arry04 = [1, 2, 3, 4, 5];

const result03 = arry04.reduce(function(accu, curr) {
  console.log(accu, curr);
  return accu + curr * 2;
}, 0);

console.log(result03);


/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 * 
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 * 
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */

class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}

	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	push(val) {
		super.push(val);
		return this;
	}

	forEach(callback) {
		for(let i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
	}

	map(callback) {
		const newInstance = new MyArray();
		for(let i = 0; i < this.length; i++) {
			const result = callback(this[i], i, this);
			newInstance.push(result);
		}
		return newInstance;
	}
	
	filter(callback) {
		const newInstance = new MyArray();
		for(let i = 0; i < this.length; i++) {
			if(callback(this[i], i, this)) {
				newInstance.push(this[i]);
			}
		}
		return newInstance;
	}

	reduce(callback, accu) {
		const tmpArry = [...this];

		if(accu === undefined) {
			accu = tmpArry.shift();
		}
		for(let i = 0; i < tmpArry.length; i++) {
			accu = callback(accu, tmpArry[i]);
		}
		return accu;
	}
}

function double(v, i, obj) {
	return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result04 = original
	.map(double)
	.push(5)
	.print('place1')
	.filter(function (v, i) {
		return v > 2;
	})
	.reduce(function(accu, curr) {
		return accu + curr;
	}, 0)

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result04);
