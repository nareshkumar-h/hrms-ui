myApp.controller('CollegeController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/colleges";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.colleges = response.data;           
        });

    };

});

myApp.controller('TrainingController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/trainings";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.trainings = response.data;           
        });

    };

});


myApp.controller('TrainerController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/trainers";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.trainers = response.data;           
        });

    };

});

myApp.controller('BatchController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/batches";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.batches = response.data;           
        });

    };

});