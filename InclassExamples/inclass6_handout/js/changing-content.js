$(function() {
    $('ul li').text(function() {
    var text2 = $(this).text();
    $(this).text(text2.replace('pine', 'almond'));
    });
    //$('li:contains("pine")').text('almonds')
    $('ul li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});