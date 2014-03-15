// Scope safety closure
(function () {
	var mod = angular.module('MyApp.controllers', []);

	/**
	 * Handles the state change events
	 */
	mod.controller('AppCtrl', ['$scope', '$rootScope',
		function ($scope, $rootScope) {
			$scope.loading = true;
			$rootScope.$on('$stateChangeStart', function () {
				$scope.loading = true;
			});
			$rootScope.$on('$stateChangeSuccess', function () {
				$scope.loading = false;
			});
			$rootScope.$on('$stateChangeError', function () {
				$scope.loading = false;
			});
		}
	]);

	mod.controller('OrdersCtrl', ['$scope', 'orders',
		function ($scope, orders) {
			$scope.orders = orders;
		}
	]);

	mod.controller('OrderCtrl', ['$scope', 'order',
		function ($scope, order) {
			$scope.order = order;
		}
	]);

	mod.controller('OrderEditCtrl', ['$scope', 'order',
		function ($scope, order) {
			$scope.order = order;
		}
	]);

	mod.controller('ItemCtrl', ['$scope', 'item',
		function ($scope,item) {
			$scope.item = item;
		}
	]);
})();