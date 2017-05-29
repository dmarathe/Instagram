angular.module('instagram.controllers.comments', [])
    .controller('commentsController', ['$scope', 'postFactory', 'commentsBatchCount' , 
        function($scope, postFactory, commentsBatchCount){
		var currenCommentBatchNum = 0;
		$scope.loadLastCommentsBatch = function() {
			$scope.comments = $scope.data.comments;
			$scope.visibleComments = $scope.comments.slice(-commentsBatchCount);
			$scope.showMoreOption = $scope.comments.length > commentsBatchCount;
		}

		$scope.loadMoreComments = function() {
			currenCommentBatchNum++;
			$scope.visibleComments = $scope.comments.slice(-commentsBatchCount * currenCommentBatchNum);
			if ($scope.visibleComments.length === $scope.comments.length) {
                // displayed all comments hide show more option
				$scope.showMoreOption = false;
				currenCommentBatchNum = 0;
			}
		}

		$scope.submit = function(data){
			if(data.new_comment !== ''){
				postFactory.addComment(data.id,data.new_comment);
				$scope.loadLastCommentsBatch();
				// reset message
				data.new_comment = '';
			}
		}

        $scope.loadLastCommentsBatch();

	}]);
