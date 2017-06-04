skillApp.config(function ($routeProvider) {
	$routeProvider
		.when("/categories", {
			templateUrl: "partials/categories/list.html",
			controller: "CategoryController"
		})
		.when("/skills", {
			templateUrl: "partials/skills/list.html",
			controller: "SkillController"
		})
		.when("/myskills", {
			templateUrl: "partials/skills/myskills.html",
			controller: "UserSkillController"
		})
		.when("/userskills", {
			templateUrl: "partials/skills/update.html",
			controller:"SkillUpdateController"
		})
		.when("/ratings", {
			templateUrl: "partials/ratings/list.html",
			controller: "RatingController"
		});
});
