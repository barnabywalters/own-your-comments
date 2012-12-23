// ==UserScript==
// @name Own Your Comments
// @include http://*
// @include https://*
// @require jquery-1.8.3.min.js
// ==/UserScript==

var OwnYourComments = (function () {
    // Private
    var uniqIdCounter = 0;
    
    // Utility functions
    
    function uniq(prefix) {
    	uniqIdCounter ++;
    	return '' + prefix + uniqIdCounter;
    }
    
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
    function embedCommentsBox() {
        $('iframe[data-disqus-uid], div#disqus_thread').each(function (i, el) {
            var insertID = uniq('own-your-comments-embed-');
            
            var insertFrame = $('<iframe />')
            	.attr('id', insertID)
            	.css('width', '100%');
            
            var properties = { url: window.location.href };
            
            getOption('commentEmbedURL', function (url) {
                $('#' + insertID).attr('src', expandTemplates(url, properties));
            });
            
            getOption('commentEmbedHeight', function (height) {
            	$('#' + insertID).css('height', height);
            });
            
            $(el).before(insertFrame);
        });
    }
    
    // Public
    return {
        init: function () {
        	embedCommentsBox();
        }
    };
}());

setTimeout(OwnYourComments.init, 2000);