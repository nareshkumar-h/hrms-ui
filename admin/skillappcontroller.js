myApp.controller('CategoryController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/categories";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.categories = response.data;           
        });

    };

});
myApp.controller('SkillController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/skills";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.skills = response.data;           
        });

    };

});

myApp.controller('RatingController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/ratings";
        $http.get(url).then( function(response){
            console.log(JSON.stringify( response) );
            $scope.ratings = response.data;           
        });

    };

});