angular.module('desafiosquid', ['ngAnimate', 'ngRoute', 'ngResource', 'ja.qr'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'TagsController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});
