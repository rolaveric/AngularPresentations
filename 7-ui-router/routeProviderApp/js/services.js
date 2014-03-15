// Scope safety closure
(function () {
	var mod = angular.module('MyApp.services', []);

	var dataFixtures = {};
	function getData(type, identifier) {
		var result = null;
		switch (type) {
			case 'orders':
				result = dataFixtures.orders;
				break;
			case 'order':
				result =  _.find(dataFixtures.orders, function (order) {return order.orderId == identifier;});
				break;
			case 'items':
				result = dataFixtures.items;
				break;
			case 'item':
				result =  _.find(dataFixtures.items, function (item) {return item.itemId == identifier;});
				break;
		}
		return result;
	}

	// Data handling service
	mod.factory('myDataService', ['$q', '$cacheFactory', '$timeout', '$location', '$routeParams',
		function ($q, $cacheFactory, $timeout, $location, $routeParams) {
			// Local reference to the requested promises, to avoid duplicates
			var dataCache = $cacheFactory('MyApp.data');

			var service = {};

			/**
			 * Generates promises for retrieving data,
			 * and always takes at least 2 seconds to resolve any promise
			 *
			 * @param type {String}
			 * @param identifier {String}
			 * @returns {*}
			 */
			service.get = function (type, identifier) {
				// If this data has not already been requested, go get it
				if (!dataCache.get(type + "-" + identifier)) {
					// Create a deferred object
					var deferred = $q.defer();

					// Return the data in 2 seconds
					$timeout(function () {
						console.log('$location.path(): ' + $location.path());
						console.log('identifier: ' + angular.toJson(identifier));
						var data = getData(type, identifier);
						deferred.resolve(data);
					}, 2000);

					// Keep a reference to the promise
					dataCache.put(type + "-" + identifier, deferred.promise);
				}

				// Return the promise
				return dataCache.get(type + "-" + identifier);
			};

			return service;
		}
	]);

	dataFixtures = {
		orders: [
			{
				orderId: '101',
				customer: 'John Smith',
				address: '100 Test Street, Sydney',
				items: [
					{itemId: '201', quantity: 1},
					{itemId: '203', quantity: 2}
				]
			},
			{
				orderId: '102',
				customer: 'Jane Doe',
				address: '102 Test Street, Sydney',
				items: [
					{itemId: '201', quantity: 30}
				]
			}
		],
		items: [
			{itemId: '201', stock: 100, name: 'Angular for dummies'},
			{itemId: '202', stock: 10, name: 'Angular In Action'},
			{itemId: '203', stock: 0, name: 'Angular: The Good Parts'}
		]
	};
})();