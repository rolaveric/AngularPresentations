// Scope safety closure
(function () {
	var mod = angular.module('MyApp', ['MyApp.controllers', 'MyApp.services']);

	// Define the States and URL routing
	mod.config(['$routeProvider',
		function ($routeProvider) {
			// Providers

			var ordersProvider = ['myDataService',
				function (myDataService) {
					return myDataService.get('orders');
				}
			];

			var itemsProvider = ['myDataService',
				function (myDataService) {
					return myDataService.get('items');
				}
			];

			// Routes

			/**
			 * Orders: /orders
			 * Displays a list of all orders
			 */
			var ordersRoute = {
				controller: 'OrdersCtrl',
				templateUrl: 'partials/orders.html',
				resolve: {
					'orders': ordersProvider
				}
			};

			/**
			 * Order: /orders/:orderId
			 * Displays a particular order, along side the list of all orders
			 */
			var orderRoute = {
				controller: 'OrderCtrl',
				templateUrl: 'partials/orders.order.html',
				resolve: {
					'orders': ordersProvider
				}
			};

			/**
			 * Edit Order: /orders/:orderId/edit
			 * Displays an edit form for a particular order, along side the list of all orders
			 */
			var orderEditRoute = {
				controller: 'OrderEditCtrl',
				templateUrl: 'partials/orders.order.edit.html',
				resolve: {
					'orders': ordersProvider
				}
			};

			/**
			 * Order: /items/:itemId
			 * Displays a particular item
			 */
			var itemRoute = {
				controller: 'ItemCtrl',
				templateUrl: 'partials/item.html',
				resolve: {
					'items': itemsProvider
				}
			};

			$routeProvider.when('/orders', ordersRoute);
			$routeProvider.when('/orders/:orderId', orderRoute);
			$routeProvider.when('/orders/:orderId/edit', orderEditRoute);
			$routeProvider.when('/items/:itemId', itemRoute);
			$routeProvider.when('', {redirectTo: '/orders'});
			$routeProvider.when('/', {redirectTo: '/orders'});
			$routeProvider.otherwise('/orders');
		}
	]);

	mod.run(['$rootScope', '$route', '$routeParams', '$location',
		function ($rootScope, $route, $routeParams, $location) {
			$rootScope.$route = $route;
			$rootScope.$routeParams = $routeParams;
			$rootScope.$location = $location;
		}
	]);
})();