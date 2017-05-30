angular.module('Instagram', [
	'ngRoute',
	// Controllers
	'instagram.controllers.comments',
	'instagram.controllers.poststream',
	'instagram.controllers.user',
	// Services
	'instagram.services.postService',
	'instagram.services.userService',
	// Directives
	'instagram.custom.directives'
	])
	.constant('commentsBatchCount',3)
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: '../templates/post-stream.html',
				controller:'postController'
			})
			.when('/user', {
				templateUrl: '../templates/user.html',
				controller:'userController'
			})
			.otherwise('/')		
	}]);