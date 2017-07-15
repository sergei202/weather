angular.module('weather', [])
	.controller('WeatherCtrl', function($scope,$http) {
		$scope.lookup = function() {
			console.log('lookup() zipcode=', $scope.zipcode);
			$http.get('/zipcode/'+$scope.zipcode).then(function(res) {
				console.log('location =', res.data);
				$scope.location = res.data;

				$http.get('/weather/'+res.data.latitude+'/'+res.data.longitude).then(function(res) {
					console.log('weather = ', res.data);
					$scope.weather = res.data;
				});
			});
		};
	});
