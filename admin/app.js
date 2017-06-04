var myApp=angular.module('myapp',['skillapp','lmsapp','tmsapp', 'emsapp','amsapp','ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);
var emsApp=angular.module('emsapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);
var lmsApp=angular.module('lmsapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);
var tmsApp=angular.module('tmsapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);
var skillApp=angular.module('skillapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);
var amsApp=angular.module('amsapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);

console.log("Angular Loaded");
myApp.constant('config', {
	baseUrl: "http://localhost:5000"
});

myApp.config(function ($routeProvider) {
	$routeProvider.when("/login", {
		templateUrl: "partials/auth/login.html",
		controller: "AuthController"
	})
		.when("/register", {
			templateUrl: "partials/auth/register.html",
			controller: "AuthController"
		})
		.otherwise({
			redirectTo: '/login'
		});
});

myApp.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('');
}]);

myApp.run(['$rootScope', '$location', '$http',
	function ($rootScope, $location, $http) {


		$rootScope.$on('$locationChangeStart', function (event, next, current) {
			// redirect to login page if not logged in

			var currentUrl = next;
			console.log("routechange: next=" + next);
			console.log("routechange: current= " + current);
			console.log("User Before:" + $rootScope.LOGGED_IN_USER);
			if (!$rootScope.LOGGED_IN_USER) {
				var userObj = localStorage.getItem("LOGGED_IN_USER");
				$rootScope.LOGGED_IN_USER = userObj != null ? JSON.parse(userObj) : null;
			}
			console.log("User :" + $rootScope.LOGGED_IN_USER);
			if (!$rootScope.LOGGED_IN_USER) {
				$location.path('/login');
			}
			else {
				//$location.path(next);
			}
		});
	}]);




