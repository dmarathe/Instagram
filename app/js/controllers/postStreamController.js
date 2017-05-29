angular.module('instagram.controllers.poststream', [])
    .controller('postController', ['$scope', 'userFactory', 'postFactory' , function($scope,userFactory,postFactory){
		$scope.data = postFactory.getData();
		//$scope.comment = { msg: ''} ; 
		$scope.getTimeSince = function(time) {
			return postFactory.getTimeSince(time);
		},
		$scope.changeLike = function(index){
			var selectedPost = $scope.data[index];
			(selectedPost.user_has_liked === true) ? selectedPost.likes.count-- : selectedPost.likes.count++;
			selectedPost.user_has_liked = !(selectedPost.user_has_liked);
		}

	}]);