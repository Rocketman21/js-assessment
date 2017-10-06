exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    const {name, greeting} = obj; 
    const c = {
      sayIt: fn,
      name, 
      greeting
    };

    return c.sayIt();
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let arr = [];

    for (key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      arr.push(`${key}: ${obj[key]}`);  
    }

    return arr;
  }
};
