
/*
JS file for controlling the booking view modal instance and 
*/
movieBookingApp.controller('BookingModalInstanceCtrl', function ($scope, $uibModalInstance,$rootScope, movie) {

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
