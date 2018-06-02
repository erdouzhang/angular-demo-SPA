/**
 * Created by erdou on 2018/6/2.
 */
'use strict';

(function (angular) {

	// 自定义指令
	angular.module('moviecat.directives.auto_focus', [])
		.directive('autoFocus', [
			'$location',
			function ($location) {
				// var path = $location.path();  // /in_theaters/1
				return {
					restrict: 'A',
					link: function ($scope, iElm, iAttrs, controller) {
						// 将path对象挂在到￥scope对象中
						$scope.$location = $location;
						$scope.$watch('$location.path()', function (now) {
							// 当path路径发生变化时执行，now是变化过后的值old是之前的值
							// 处理默认加载时处于激活状态
							var aLink = iElm.children().attr('href');
							//提取字符串匹配（正则表达式）
							var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');  // /in_theaters
							// console.log(type);
							if (now.startsWith(type)) {
								iElm.parent().children().removeClass('active');
								// 访问的是当前链接
								iElm.addClass('active');
							}

						});

						// console.log(iElm); 找到元素
						/*iElm.on('click', function () {
							//console.log(111);
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
							// 将该元素暴露出去(控制台打印测试)
							// window.iem = iElm;
						});*/
					}


				};
			}]);

})(angular);
