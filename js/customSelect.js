(function($){
  $.fn.customSelect = function(options){

      var $selects= $(this),
      len = $selects.length,
      select ,
      options,
      dropdown ,
      selectButton;

      for (var i = 0; i < len ; i++) {
        var current = $($selects[i]);
        select = current.find('select');
        options = select.children();

        current
        .append('<div class="select-selected">' + options.filter(':selected').html() + '</div>')
        .append('<div class="select-items"></div>');

        dropdown = current.find('.select-items');
        selectButton = current.find('.select-selected');

        for (var j = 0; j < options.length; j++) {
          dropdown.append('<div>' + $(options[j]).html() + '</div>');
          }

          selectButton.click(function(){
            $(this).parent().find('.select-items').toggleClass('select-show');
          });
        }

        $('.select-items > div').click(function(){
          var el = $(this),
          index = el.index(),
          parent = el.parents('.customSelect'),
          select = parent.find('select'),
          options = select.children(),
          dropdown = parent.find('.select-items'),
          selectButton = parent.find('.select-selected');

          if( select.filter(':selected').html() !== el.html() ){
            options.removeAttr('selected');
            $(options[index]).attr('selected','selected');
            dropdown.children().removeClass('selected');
            el.addClass('selected');
            selectButton.html(el.html());
          }
          });


       $(document).click(function(e){
        var target = $(e.target);
        if( !target.hasClass('select-selected') ){
          $selects.find('.select-items').removeClass('select-show');
        }
      });
  }
})(jQuery);
