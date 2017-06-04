emsApp.config(function ($routeProvider) {
	$routeProvider
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
		});
});