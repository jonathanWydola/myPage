$(function() {
    //gets third item from list using indexing over values
    $('ul li:eq(2)').removeAttr('class', 'hot');
    $('ul li.hot').addClass('favorite');
});