/*
Main App Js where all the modules wiil be defined
*/

//define all the modules here in the PRESSCRIBED  ORDER //

var 	movieBookingApp 	= 	angular.module('movieBookingApp',['ui.bootstrap']);
var 	movieNavApp 		= 	angular.module('movieNavApp',['ui.bootstrap']);

//main app
var rootApp = angular.module('rootApp',['movieBookingApp','movieNavApp']);