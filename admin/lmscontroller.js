myApp.controller('HolidayController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/holidays";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.holidays = response.data;           
        });

    };

});

myApp.controller('LeaveTypeController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/leavetypes";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.leavetypes = response.data;           
        });

    };

});