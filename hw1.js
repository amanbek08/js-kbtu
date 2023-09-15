/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        n = n + 1
        return n - 1
    };
};

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe (val2) {
        if (val === val2) {
            return true;
        } else {
            throw new Error('Not Equal');
        };
    };

    function notToBe (val2) {
        if (val !== val2) {
            return true;
        } else {
            throw new Error('Equal');
        };
    };

    return {
        toBe,
        notToBe
    }
};

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let c = init
    function increment(){
        c++
        return c
    };

    function decrement(){
        c--
        return c
    }

    function reset(){
        c = init
        return c
    }

    return{
        increment,
        decrement, 
        reset
    }
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            filteredArr.push(arr[i])
        };
    };

    return filteredArr;
};

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for (let i = 0; i < nums.length; i++){
        init = fn(init, nums[i]);
    }

    return init;
};


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        functions.reduceRight((total,op)=>{
            total= op(x);
            x=total;
        },x)
       
        return x;
    }
};

/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return arguments.length
};

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled = false;

    return function(...args){
        if (isCalled){
        return undefined
    }
    
        isCalled = true;
        return fn(...args)
    }
};

var addTwoPromises = async function(promise1, promise2) {
    let a = await promise1
    let b= await promise2

    return a + b
};

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(r => setTimeout(r, millis));
}

var cancellable = function(fn, args, t) {
    const cancelFn = function (){
      clearTimeout(timer);
  };
  const timer = setTimeout(()=>{
      fn(...args)
  }, t);
  return cancelFn ;
};

var cancellable = function(fn, args, t) {
    fn(...args);
    
    let id = setInterval(() => {
        fn(...args);
    },t);

    let cancelFn = () => clearInterval(id);

    return cancelFn;
};

var isEmpty = function(obj) {
    if(Object.entries(obj).length === 0){
        return true
    }
    return false
};

var chunk = function(arr, size) {
    let result = []
    for(i=0; i<arr.length; i+=size) {
        result.push(arr.slice(i, i+size))
    }
    return result
};

Array.prototype.last = function() {
    let len = this.length
    if (len === 0){
        return -1
    }
    return this[len-1]
};

var sortBy = function(arr, fn) {
    function swap(a, b) {
        return (fn(a) < fn(b)) ? -1 : 1
    }

    return arr.sort(swap)
};

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc,num) => acc + num,0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}


class Calculator {
    constructor(value) {
      this.result = value;
    }
    add(value) {
      this.result += value;
      return this;
    }
  
    subtract(value) {
      this.result -= value;
      return this;
    }
  
    multiply(value) {
      this.result *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error('Division by zero is not allowed');
      }
      this.result /= value;
      return this;
    }
  
    power(value) {
      this.result = Math.pow(this.result, value);
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }