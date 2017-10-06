exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    function f () {
      this.greeting = obj.greeting;
      this.name = obj.name;

      return fn();
    }

    return f();
  },

  functionFunction: function(str) {
    return function (str2) {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    let funcs = arr.map((item) => {
      return function () {
        this.value = item;
        return fn(this.value);
      };
    });

    return funcs;    
  },

  partial: function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    [...args] = arguments;
    return args.reduce((a, b) => a + b, 0)

    // способ без reduce:

    // let sum = 0;

    // for (value of arguments) {
    //   sum += value;
    // }

    // return sum;
  },

  callIt: function(fn) {
    [, ...args] = arguments;

    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    [, ...args1] = arguments;

    return function() {
      [...args2] = arguments;
      const args = args1.concat(args2);

      return fn.apply(this, args);
    }
  },

  curryIt: function(fn) {
    return a => b => c => fn (a, b, c);
  }
};
