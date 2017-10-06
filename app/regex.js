exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /(\D)\1/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiouyAEIOUY]$/g.test(str);
  },

  captureThreeNumbers: function(str) {
    const result = /\d{3,3}/.exec(str);

    return result ? result[0] : false;
  },

  matchesPattern: function(str) {
    return /^(\d{3,3}-){2,2}\d{4,4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$(\d+,?)(\d{3,3},?)*(\.\d{2,2})?$/.test(str);
  }
};
