myApp.controller('StudentAttendanceController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/studentattendance";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.studentattendances = response.data;           
        });

    };

});