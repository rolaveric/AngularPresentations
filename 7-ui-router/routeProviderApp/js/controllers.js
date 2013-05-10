// Scope safety closure
(function () {
	var mod = angular.module('MyApp.controllers', []);

	/**
	 * Handles the route change events
	 */
	mod.controller('AppCtrl', ['$scope', '$rootScope',
		function ($scope, $rootScope) {
			$scope.loading = true;
			$rootScope.$on('$routeChangeStart', function () {
				$scope.loading = true;
			});
			$rootScope.$on('$routeChangeSuccess', function () {
				$scope.loading = false;
			});
			$rootScope.$on('$routeChangeError', function () {
				$scope.loading = false;
			});
		}
	]);

	mod.controller('OrdersCtrl', ['$scope', 'orders',
		function ($scope, orders) {
			$scope.orders = orders;
		}
	]);

	mod.controller('OrderCtrl', ['$scope', '$routeParams', 'orders',
		function ($scope, $routeParams, orders) {
			$scope.orders = orders;
			$scope.order = _.find(orders, function (order) {return order.orderId == $routeParams.orderId;});
		}
	]);

	mod.controller('OrderEditCtrl', ['$scope', '$routeParams', 'orders',
		function ($scope, $routeParams, orders) {
			$scope.orders = orders;
			$scope.order = _.find(orders, function (order) {return order.orderId == $routeParams.orderId;});
		}
	]);

	mod.controller('ItemCtrl', ['$scope', '$routeParams', 'items',
		function ($scope, $routeParams, items) {
			$scope.items = items;
			$scope.item = _.find(items, function (item) {return item.itemId == $routeParams.itemId;});
		}
	]);
})();