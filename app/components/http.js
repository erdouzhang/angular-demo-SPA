/**
 * Created by erdou on 2018/6/1.
 */

/**
 * Created by erdou on 2018/6/1.
 */
'use strict';
(function (angular) {
	var http = angular.module('moviecat.services.http', []);
	http.service('HttpService', [
		'$window',
		'$document',
		function ($window, $document) {
			this.jsonp = function (url, data, callback) {

				var fnSuffix = Math.random().toString().replace('.', '')

				var cbFunName = 'my_json_back_' + fnSuffix;

				$window[cbFunName] = callback;
				var queryString = url.indexOf('?') == -1 ? '?' : '&';
				for (var key in data) {
					queryString += key + '=' + data[key] + '&';
				}
				queryString += 'callback=' + cbFunName;
				var scriptElement = $document[0].createElement('script');

				scriptElement.src = url + queryString;

				$document[0].body.appendChild(scriptElement)
			};
		}]);


})(angular);
