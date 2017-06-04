myApp.controller("MainController", function($rootScope, $scope, $location) {
    console.log("MainController Loaded");
   
   if ( $rootScope.IS_LOGGED_IN ) {
        location.path("/employees");
   }
   else 
   {  
        var userStr = localStorage.getItem("LOGGED_IN_USER");
        var user = userStr != null ? JSON.parse(userStr) : null;
        $rootScope.LOGGED_IN_USER = user;
        $rootScope.IS_LOGGED_IN = true;
        if ( user != null ){
            $location.path("/employees");
        }
   }

});

myApp.controller("AuthController", function($rootScope, $scope, $http, $location, ) {
    

    var userStr = localStorage.getItem("LOGGED_IN_USER");
    var user = userStr != null ? JSON.parse(userStr) : null;
    $rootScope.LOGGED_IN_USER = user;

    $scope.login= function (){
         $scope.login_error = false;
         console.log("Login Rest API" , JSON.stringify($scope.user) );
         var url = baseUrl + "/auth/login";
          $http.post(url, $scope.user).then( function(response){
            console.log(JSON.stringify(response));
            var user = response.data;
            if ( user != null && user!= "") {            
                $rootScope.LOGGED_IN_USER = user;
                $rootScope.IS_LOGGED_IN = true;
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user) );
                $location.path("/employees");
                 
            }
            else
            {
                $rootScope.IS_LOGGED_IN = false;
                $scope.login_error = true;
            }
        });     
         
    }
    
    $scope.logout= function (){
        localStorage.removeItem("LOGGED_IN_USER");
        $rootScope.LOGGED_IN_USER=null;
    }
});

myApp.controller("EmployeeController" , function($scope, $http) {

    $scope.init = function () {
        $scope.loadActiveEmployees();
    }

    $scope.loadActiveEmployees = function ( ) {
        var url = baseUrl + "/employees/status/active";
        $http.get(url).then( function(response){            
            $scope.employees = response.data;            
           // console.log(JSON.stringify(response.data));
        });

    };

     $scope.loadAllEmployees = function ( ) {
        var url = baseUrl + "/employees/all";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.employees = response.data;            
           // console.log(JSON.stringify(response.data));
        });

    };

    $scope.loadResignedEmployees = function(){
         var url = baseUrl + "/employees/status/resigned";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.employees = response.data;            
           // console.log(JSON.stringify(response.data));
        });

    };

    $scope.loadDataToUpdateDesignations = function() {
        $scope.loadAllEmployees();
        $scope.loadDesignations();

    }

    $scope.loadDesignations = function() {
         var url = baseUrl + "/designations/all";
         $http.get(url).then( function(response){
            var designations = response.data;
            var depts = _.uniq(_.pluck(designations, 'departmentName'));           
            $scope.departments = depts;
            $scope.designations = designations;
            //console.log(JSON.stringify(sortedDesignations));
        });
    }

    $scope.updateDesignation = function ( empId, designationId  ) {
        console.log("Update Designation:" + designationId + "-" + empId );
         var url = $config.baseUrl + "/employees/" + empId +"/updateDesignation?designation_id=" + designationId;
         $http.post(url).then( function(response){
            //$scope.loadDataToUpdateDesignations();
        });
    }    
});


myApp.controller("DepartmentController" , function($scope, $http  ) {

    $scope.init = function () {
        $scope.loadAllDepartments();
    }

    $scope.loadAllDepartments = function ( ) {
        var url = baseUrl + "/departments";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.departments = response.data;            
            console.log(JSON.stringify(response.data));
        });

    };

    
});


myApp.controller("DesignationController" , function($scope, $http ) {

    $scope.init = function () {
        $scope.loadAllDesignations();
    }

    $scope.loadAllDesignations = function ( ) {
        var url = baseUrl + "/designations/all";
        $http.get(url).then( function(response){
         //   console.log(response);
            var designations = response.data;
            $scope.designations = designations;              
            var deptNames = _.unique( _.pluck(designations,'departmentName'));               
            $scope.deptNames = deptNames;
            console.log(JSON.stringify(deptNames));
        });

    };
});

myApp.controller('EmployeeDashboardController' , function($scope,$http){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/dashboard/employees";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.employeeDashboardData = response.data;            
            console.log(JSON.stringify(response.data));
        });

    };

});
myApp.controller('DepartmentDashboardController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/dashboard/departments";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.departmentDashboardData = response.data;            
            console.log(JSON.stringify(response.data));
        });

    };

});
myApp.controller('EmployeeHierarchyController' , function($scope,$http ){

     $scope.init = function () {
        $scope.loadDasboardData();
    }

    $scope.loadDasboardData = function ( ) {
        var url = baseUrl + "/employeehierarchy";
        $http.get(url).then( function(response){
            console.log(response);
            $scope.employeehierarchy = response.data;                        
        });

    };

});