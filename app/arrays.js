exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = 0;

    for (value of arr) {
      sum += value;
    }

    return sum;
  },

  remove: function(arr, item) {
    let newArr = arr.filter((value) => {
      return value !== item;
    });

    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    let cleanArr = this.remove(arr, item)

    for (i in cleanArr) {
      arr[i] = cleanArr[i];
    }

    arr.length = cleanArr.length;
    
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)

    return arr
  },

  count: function(arr, item) {
    let count = 0;

    for(value of arr) {
      if (value === item) count++;
    }

    return count;
  },

  duplicates: function(arr) {
    let count = [];
    let newArr = [];

    for (value of arr) {
      count[value] = (count[value] || 0) + 1;
    }

    for (i in count) {
      if (count[i] > 1) {
        newArr.push(Number(i));
      }
    }

    return newArr;
  },

  square: function(arr) {
    let newArr = [];

    for (value of arr) {
      newArr.push(value * value);
    }

    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    let indexes = [];
    
    for (i in arr) {
      if (arr[i] === target) {
        indexes.push(i);
      }  
    }

    return indexes;
  }
};
