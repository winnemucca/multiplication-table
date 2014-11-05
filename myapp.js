angular.module('myApp',[])
	.controller('MultiplicationCtrl',function($scope,$attrs) {
		function populateNumbers(x) {
			var numbers - [];
			for(var i=0; i<x; i++) {
				numbers[i] = i +1;
			};
			return numbers;
		}
		$scope.numberLimit = $attrs.initialNumberLimit || 10;
		$scope.numbers = populateNumbers($scope.numberLimit);

		
		// $scope.compute = function(a,b) {
		// 	return a *b;
		// };
	});




	// $attrs is key/value map of all the attributes present on the elent where the ng-controller was placed.