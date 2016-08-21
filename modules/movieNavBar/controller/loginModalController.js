



// the login modal controller
movieNavApp.controller('LoginModalCtrl', function ($scope, $uibModalInstance,$rootScope) {

	

	$scope.$on('modal.closing',function(event,data){
		$rootScope.modalClosed= true;
	});
	$scope.submit = function () {
		$scope.loggeduser={
			name : $scope.user.name,
			password : $scope.user.password
		};
		$uibModalInstance.close($scope.loggeduser);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
