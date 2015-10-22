angular.module('app', []);

// MainCtrl.js
function MainCtrl () {
    this.name = 'Angular Templates';
}

angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
