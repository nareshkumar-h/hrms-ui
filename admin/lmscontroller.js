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
myApp.controller('LeaveStatusController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/leavestatus";
        $http.get(url).then( function(response){            
            $scope.leavestatus = response.data;           
        });

    };

});

myApp.controller('LeaveController' , function($scope,$http ){

     $scope.init = function () {
        $scope.leavetypes();
        $scope.getAllLeaves();
    }

     $scope.leavetypes = function ( ) {
        var url = baseUrl + "/leavetypes";
        $http.get(url).then( function(response){            
            $scope.leavetypes = response.data;           
        });

    };

    $scope.getAllLeaves = function ( ) {
        var url = baseUrl + "/leaves";
        $http.get(url).then( function(response){            
            $scope.leaves = response.data;           
        });

    };

});

