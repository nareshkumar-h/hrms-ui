myApp.controller('StudentAttendanceController' , function($scope,$http,$rootScope,$timeout ){

	$scope.getCollegeList = (function() {
		$http.get(baseUrl + '/colleges')
				.then(function(response) {
					$scope.collegeList = response.data;
					console.log($scope.collegeList);
				});
	});
	$scope.getCollegeList();
	$scope.batchList = [];
	$scope.$watch('user.college', function(newVal) {
			
		if(newVal){
		$scope.collegeId = newVal.id;
		
		$http.get(
				baseUrl + '/batches/colleges/'
						+ $scope.collegeId).then(
				function(response) {
					$scope.batchList = response.data;
					console.log($scope.batchList);
				});
		}
	});
	$scope.deptList = [];
	
			
	$scope.$watch('user.batch',function(newVal) {
					
						if(newVal){
						$scope.batchName = newVal.batchName;
						
						localStorage.setItem(
								"batchName",
								$scope.batchName);
						$scope.batchId = newVal.id;
						localStorage.setItem("batchId",
								$scope.batchId);
						
					
						
						$http.get(
								baseUrl
												+ '/trainings/batches/'
												+ $scope.batchId
												)
								.then(
										function(

										response) {
											$scope.dateList = response.data;
											$scope.totalDates = $scope.dateList.length;
											localStorage
													.setItem(
															"totalSession",
															$scope.totalDates);

										});
						}
					});
	
	
	$scope.showList = false;
	$scope.getStudentList = (function(user) {
		$rootScope.trainingId = user.date.id;
		$http.get(baseUrl +'/trainings/'
				+ $rootScope.trainingId
				).then(function(response) {

			$scope.trainingList = response.data;
			$rootScope.freeze=$scope.trainingList.freezed;
			console.log($rootScope.freeze);

		})
        
	

		$rootScope.trainingId = user.date.id;
		/*if (user.dept) {
			$scope.dept = user.dept.department;
		}
		
		localStorage.setItem("deptId", $scope.dept);*/
		$http
				.get(
						baseUrl
								+ '/studentattendance/trainings/'
								+ user.date.id)
				.then(
						function(response) {
							$rootScope.studentAllDeptList = response.data;
							console.log($rootScope.studentAllDeptList);
							
							$scope.deptNames = _
									.uniq(_
											.sortBy(_
													.pluck(
															$rootScope.studentAllDeptList,
															'departmentName')));
							$scope.firstDept=$scope.deptNames[0];
							
							$scope.studentAttendanceList=_.where($rootScope.studentAllDeptList, {departmentName: $scope.firstDept});
							console.log($scope.studentAttendanceList);
							

							

												if ($scope.studentAttendanceList.length == 0) {
													$scope.infoMessage = true;
													$scope.showList = false;
													$timeout(
															function() {
																$scope.infoMessage = false;
															},
															3000);
												} else {
													
													
												
																console.log($rootScope.freeze);
																if($rootScope.freeze===true)
																	{
																	$scope.disableUpdateButton=true;
																	$scope.showList = true;
																	$scope.showFreezeButton = true;
																	}
																else
																	{
																	$scope.disableUpdateButton=false;
																	$scope.showList = true;	
																	$scope.showFreezeButton = true;
																	}
																
															
												}

											

						});
		
		
		
	});
	$scope.showDept = function(dept) {
		$scope.studentAttendanceList=_.where($rootScope.studentAllDeptList, {departmentName: dept});
		console.log($scope.studentAttendanceList);
		if ($scope.studentAttendanceList.length == 0) {
			$scope.infoMessage = true;
			$timeout(
					function() {
						$scope.infoMessage = false;
						$scope.showList = false;
					},
					3000);
		} else {
			
			
		
						console.log($rootScope.freeze);
						if($rootScope.freeze===true)
							{
							$scope.disableUpdateButton=true;
							$scope.showList = true;
							$scope.showFreezeButton = true;
							}
						else
							{
							$scope.disableUpdateButton=false;
							$scope.showList = true;	
							$scope.showFreezeButton = true;
							}
						
					
		}
	}
	
	
	$scope.update = (function(u) {
		// var userStr = localStorage.getItem("LOGGED_IN_USER");
		//u.modifiedBy = localStorage.getItem("userId");
		//console.log(u.modifiedBy);
		console.log(JSON.stringify(u));
		
		
		
		$http
				.put(
						baseUrl
								+ '/studentattendance/updateAttendance',
						u)
						
				.then(
						function(response) {
							console.log("update");
							$scope.showDept(u.departmentName);
							
							/*$http
									.get(
											$scope.urlBase
													+ '/attendance/Student/batch/'
													+ $scope.batchId
													+ '/trainingDate/'
													+ $rootScope.trainingDate
													+ '/dept/'
													+ u.studentId.department)
									.then(
											function(
													response) {
												$scope.studentList = response.data;*/
												
												/*if(response.freeze===true)
												{
												console.log('true');
												$scope.disableUpdateButton=true;
												$scope.showList = true;
												$scope.showFreezeButton = true;
												}
											else
												{
												console.log('false');
												$scope.disableUpdateButton=false;
												$scope.showList = true;
												$scope.showFreezeButton = true;
												}*/
											//});
							
							$scope.successMessage = true;
							$timeout(
									function() {
										$scope.successMessage = false;
									}, 3000);
						});
	});
	

});