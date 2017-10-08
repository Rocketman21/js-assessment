exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    function getList(data, dirName) {
      let result = [];
      let files = getDirObject(data, dirName);

      for (file of files) {
        if (typeof file === 'object') { // если file - это каталог
          result = result.concat(getList(file));
        } else {
          result.push(file);
        }
      }

      return result;
    }

    function getDirObject(data, dirName) {
      if (!dirName || data.dir === dirName) return data.files;
      
      for (value of data.files) {
        if (typeof value === 'object') {
          return getDirObject(value, dirName);
        }
      }
    }

    return getList(data, dirName);
  },

  permute: function(arr) {
    let temp = [];
    let answer = [];

    function permute() {
      let item;

      for (let i = 0; i < arr.length; i++) {
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) {
          permute();
        } else {
          answer.push(temp.slice());
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return permute();
  },

  fibonacci: function(n) {
    function fib(n) {
      switch (n) {
        case 0:
          return 0;
        case 1:
          return 1;
        default:
          return fib(n - 1) + fib(n - 2);
      }
    }

    return fib(n);
  },

  validParentheses: function(n) {
    function nPair(n) {
      let result = [];

      if (n == 0) return [''];
  
      for (let i = 0; i < n; ++i) {
        let lefts = nPair(i);
        let rights = nPair(n - i - 1);

        for (let l = 0; l < lefts.length; ++l) {
          for (let r = 0; r < rights.length; ++r) {
            result.push("(" + lefts[l] + ")" + rights[r]);
          }
        }
      }
  
      return result;
    }

    return nPair(n);
  }
};
