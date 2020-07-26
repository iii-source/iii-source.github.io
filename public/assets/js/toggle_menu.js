$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $(this).toggleClass('on');
            $("+.submenu",this).slideToggle()
            return false;
        });
    });

  // 子メニュー処理
  $('li').click(function(e) {
    // メニュー表示/非表示
    $(this).children('ul').slideToggle('fast');
    e.stopPropagation();
  });

});