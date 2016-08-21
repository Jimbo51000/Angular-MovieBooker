/*
Movie List Controller with list action controls
later add the animations
*/


//list initializer
movieBookingApp.controller('MovieListCntrl',function($scope,$rootScope){

	//remove movie from list
	 $scope.$on('removeMovie', function(event, movie) {
	 	$scope.movies.removeValue("name",movie.name);
	 	event.stopPropagation();
	 	console.log(movie.name+' is removed ');
	 });

	 //movie add function
	 $scope.add = function(){
		if($scope.newMovie !=null){
			$scope.movies.push({name:$scope.newMovie});
			$scope.newMovie=null;
		}
	}
});


