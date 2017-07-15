angular.module('weather', [])
	.controller('WeatherCtrl', function($scope,$http) {

		$scope.lookup = function() {
			console.log('lookup() zipcode=', $scope.zipcode);
			$http.get('/weather/'+$scope.zipcode).then(function(res) {
				console.log('weather and location =', res.data);
				$scope.location = res.data.location;
				$scope.weather = res.data.weather;
			}, function(err) {
				console.log('Whoa error!  ', err);
				$scope.location = null;
				$scope.weather = null;
			});
		};
	});
