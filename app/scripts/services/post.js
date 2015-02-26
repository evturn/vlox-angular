'use strict';
/* global app:true */
/* exported app */

app.factory('Post', function($resource) {
	return $resource('https://vlox.firebaseio.com/posts/:id.json');
});