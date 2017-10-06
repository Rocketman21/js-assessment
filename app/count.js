exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let current = start;

    console.log(current);

    let interval = setInterval(() => {
      if (current < end) {
        console.log(++current);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return {
      cancel: function () {
        clearInterval(interval);
      }
    };
  }
};