angular.module('app', []);

// MainCtrl.js
function MainCtrl () {
    this.name = 'Template Demo Again';
    this.contacts = [
        {
            "firstname": "Richard",
            "lastname": "Tugwell",
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
        }
    ]
}

angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
