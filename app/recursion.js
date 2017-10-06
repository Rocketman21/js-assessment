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
    // let results = [];

    // for (i in arr) {
    //   for (let j = 0; j < (arr.length - 1) * 2; j++) {
    //     if (j & 1) {
    //       arr = [arr[0], arr[2], arr[1], arr[3]];
    //     } else {
    //       arr = [arr[0], arr[1], arr[3], arr[2]];
    //     }

    //     results.push(arr);

    //     if (j === 5) arr = [arr[Number(i)]]
    //   }
    // }

    // console.log(results);
    // return results;
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

  }
};
