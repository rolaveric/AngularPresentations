# Presentation 6 - Using the Angular UI Bootstrap $dialog service
Demonstrates how to use the $dialog service provided by the Angular UI Bootstrap library
## Points to discuss
* Intro to Bootstrap Modals
* Intro to Angular UI Bootstrap library
	* Explain difference between with and without templates
* Using $dialog.messageBox(title, message, buttons)
	* Defining buttons: {result: objectReturned, label: stringDisplayed, cssClass: cssClass}
	* Need to call open(): Can be defined once then passed around and opened as required
	* Use "then(function (result) {})" to react to the user's selection.
* Using $dialog.dialog(options)
	* options.template or options.templateUrl
	* options.controller: String name or actual function
	* options.resolve: Works similar to $routeProvider where you're defining the provider functions, which can be promises
	* preloading templates with $http() and $templateCache.put()

## Links
* [Twitter Boostrap Modal](http://twitter.github.com/bootstrap/javascript.html#modals)
* [Angular UI Bootstrap](http://angular-ui.github.com/bootstrap/)
* [$dialog service source](https://github.com/angular-ui/bootstrap/tree/master/src/dialog)