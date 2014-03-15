# Presentation 3 - Canvas
An introduction to the Canvas API from HTML5, and an example of how you can implement it in AngularJS.
## Points to discuss
* Requirements
	* Take an existing image
	* Capture drawing instructions over that image
		* Need to know exactly how big the image is
	* Instructions passed to web service
* Canvas
	* Basic usage - Drawing rectangles
		* Create a '2d' context
		* Set style: fillStyle(), strokeStyle(), etc.
		* Apply drawing: fillRect(), strokeRect(), clearRect()
* AngularJS Code
	* DOM manipulation = Directive
	* element().bind() to 'load' event on img to know when ready
		* Trick to determining the naturalWidth using new Image()
	* element().bind() to mousedown, mousemove, and mouseup events to capture drawing
	* Use scope.$watch() to redraw when instructions change

## Links
* [CSS Tricks - Get an image's native width](http://css-tricks.com/snippets/jquery/get-an-images-native-width/)
* [MDN - Canvas tutorial](https://developer.mozilla.org/en-US/docs/HTML/Canvas/Tutorial)
* [W3Schools - Canvas](http://www.w3schools.com/tags/ref_canvas.asp)