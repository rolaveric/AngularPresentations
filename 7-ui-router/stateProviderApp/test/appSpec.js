
describe('stateProviderApp', function () {
	var states = {};

	beforeEach(module('ui.state', function ($stateProvider) {
		states = {};
		$stateProvider.state = function (name, config) {
			states[name] = config;
		};
	}, 'MyApp'));

	describe('ordersProvider(myDataService)', function () {
		var ordersProvider;

		beforeEach(inject(function () {
			ordersProvider = states.orders.resolve.orders[1];
		}));

		it('Gets orders from myDataService', function () {
			var myDataService = {
				get: jasmine.createSpy().andReturn('test')
			};
			expect(ordersProvider(myDataService)).toEqual('test');
			expect(myDataService.get).toHaveBeenCalledWith('orders');
		});
	});
});