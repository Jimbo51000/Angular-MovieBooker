/*
Java script for movie body module and its associated controllers

*/

var   movieBodyApp = angular.module('movieBodyapp',['ui.bootstrap']);

//list initializer
movieBodyApp.controller('InitLoadCntrl',function($scope,$rootScope){
	//more data content
	$scope.movies = [{name:'suicide squad'},{name:'Interstellar'},{name:'Captain America'},{name:'Batman'}
	];

	$scope.animationsEnabled = true;
});

//add movie controller , must be for admin only
movieBodyApp.controller('AddMovieCntrl',function($scope,$rootScope){
	//add code here

	$scope.add = function(){
		if($scope.newMovie !=null){
			$scope.movies.push({name:$scope.newMovie});
			$scope.newMovie=null;
		}
	}
});

movieBodyApp.controller('MovieClickCntrl',function($scope,$uibModal,$log,$rootScope){


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
		$scope.movies.removeValue("name",movie.name);
	}
	$scope.open = function(movie){
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl:'mymodal.html',
			controller: 'ModalInstanceCtrl',
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


movieBodyApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$rootScope, movie) {

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



