$(function() {
    //var backgroundCo = $("'background-color' : '#c5a996'");
    $('ul').append('<p>Color was: ' + $('ul li:eq(0)').css('background-color') + '</p>');
    $('ul li').each(function(){
       var styles = {'background-color' : '#c5a996',
       'border' : 'solid',
       'border-color' : 'white',
       'border-width' : '1px',
       'color' : 'black',
       'text-shadow' : 'none',
       'font-family' : 'Georgia'}
       $(this).css(styles);
    });
});