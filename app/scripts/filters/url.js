'use strict';

app.filter('hostnameFromUrl', function() {
	return function(string) {
		var url = document.createElement('a');
		url.href = string;
		return url.hostname;
	};
});