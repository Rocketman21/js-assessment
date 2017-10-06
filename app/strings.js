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
    // console.log(str.charAt(cols));
    let [...arr] = str;
    let spaces = [];
    let space = 0;

    while (true) {
      space = str.indexOf(' ', space + 1);

      if (space === -1) break;

      spaces.push(space);
      space += 1;
    }
console.log('spaces', spaces)
    for (i in spaces) {
      i = Number(i);

      console.log(cols, spaces[i], cols - spaces[i])
      console.log(cols, spaces[i+1], spaces[i+1] - cols, cols - spaces[i] < spaces[i + 1] - cols)

      if (spaces[i] > cols || cols - spaces[i] < spaces[i + 1] - cols ) {
        // console.log(spaces[i + 1] - cols, cols - spaces[i] <= spaces[i + 1] - cols)
        arr[spaces[i]] = '\n';
      } else {
        arr[spaces[i + 1]] = '\n';
      }
    }

    console.log(arr.join(''));
    return arr.join('');
    // if (str.charAt(cols) !== ' ')
 
    // 12345-
    // abcdef
    // abcde
    // abc
    // def
  
    // abc
    // abc
    // abc
  
    // a b c
    // def
  },

  reverseString: function(str) {
    return [...str].reverse().join('');
  }
};
