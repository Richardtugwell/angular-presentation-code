angular.module('app', []);

function MainCtrl () {

    this.title = 'Angular Templates'; //This becomes the model, along with any other properties

    this.alertText = function(text) {
        alert("The title is " + text);
    }
}

angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
