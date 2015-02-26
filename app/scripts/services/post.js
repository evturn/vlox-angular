'use strict';

app.factory('Post', function($resource) {
	return $resource('https://https://vlox.firebaseio.com/posts/:id.json');
});