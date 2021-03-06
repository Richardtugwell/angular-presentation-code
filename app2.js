angular.module('app', []);

// MainCtrl.js
function MainCtrl () {

    // Our model
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

angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
