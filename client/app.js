var Myapp = angular.module('Myapp', ['ngRoute']);

(function() {

    Myapp.config(function ($routeProvider){
        $routeProvider
        .when('/',
        {
          controller: "friendController",
          templateUrl: 'partials/dashboard.html'

        })
        .otherwise({ redirectTo: '/'});
    })
}());
