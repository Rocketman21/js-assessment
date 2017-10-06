exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1

    // 2й способ:

    // let bin = num.toString(2);
    // return Number(bin[bin.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let result = num.toString(2);

    while (result.length < 8) {
      result = '0' + result;
    }

    return result;
  },

  multiply: function(a, b) {
    let precision = lengthAfterDot(a) + lengthAfterDot(b);
    let result = a * b;

    function lengthAfterDot(num) {
      let str = num.toString();

      return str.substr(str.indexOf('.') + 1).length;
    }
    
    return Number(result.toFixed(precision));
  }
};
