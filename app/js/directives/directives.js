// As directives are simple just create one file
angular.module('instagram.custom.directives', [])
    .directive('postCard', function(){
		 return {
						restrict: 'E',
						templateUrl: '../templates/post-card.html'
 		 };
	})
	.directive('comments', function(){
		return {
					restrict: 'E',
					templateUrl: '../templates/comments.html'
		};
	})
	.directive('comment', function(){
		return {
					restrict: 'E',
					templateUrl: '../templates/comment.html'
		};
	})
	.directive('selfPostCard', function(){
		return {
					restrict: 'E',
					templateUrl: '../templates/self-post-card.html'
		}
	})
	.directive('header',function(){
		return {
				restrict: 'E',
				templateUrl: '../templates/header.html'	
		}
	});