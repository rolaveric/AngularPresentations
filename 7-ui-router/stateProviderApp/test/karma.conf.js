basePath = '';

files = [
	JASMINE,
	JASMINE_ADAPTER,
	'../../../lib/angular.min.js',
	'../../../lib/angular-mocks.js',
	'../../../lib/angular-ui.min.js',
	'../../../lib/angular-ui-states.min.js',
	'../../../lib/underscore-min.js',

	// App files
	'../js/*.js',

	// Test files
	'appSpec.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
	outputFile: 'unit.xml',
	suite: 'unit'
};

reporters = ['dots'];

// report which specs are slower than 500ms
reportSlowerThan = 500;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;
