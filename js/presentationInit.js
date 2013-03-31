(function () {
	Reveal.initialize({
		// Display controls in the bottom right corner
		controls: true,

		// Display a presentation progress bar
		progress: true,

		// Push each slide change to the browser history
		history: false,

		// Enable keyboard shortcuts for navigation
		keyboard: true,

		// Enable the slide overview mode
		overview: true,

		// Vertical centering of slides
		center: true,

		// Loop the presentation
		loop: false,

		// Change the presentation direction to be RTL
		rtl: false,

		// Number of milliseconds between automatically proceeding to the
		// next slide, disabled when set to 0, this value can be overwritten
		// by using a data-autoslide attribute on your slides
		autoSlide: 0,

		// Enable slide navigation via mouse wheel
		mouseWheel: false,

		// Apply a 3D roll to links on hover
		rollingLinks: true,

		// Transition style
		transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme

		// Optional libraries used to extend on reveal.js
		dependencies: [
			// Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
			{ src: '../lib/reveal/lib/js/classList.js', condition: function () {
				return !document.body.classList;
			} },

			// Syntax highlight for <code> elements
			{ src: '../lib/reveal/plugin/highlight/highlight.js', async: true, callback: function () {
				hljs.initHighlightingOnLoad();
			} },

			// Zoom in and out with Alt+click
			{ src: '../lib/reveal/plugin/zoom-js/zoom.js', async: true, condition: function () {
				return !!document.body.classList;
			} },

			// Speaker notes
			{ src: '../lib/reveal/plugin/notes/notes.js', async: true, condition: function () {
				return !!document.body.classList;
			} }

			// Remote control your reveal.js presentation using a touch device
			//{ src: '../lib/reveal/plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
		],

		// The "normal" size of the presentation, aspect ratio will be preserved
		// when the presentation is scaled to fit different resolutions. Can be
		// specified using percentage units.
		width: 960,
		height: 700,

		// Factor of the display size that should remain empty around the content
		margin: 0.1,

		// Bounds for smallest/largest possible scale to apply to content
		minScale: 0.2,
		maxScale: 1.0
	});
})();