amsApp.config(function ($routeProvider) {
	$routeProvider
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
		});
});
