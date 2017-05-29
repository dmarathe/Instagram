angular.module('instagram.controllers.user', [])
    .controller('userController', ['$scope', 'userFactory', 'postFactory' , function($scope,userFactory,postFactory){
		$scope.user = userFactory.getUserData();
		$scope.number_posts = postFactory.getNoOfPosts();
		$scope.data = postFactory.getData();
		//$scope.number_comments = $scope.data.comments.length;

	}])