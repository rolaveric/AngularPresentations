# Presentation 4 - Ajax File Uploads
An introduction on how to perform Ajax file uploads, and an example of how easy it is in AngularJS.
## Points to discuss
* Requirements
	* File, FileList, and FileReader ('filereader' in modernizr)
	* XML HTTP Request 2 ('xhr2' in modernizr, or look for 'window.FormData')
* Getting the files
	* 'change' event from file inputs: event.target.files
	* Drag'n'Drop: event.originalEvent.dataTransfer.files
		* Remember event.preventDefault() and event.stopPropagation()
* Uploading the files
	* $http({data: file, header: {"Content-Type": file.type, "X-Filename": file.name}})

## Links
* [MDN - Using files from web applications](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications)
* [Modernizr - filereader test source](https://github.com/Modernizr/Modernizr/blob/master/feature-detects/file/api.js)
* [Modernizr - xhr2 test source](https://github.com/Modernizr/Modernizr/blob/master/feature-detects/network/xhr2.js)