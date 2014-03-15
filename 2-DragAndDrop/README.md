# Presentation 2 - Drag and Drop
An introduction to the Drag and Drop events supported in HTML5, and an example of how you can implement it in AngularJS.

Also introduces the [Angular UI](http://angular-ui.github.com/) library, specifically the ui-event directive.
## Points to discuss
* Drag and Drop Events
	* The importance of event.preventDefault()
	* Different Types
		* dragstart - On source: Use to state 'What is being dragged?'
		* dragend - On source: Use to adjust original model. eg. Has the original object been moved to another list?
		* dragenter - On target: Triggered once when entering area
		* dragover - On target: Triggered on 'mousemove' over area
		* dragleave - On target: Triggered once when leaving area
		* drop - On target: Triggered on 'mouseup' on the area
	* The 'dataTransfer' object
		* On jQuery events is found under "originalEvent"
		* setData("application/x-mydata", dataString) - Use to state what you're dragging
		* effectAllowed - Use to state what can be done with what you're dragging
		* types - Use to check if what's being dragged is relevant
		* getData("application/x-mydata") - Use to retrieve data on drop
		* dropEffect - Use to state whether the effect on the dragged item was a 'copy', 'move', 'link', or 'none
* AngularJS Code
	* ui-event directive
	* 2-way data binding does the rest

## Links
* [Mozilla Developer Network - Drag Operations](https://developer.mozilla.org/en-US/docs/DragDrop/Drag_Operations)
* [Angular UI](http://angular-ui.github.com/)
* [ui-event source](https://github.com/angular-ui/angular-ui/blob/master/modules/directives/event/event.js)