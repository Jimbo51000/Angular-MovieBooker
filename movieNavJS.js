// JavaScript angular module for movie navigation control

//adding the movie nav module with ui dependency
var movieNavApp = angular.module('movieNavApp',['ui.bootstrap']);

movieNavApp.controller('LoginInitCntrl',function($scope,$uibModal,$log){

	//handle the login  and signup clicks
	$scope.login = function(){
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl:'login.html',
			controller: 'LoginCtrl',
			size: 'lg',
			resolve: {
				//passing value to modal as service
				movie: function () {
					return movie;
				}
			}
		});
		//callback is returned when the modal is oked or closed
		modalInstance.result.then(function (user) {
			$rootScope.user = user;
			// $rootScope.hasModalClosed =function(){
			// 	return $rootScope.modalClosed;
			// };
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	}

	$scope.signUp = function () {
		
	}
	//write code for initializing the modal 

	//code for the login parse in another controller for the login modal

	//code for the callback

});


// the login modal controller
movieNavApp.controller('LoginCtrl', function ($scope, $uibModalInstance,$rootScope, movie) {

	$scope.selectedMovie = {
		name: movie.name
	};


	$scope.$on('modal.closing',function(event,data){
		$rootScope.modalClosed= true;
	});
	$scope.selectedMovie.seats=0;
	$scope.ok = function () {
		$uibModalInstance.close($scope.selectedMovie);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
