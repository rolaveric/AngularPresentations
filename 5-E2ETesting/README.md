# Presentation 5 - Creating a static E2E rig

Demonstrates how to create a static E2E rig using ngMockE2E's $httpBackend

## Points to discuss

* Basic setup
	* Create a 'myApp.dev' module to override configuration and include 'ngMockE2E'
	* Use $httpBackend in module.run() to setup fixed server responses
* Using ngmockE2E's $httpBackend
	* $httpBackend.when(method, urlRegex).respond(function (method, url, data, headers) {return \[status, data\]]});
	* $httpBackend.when().passThrough(): Good for partials, or if your backend is 'fixed'
	* Importance of being able to configure your URLs
* Advantages developing against E2E rig
	* Helps to keep Angular app decoupled from server implementation
	* Easier to take on the road: Development and demonstation
	* Necessary for E2E tests (unless you can rollback server data)
* E2E testing in Angular
	* Test runner controls browser and reports back on behaviour
	* Uses methods exposed by angular-scenarios.js
	* Limited number of events that can be triggered (Mostly 'click' and 'change')
		* Work around for triggering complex events: Doesn't truly represent browser behaviour

## Links
* [AngularJS E2E Testing guide](http://docs.angularjs.org/guide/dev_guide.e2e-testing)
* [ngMockE2E.$httpBackend documentation](http://docs.angularjs.org/api/ngMockE2E.$httpBackend)