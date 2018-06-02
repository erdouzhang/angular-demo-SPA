/**
 * Created by erdou on 2018/6/2.
 */
'use strict';
(function (angular) {
	// 创建正在热映模块
	var module = angular.module('moviecat.movie_details', [
		'ngRoute',
		'moviecat.services.http'
	]);
	// 配置控制模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/details/:id', {
			templateUrl: 'movie_details/view.html',
			controller: 'movieDetailsController'
		});
	}]);

	module.controller('movieDetailsController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function ($scope, $route, $routeParams, HttpService, AppConfig) {
			// 返回一个电影对象
			$scope.movie = {};
			$scope.loading = true;
			// 获取当前电影的id
			var id = $routeParams.id;
			//var apiAdress = AppConfig.detailsApiAddress+id;
			// 发送请求获取数据（跨域请求）
			HttpService.jsonp(AppConfig.detailsApiAddress+id, {}, function (data) {
				$scope.movie = data;
				$scope.loading = false;
				//重新获取
				$scope.$apply();
			});
		}
	]);
})(angular);
