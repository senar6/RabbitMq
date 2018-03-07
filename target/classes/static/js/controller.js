var app = angular.module('app', []);
app.controller('postcontroller', function($scope, $http, $location) {
	 $scope.submitForm = function () {
		    var url = $location.absUrl() + "producer";
	        var param = {};
	        param.empName = $scope.firstname;
	        param.empId = $scope.lastname;
	        var ack_param = JSON.stringify(param);
			console.log("URL:"+url);
			console.log("Param:"+ack_param);
			
	        $http.post(url, ack_param).
			then(function mySuccess(response) {
			    $scope.temp = angular.fromJson(response.data);
			    if ($scope.temp.success) {
			        alert("Successfully Acknowledged")
			    }
			    else {
			        alert("Acknowledgement Failed... Please try again..!");
			    }

			}, function myError(response) {
			    console.log(response.statusText);
			});
	    }

	$scope.submitForms = function(){
		var url = $location.absUrl() + "producer";
		
		var config = {
				headers: {
			        'Content-Type': 'application/json', /*or whatever type is relevant */
			        'Accept': 'application/json' /* ditto */
			    }
		}
		var data = {
				empName: $scope.firstname,
				empId: $scope.lastname
        };
		
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = response.data;
		}, function error(response) {
			$scope.postResultMessage = "Error with status: " +  response.statusText;
		});
		
		$scope.firstname = "";
		$scope.lastname = "";
	}
});

app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function(){
		var url = $location.absUrl() + "getallcustomer";
		
		$http.get(url).then(function (response) {
			$scope.response = response.data
		}, function error(response) {
			$scope.postResultMessage = "Error with status: " +  response.statusText;
		});
	}
});