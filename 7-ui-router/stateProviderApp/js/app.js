// Scope safety closure
(function () {
	var mod = angular.module('MyApp', ['MyApp.controllers', 'MyApp.services', 'ui.state']);

	// Define the States and URL stating
	mod.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider,$urlRouterProvider) {
			// Providers

			var ordersProvider = ['myDataService',
				function (myDataService) {
					return myDataService.get('orders');
				}
			];
			
			var orderProvider = ['$stateParams', 'myDataService',
				function ($stateParams, myDataService) {
					return myDataService.get('order', $stateParams.orderId);
				}
			];

			var itemProvider = ['$stateParams', 'myDataService',
				function ($stateParams, myDataService) {
					return myDataService.get('item', $stateParams.itemId);
				}
			];

			// URL Routes - Sends to the 'root' state by default, or if the ID is incomplete
			$urlRouterProvider.when('', '/orders').when('/', '/orders');

			// States

			/**
			 * Orders: /orders
			 * Displays a list of all orders
			 */
			var ordersState = {
				name: 'orders',
				url: '/orders',
				resolve: {
					'orders': ordersProvider
				},
				views: {
					"@": {
						controller: 'OrdersCtrl',
						templateUrl: 'partials/orders.html'
					}
				}
			};

			/**
			 * Order: /orders/:orderId
			 * Displays a particular order
			 */
			var orderState = {
				name: 'orders.order',
				//parent: 'orders',
				url: '/:orderId',
				//params: ['orderId'],
				resolve: {
					'order': orderProvider
				},
				views: {
					"@orders": {
						controller: 'OrderCtrl',
						templateUrl: 'partials/orders.order.html'
					}
				}
			};

			/**
			 * Edit Order: No URL
			 * Displays an edit form for a particular order
			 */
			var orderEditState = {
				name: 'orders.order.edit',
				//parent: 'orders.order',
				//params ['orderId'],
				views: {
					"@orders": {
						controller: 'OrderEditCtrl',
						templateUrl: 'partials/orders.order.edit.html'
					}
				}
			};

			/**
			 * Order: /items/:itemId
			 * Displays a particular item
			 */
			var itemState = {
				name: 'item',
				url: '/items/:itemId',
				//params: ['itemId'],
				controller: 'ItemCtrl',
				templateUrl: 'partials/item.html',
				resolve: {
					'item': itemProvider
				}
			};

			$stateProvider.state('orders', ordersState);
			$stateProvider.state('orders.order', orderState);
			$stateProvider.state('orders.order.edit', orderEditState);
			$stateProvider.state('item', itemState);
		}
	]);

	mod.run(['$rootScope', '$state', '$stateParams', '$location',
		function ($rootScope, $state, $stateParams, $location) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.$location = $location;
		}
	]);
})();