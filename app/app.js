'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
	'ngRoute',
	'moviecat.in_threaters',
	'moviecat.coming_soon',
	'moviecat.top250',
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_threaters/1'});
}]);
