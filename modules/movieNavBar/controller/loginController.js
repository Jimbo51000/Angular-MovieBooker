


movieNavApp.controller('LoginCntrl',function($scope,$uibModal,$log,$rootScope){

	//handle the login  and signup clicks
	$scope.login = function(){
		var modalInstance = $uibModal.open({
			animation:true,
			templateUrl:'/modules/movieNavBar/view/mylogin.html',
			controller: 'LoginModalCtrl',
			size: 'lg',

		});
		//callback is returned when the modal is oked or closed
		modalInstance.result.then(function (user) {
			$rootScope.user = user;
			// $rootScope.hasModalClosed =function(){
			// 	return $rootScope.modalClosed;
			// };
			if(user.name == 'jimmy' && password == 'jimmy'){
				alert('hi '+user.name+' '+user.password);
			}
			else{
				alert('wrong');
			}
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
