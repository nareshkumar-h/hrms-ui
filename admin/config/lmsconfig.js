lmsApp.config(function ($routeProvider) {
	$routeProvider
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
});