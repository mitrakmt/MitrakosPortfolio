'use strict';

var app = angular
  .module('PortfolioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'toaster',
    'ngMaterial',
    'ngMdIcons'

  ])
  .constant('FURL', 'https://mitrakosportfolio.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
