$(function() {
  $('input').keydown(function(event) {
    if(event.which == 13) {
      var val = $(this).val();
      $(this).val('');
      $('.list').prepend('<div>' + val + '</div>');
    }
  });
});
