/*
JS file for the booking module initialization when the list item is clicked in the main movie list
*/


movieBookingApp.controller('BookingItemCntrl',function($scope,$uibModal,$log,$rootScope){


	$scope.setcolor = function(){
		console.log('set');
		$scope.hovercolor = {backgroundcolor: 'lightblue'};
	};
	$scope.resetcolor = function(){
		console.log('reset');
		$scope.hovercolor = {backgroundcolor: 'white'};
	};

	$scope.remove = function(movie){
		$scope.currMovie = movie ; 
		//delegate to higher controller
		$scope.$emit('removeMovie', movie);
		
	}
	$scope.open = function(movie){
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl:'/modules/movieBooking/view/mymodal.html',
			controller: 'BookingModalInstanceCtrl',
			size: 'lg',
			resolve: {
				//passing value to modal as service
				movie: function () {
					return movie;
				}
			}
		});
		//callback is returned when the modal is oked or closed
		modalInstance.result.then(function (selectedMovie) {
			$rootScope.selectedMovie = selectedMovie;
			$rootScope.hasModalClosed =function(){
				return $rootScope.modalClosed;
			};
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});

	}


});
