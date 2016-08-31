angular.module('mainApp', ['ngRoute'])

// Product Module Start
   .config(function ($routeProvider, $locationProvider){
   	'use strict';
   	
   	$routeProvider
      .when('/',{
         templateUrl:'index.html',
         controller:'ProductCtrl'
      })
      .otherwise({
         redirectTo:'/'
      });
   });
// Product Module End