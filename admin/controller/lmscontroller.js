myApp.controller('HolidayController' , function($scope,$http ){

     $scope.init = function () {
        $scope.fetchHolidays();
    }

    $scope.fetchHolidays = function ( ) {
        var url = baseUrl + "/holidays";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.holidays = response.data;           
        });

    };

});

myApp.controller('LeaveTypeController' , function($scope,$http ){

     $scope.init = function () {
        $scope.fetchLeaveTypes();
    }

    $scope.fetchLeaveTypes = function ( ) {
        var url = baseUrl + "/leavetypes";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.leavetypes = response.data;           
        });

    };

});
myApp.controller('LeaveStatusController' , function($scope,$http ){

     $scope.init = function () {
        $scope.fetchLeaveStatus();
    }

    $scope.fetchLeaveStatus = function ( ) {
        var url = baseUrl + "/leavestatus";
        $http.get(url).then( function(response){            
            $scope.leavestatus = response.data;           
        });

    };

});

myApp.controller('LeaveController' , function($scope,$http ){

     $scope.init = function () {
        $scope.fetchLeaveTypes();
       // $scope.getAllLeaves();
    }

     $scope.fetchLeaveTypes = function ( ) {
        var url = baseUrl + "/leavetypes";
        $http.get(url).then( function(response){            
            $scope.leavetypes = response.data;           
        });

    };

    $scope.applyLeave = function(){
        console.log("Apply Leaves:" + JSON.stringify($scope.leave));
    }

    $scope.getAllLeaves = function ( ) {
        var url = baseUrl + "/leaves";
        $http.get(url).then( function(response){            
            $scope.leaves = response.data;           
        });

    };

});

