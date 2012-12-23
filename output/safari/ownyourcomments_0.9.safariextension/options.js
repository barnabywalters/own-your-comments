function saveOption(evt) {
  kango.invokeAsync('kango.storage.setItem', $(evt.target).attr('id'), evt.target.value);
  
  $('#notice').text('Unsaved Changes Made!').toggleClass('unsaved');
  window.setTimeout(function () {
    $('#notice').text('Changes Saved').toggleClass('unsaved');
  }, 200);
}

function main() {
  $('.monitor').each(function () {
    var self = $(this);
    
    self.keyup(saveOption);
    
    kango.invokeAsync('kango.storage.getItem', self.attr('id'), function (url) {
  	  self.val(url);
    });
  });
}

KangoAPI.onReady(function () {
  main();
});
