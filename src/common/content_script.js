// ==UserScript==
// @name Own Your Comments
// @include http://*
// @include https://*
// @require URI.js
// @require jquery-1.8.3-min.js
// ==/UserScript==

var OwnYourComments = (function () {
	// Private
	// Utility functions
	function getOption(key, callback) {
		kango.invokeAsync('kango.storage.getItem', key, callback);
	}
	
	/**
	 * Expands {name} templates with the replace.name, or the empty string
	 */
	function expandTemplates(postURL, replace) {
		for (var template in replace) {
        	if (replace[template] == undefined)
            	continue;
            postURL = postURL.split('{' + template + '}')
            	.join(encodeURIComponent(replace[template].replace(/^\s+|\s+$/g, '')));
		}
		
		// replace any unreplaced templates with nothing
		postURL = postURL.replace(/\{[a-zA-Z0-9_-]+\}/gi, '');
		
		return postURL;
	}
	
	// Content manipuation functions
	/**
	 * Embeds an Indieweb comments box before Disqus or Livefyre iframes
	 */
	function embedCommentsBox(url) {
		$('iframe[data-disqus-uid]').before(function () {
			var eID = $(this).attr('data-disqus-uid');
			
			var el = $('iframe').attr('id', 'own-your-comments-embed-' + eID);
			
			var properties = {
				url: window.location.href
			};
			
			getOption('commentEmbedURL', function (url) {
				$('#' + eID).attr('src', expandTemplates(url, properties));
			});
			
			return el;
		});
	}
	
	// Public
	return {
		
	};
}());

$(document).ready(function () {
	
});