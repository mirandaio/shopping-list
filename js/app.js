$(function() {
  $('.sortable').sortable();
  $('input').keydown(function(event) {
    if(event.which == 13) {
      var val = $(this).val();
      if(val.trim().length > 0) {
        $(this).val('');
        var item = $('<li><span class="check"></span>' +
          '<input class="item" type="text" value="' + val + '">' +
          '<span class="close">x</span></li>');
        item.find('.check').click(function() {
          item.toggleClass('checked');
        });
        item.find('.close').click(function() {
          item.remove();
        });
        $('ul').prepend(item);
      }
    }
  });
  $('button').click(function() {
    $('li').remove();
  });
});
