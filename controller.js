var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {
	
	$scope.searchText = '';

	$scope.getUserData = function() {
		githubService.getUser($scope.searchText).then(function(res) {
			$scope.user = res;
			console.log(res);
		})
	};

});