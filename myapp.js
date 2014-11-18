angular.module('myApp',[])
	.controller('MultiplicationCtrl',function($scope,$attrs) {
		function populateNumbers(x) {
			var numbers = [];
			for(var i=0; i<x; i++) {
				numbers[i] = i +1;
			};
			return numbers;
		}
		// $scope.numbers = populateNumbers($scope.numberLimit);


		$scope.compute = function(a,b) {
			return a *b;
		}
		$scope.$watch('numberLimit', function(limit) {
			$scope.numbers = populateNumbers(limit);
		});
		$scope.numberLimit = $attrs.initialNumberLimit || 10;

	});
	// var x = function(string) {
	// 	return string;
	// }
	// console.log(x("What \nis \tlove?"));
	// console.log(x("origin\\destination"));


	// $attrs is key/value map of all the attributes present on the elent where the ng-controller was placed.