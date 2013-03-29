# Presentation 7 - Using ui-router for Nested Routing
Demonstrates how the $stateProvider/$state service from the UI-Router project improves over the native $routesProvider/$routes service
## Points to discuss
* Intro to $routeProvider/$route
	* Show limitation of single ng-view
* Intro to $stateProvider/$state
	* Finite State Machine crash course: Finite number of states, and the possible transitions between them
	* Project Goal: provide a set of Angular services and directives for
		* Managing application UI via a hierarchical state machine abstraction
		* Manging views declaratively based on this state machine
		* Providing bi-directional mapping between the state and $location *where this is desirable*: Not every state has to map to a URL, and URLs can map to actions other than state transitions
		* Defining application navigation in terms of the state machine (eg. transitionTo(newState)), instead of via manually generated links.
		* Allowing application logic to be bound to state transitions (eg. onEnter() and onLeave()) hooks, as well as giving the application the ability to prevent state transitions on a case-by-case basis.
	* Simple example
		* Define ui-view in HTML
		* Define state using $stateProvider.state() with a template
		* Use $state.transitionTo() to trigger that state, loading the template into the ui-view
	* Options for defining a state
		* template: along with templateUrl and templateProvider
		* controller: provider name or function
		* resolve: Just like $routeProvider and $dialog, you declare the provider by their string name, function, or promise
			* Explain the usefulness of the $stateChangeStart, $stateChangeSuccess, and $stateChangeError events for progress indicators and error handling
		* onEnter and onExit: Has access to 'resolve' values
	* Nesting states
		* Declare state hierarchy by infering by name (eg. contacts and contacts.list) or specify with 'parent' property
		* ui-view inside parent state's template is then used to render the child state's template
	* Multiple Named views
		* States can have multiple views. eg. table data view, graph view, and controls view
		* Declared as the 'views' object with their own names
		* View names then map to ui-view="name"
		* View models can also target specific ui-view directives in specific state templates using the "viewName@statusName" syntax
	* URL Routing
		* States can declare a 'url' property that they apply to, similar to $routes.
		* Changing URL to 'index.html/contacts' will change to 'contacts' state, and vice-versa when calling transitionTo('contacts')
		* $stateParams work like $routeParams but also support regex: /contacts/{contactId:\[0-9\]{1,8}}
## Links
* [ui-router Github](https://github.com/angular-ui/ui-router)
* [ui-router Wiki Overview](https://github.com/angular-ui/ui-router/wiki)
* [Finite State Machine wikipedia](http://en.wikipedia.org/wiki/Finite-state_machine)