angular.module('instagram.controllers.comments', [])
  .controller('ModalDemoCtrl', function($rootScope, $scope, $log, $uibModal) {

    //$scope.items = ['item1', 'item2', 'item3'];

    //$scope.animationsEnabled = true;

    $scope.open = function(size, template) {
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: template || 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size
        });

      /*modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });*/
    };
