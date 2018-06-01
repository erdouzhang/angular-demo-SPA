(function (angular) {
	'use strict';
	// 创建正在热映模块
	var module = angular.module('moviecat.in_threaters', [
		'ngRoute',
		'moviecat.services.http'
	]);
	// 配置控制模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_threaters/:page', {
			templateUrl: 'in_threaters/view.html',
			controller: 'InThreatersController'
		});
	}]);

	//提供数据
	module.controller('InThreatersController', [
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
			var douBanApiAddress = "https://api.douban.com/v2/movie/in_theaters";
			$scope.message = "";
			/*$http.jsonp(douBanApiAddress).then(function (res) {
				if(res.status == 200) {
					$scope.subjects = res.data.subjects;
				} else {
					$scope.message = "请求数据错误" + res.statusText;
				}
			},function (error) {
				$scope.message = "请求数据错误" + error.statusText;
			});*/
           /* $http.get('/app/data/in_threats.json').then(function (res) {
               if(res.status == 200) {
                  $scope.subjects = res.data.subjects;
			   } else {
				   $scope.message = "请求数据错误" + res.statusText;
			   }
			},function (error) {
                 $scope.message = "请求数据错误" + error.statusText;
			});*/
			HttpService.jsonp(douBanApiAddress,{
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
