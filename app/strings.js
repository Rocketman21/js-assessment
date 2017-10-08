exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let result = str[0];
    let count = 1;

    for (let i = 1; i < str.length; i++) {
      if (str[i-1] === str[i]) {
        count++;

        if(count <= amount) {
          result += str[i];
        }
      } else {
        result += str[i];
        count = 1;
      }
    }

    return result;
  },

  wordWrap: function(str, cols) {
    let arr = str.split(' ');
    let colCount = 0; // запоминает длину всех предыдущих слов и пробелов, не образовавших колонку
    let result = arr.map((item, i) => {
      if (i === arr.length - 1) return item;

      colCount += item.length + 1;

      if (item.length >= cols || colCount >= cols || item.length + arr[i+1].length + 1 >= cols) {
        colCount = 0;
        return item + '\n';
      } else {
        return item + ' ';
      }
    });

    return result.join('');
  },

  reverseString: function(str) {
    return [...str].reverse().join('');
  }
};
