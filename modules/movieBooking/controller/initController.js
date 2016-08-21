/*
Movie List Controller with initializtion
later add the animations
*/


//list initializer
movieBookingApp.controller('InitLoadCntrl',function($scope,$rootScope){
	//more data content
	//get request from the server to initialise the data for list
	$scope.movies = [{name:'suicide squad'},{name:'Interstellar'},{name:'Captain America'},{name:'Batman'}
	];

	$scope.animationsEnabled = true;
});


