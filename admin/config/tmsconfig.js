tmsApp.config(function ($routeProvider) {
	$routeProvider
        .when("/tickets", {
			templateUrl: "partials/tickets/list.html",
			controller: "TicketController"
		})
		.when("/mytickets", {
			templateUrl: "partials/tickets/mytickets_list.html",
			controller: "TicketController"
		})
		.when("/assignedtickets", {
			templateUrl: "partials/tickets/assignedtickets_list.html",
			controller: "TicketController"
		})
		.when("/createTicket", {
			templateUrl: "partials/tickets/add.html",
			controller: "TicketController"
		});
});				
		