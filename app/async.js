exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, rejcect) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success: (msg) => {
          let names = msg.people.sort((a, b) => {
            let compA = a.name.toUpperCase();
            let compB = b.name.toUpperCase();
            
            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
          })
         .map((item) => {
            return item.name;
          });

          resolve(names);
        }
      });
    });
  }
};
