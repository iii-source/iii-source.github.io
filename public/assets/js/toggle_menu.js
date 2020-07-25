$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $(this).toggleClass('on');
            $("+.submenu",this).slideToggle()
            return false;
        });
    });
});