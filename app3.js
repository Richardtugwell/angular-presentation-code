angular.module('app', []);

// MainCtrl.js
function MainCtrl () {

    // Our model
    this.gender = 'all';
    this.contacts = [
        {
            "firstname": "Marge",
            "lastname": " Simpson",
            "gender": "female",
            "salary": "0"
        },
        {
            "firstname": "Homer",
            "lastname": " Simpson",
            "gender": "male",
            "salary": "100"
        },
        {
            "firstname": "Bart",
            "lastname": " Simpson",
            "gender": "male",
            "salary": "1"
        },
        {
            "firstname": "Fred",
            "lastname": " Flintstone",
            "gender": "male",
            "salary": "50000"
        },
        {
            "firstname": "Wilma",
            "lastname": "Flintstone",
            "gender": "female",
            "salary": "10000"
        },
        {
            "firstname": "Barney",
            "lastname": "Rubble",
            "gender": "male",
            "salary": "20000"
        },
        {
            "firstname": "Betty",
            "lastname": "Rubble",
            "gender": "female",
            "salary": "20000"
        }
    ]
}

function filterByGender () {
  return function (items, gender) {
    var filtered = [];
    if (gender == 'all') { return items };
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.gender == gender) {
        filtered.push(item);
      }
    }
    return filtered;
  };
};


angular
    .module('app')
    .controller('MainCtrl', MainCtrl)
    .filter('filterByGender', filterByGender);
