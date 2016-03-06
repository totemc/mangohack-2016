var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('appController', function($scope){
	this.title = 'Placeholder Title';

	this.value1 = {
		value: 0
	}

	this.value2 = {
		value: 0
	}
});
