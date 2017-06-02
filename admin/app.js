var myApp=angular.module('myapp',['ui.bootstrap','ngRoute', 'ngAnimate', 'ngSanitize','angularUtils.directives.dirPagination']);

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
		.when("/departments", {
			templateUrl: "partials/departments/list.html",
			controller: "DepartmentController"
		})
		.when("/designations", {
			templateUrl: "partials/designations/list.html",
			controller: "DesignationController"
		})
		.when("/myprofile", {
			templateUrl: "partials/employees/myprofile.html",
			controller: "EmployeeController"

		})
		.when("/employees", {
			templateUrl: "partials/employees/list.html",
			controller: "EmployeeController"
		})
		.when("/employeehierarchy", {
			templateUrl: "partials/employeehierarchy/list.html",
			controller: "EmployeeHierarchyController"
		})
		.when("/categories", {
			templateUrl: "partials/categories/list.html",
			controller: "CategoryController"
		})
		.when("/skills", {
			templateUrl: "partials/skills/list.html",
			controller: "SkillController"
		})
		.when("/userskills", {
			templateUrl: "partials/skills/update.html",
			controller:"SkillUpdateController"
		})
		.when("/ratings", {
			templateUrl: "partials/ratings/list.html",
			controller: "RatingController"
		})
		.when("/leavetypes", {
			templateUrl: "partials/leavetypes/list.html",
			controller: "LeaveTypeController"
		})
		.when("/applyleave", {
			templateUrl: "partials/leave/applyleave.html",
			controller: "LeaveController"
		})
		.when("/leaves", {
			templateUrl: "partials/leaves/list.html",
			controller: "LeaveController"
		})
		.when("/holidays", {
			templateUrl: "partials/holidays/list.html",
			controller: "HolidayController"
		})
		.when("/leavestatus", {
			templateUrl: "partials/leavestatus/list.html",
			controller: "LeaveStatusController"
		})
		.when("/trainers", {
			templateUrl: "partials/trainers/list.html",
			controller: "TrainerController"
		})
		.when("/trainings", {
			templateUrl: "partials/trainings/list.html",
			controller: "TrainingController"
		})
		.when("/colleges", {
			templateUrl: "partials/colleges/list.html",
			controller: "CollegeController"
		})
		.when("/batches", {
			templateUrl: "partials/batches/list.html",
			controller: "BatchController"
		})
		.when("/studentattendance", {
			templateUrl: "partials/studentattendance/list.html",
			controller: "StudentAttendanceController"
		})
		.when("/employeesdesignations", {
			templateUrl: "partials/employees/updateDesignations.html",
			controller: "EmployeeController"
		})
		.when("/employees/resigned", {
			templateUrl: "partials/employees/resigned_list.html",
			controller: "EmployeeController"
		})
		.when("/employees_dashboard", {
			templateUrl: "partials/dashboard/employee_dashboard.html",
			controller: "EmployeeDashboardController"
		})
		.when("/departments_dashboard", {
			templateUrl: "partials/dashboard/department_dashboard.html",
			controller: "DepartmentDashboardController"
		}).otherwise({
			redirectTo: '/employeesdesignations'
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
				// $location.path(current.lastIndexOf("/"));
			}
		});
	}]);




