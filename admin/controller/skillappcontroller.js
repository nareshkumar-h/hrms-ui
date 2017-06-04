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

myApp.controller('UserSkillController' , function($scope,$http ){

    var userStr=localStorage.getItem("LOGGED_IN_USER");
	$scope.currentUser=JSON.parse(userStr);
    var userId = $scope.currentUser.id;

     $scope.init = function () {
        $scope.loadMySkills(userId);
        $scope.loadRatings();
    }

    $scope.loadMySkills = function ( userId ) {
        var url = baseUrl + "/userskills/users/" + userId;
        $http.get(url).then( function(response){
            //console.log(JSON.stringify( response) );
            $scope.userskills = response.data;          
            $scope.categories = _.unique( _.pluck(response.data,"categoryName")); 
        });

    };

     $scope.loadRatings = function ( ) {
        var url = baseUrl + "/ratings";
        $http.get(url).then( function(response){
            //console.log(JSON.stringify( response) );
            $scope.ratings = response.data;           
        });

    };

    $scope.assignSkills = function(){
        var url = baseUrl + "/userskills/assignskills/" + userId;
        $http.get(url).then( function(response){
            //console.log(JSON.stringify( response) );   
            $scope.init();         
        });
    }

    $scope.updateSkills = function(id,ratingId){
        console.log("Update Skills : " + id + "," + ratingId );
        var url = baseUrl + "/userskills/updateratings/" + id + "/" +ratingId ;
        console.log(url);
        $http.post(url).then( function(response){            
            $scope.init();
        });
    }

});

myApp.controller('SkillUpdateController' , function($scope,$http ){
    console.log("inside controller");
 $http.get(baseUrl+'/skills').then(function(response){
     $scope.skills=response.data;

 })
console.log($scope.skills);
$http.get(baseUrl+'/ratings').then(function(response){
     $scope.ratings=response.data;
 })

 $scope.updateSkills=function(){
     
 }
 
   $scope.categories = function() {
  return _.chain($scope.skills)
    .pluck('category')
	.pluck('name')
    .flatten()
    .unique()
    .value();
};
initController();

function initController(){
	var userStr=localStorage.getItem("LOGGED_IN_USER");
	$scope.currentUser=JSON.parse(userStr);
}
   

});

