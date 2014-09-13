$(function() {
  $('input').keydown(function(event) {
    if(event.which == 13) {
      var val = $(this).val();
      $(this).val('');
      var item = $('<li><span class="check"></span>' + val + 
        '<span class="close">x</span></li>');
      item.find('.check').click(function() {
        item.css('text-decoration', 'line-through');
      });
      item.find('.close').click(function() {
        item.remove();
      });
      $('ul').prepend(item);
    }
  });
});
