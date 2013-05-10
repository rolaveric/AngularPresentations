# Presentation 7 - Nested Routing with ui-router
Central messages:
* URL routing removes the 'on load' work from controllers
* ui-router fixes the short-comings of the native $routeProvider service, by:
** providing a hierarchical structure for declaring 'states'.
** providing named views.
## Presentation Structure
* Short intro - AngularJS can do URL routing
** "What's that?": Different URL loads (or 'routes' to) different template and controller, as well as resolving dependencies
* Demonstrate $routeProvider based code
** Demo provided version
*** Click link, URL changes, and vice-versa
*** Different templates are loaded
** Showcase code
*** Work is done in module.config()
*** 'resolve' lets us provide dependencies to controllers based on the route
*** No hierarchy means lots of duplication
*** Problem of artificially nesting templates with ng-include
* Introduce ui-router
** Uses the concept of a Finite State Machine.
** Allows nested states and nested ui-view directives.
* Update $routeProvider code to use $stateProvider
** Include library
** Breakup routes into states
** Breakup templates to use 'ui-view'
## Links
* [ui-router Github](https://github.com/angular-ui/ui-router)
* [ui-router Wiki Overview](https://github.com/angular-ui/ui-router/wiki)
* [Finite State Machine wikipedia](http://en.wikipedia.org/wiki/Finite-state_machine)