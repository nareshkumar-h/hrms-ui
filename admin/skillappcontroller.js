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