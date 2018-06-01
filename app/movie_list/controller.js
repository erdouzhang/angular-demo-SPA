(function (angular) {
	'use strict';
	// 创建正在热映模块
	var module = angular.module('moviecat.movie_list', [
		'ngRoute',
		'moviecat.services.http'
	]);
	// 配置控制模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}]);

	module.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function ($scope,$route, $routeParams, HttpService) {

			$scope.loading = true;  // 开始加载
			$scope.subjects = [];
			$scope.total = 0;
			var count = 10;
			$scope.currentPage = parseInt($routeParams.page); //获取当前页数
			var start = ($scope.currentPage - 1) * count;
			$scope.pagesTotal = 0;
			$scope.title = "";
			//API接口地址
			// var douBanApiAddress = 'https://api.douban.com/v2/movie/'+$routeParams.category;
			$scope.message = "";

			HttpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.category,{
				start:start,
				count:count
			},function (data) {
				$scope.subjects = data.subjects;
				$scope.title = data.title;
				$scope.totalCount = data.total;
				$scope.pagesTotal = Math.ceil($scope.totalCount/count);
				$scope.loading = false;
				$scope.$apply();
				// $apply作用就是让指定的表达式重新同步
			});

			/*上一页 下一页*/
			$scope.goPage = function (page) {
				if (page >= 1 && page <= $scope.pagesTotal) {
					$route.updateParams({page: page});
				}
			};


		}
	]);

})(angular);
