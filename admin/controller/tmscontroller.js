myApp.controller('TicketController' , function($scope,$http ){


    var userStr=localStorage.getItem("LOGGED_IN_USER");
	$scope.currentUser=JSON.parse(userStr);
    var userId = $scope.currentUser.id;

     $scope.init = function () {
        $scope.loadTickets();
    }

    $scope.loadTickets = function ( ) {
        var url = baseUrl + "/tickets";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.tickets = response.data;           
        });

    };

     $scope.loadMyTickets = function ( ) {
        var url = baseUrl + "/tickets/users/"+ userId;
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.tickets = response.data;           
        });

    };

      $scope.loadAssignedTickets = function ( ) {
        var url = baseUrl + "/tickets/assigned/"+ userId;
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.tickets = response.data;           
        });

    };

});