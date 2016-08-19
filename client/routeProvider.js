var app = angular.module('app', ['ngRoute', 'ngMessages'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/loginPartial.html'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboardPartial.html'
    })
    .when('/topic', {
        templateUrl: 'partials/topicPartial.html'
    })
    .when('/showTopic/:id', {
        templateUrl: 'partials/showTopicPartial.html'
    })
    .when('/answer/:id', {
        templateUrl: 'partials/answerPartial.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})
