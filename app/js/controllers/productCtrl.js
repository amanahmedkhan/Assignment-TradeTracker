var app = angular.module('mainApp');

// Product Controller Start
	app.controller('ProductCtrl', function ProductCtrl($scope, $routeParams, $http) {
		'use strict';

		var urlBase = 'http://pf.tradetracker.net/?aid=1&type=xml&encoding=utf- 8&fid=251713&categoryType=2&additionalType=2&limit=10';
		$scope.products = [];

		$scope.searchProduct = function(productURL) {
	      if(productURL != undefined){
	    	getProducts(productURL);
	      } else {
	      	$scope.products = [];
	      }
	   	}

		getProducts(urlBase);

		function LoaderVisibility(visibility){
			$scope.loader = visibility;
		}

		function getProducts(url){
			// Show Loader
			LoaderVisibility(true);

		    $http.get(url).then(function(response) {
				var x2json = new X2JS();
				var outputJSON = x2json.xml_str2json(response.data);

            	$scope.products = outputJSON.products.product;
				// console.log(outputJSON.products.product);

				// Hide Loader
				LoaderVisibility(false);
				$scope.statusVisibility = false;
			},
		    function (error){
		      $scope.status = 'Nothing Found';
		      $scope.statusVisibility = true;
		      // Hide Loader
				LoaderVisibility(false);
			});
		}
	});
// Product Controller Start