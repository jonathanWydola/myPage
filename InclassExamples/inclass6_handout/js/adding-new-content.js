$(function() {
    $('ul').before(function() {
        return '<p>Just Updated</p>';
    });
    $('li.hot').prepend('+');
    var newValANC = $('<li><em>gluten free</em> soy sauce</li>';
    $('li').last().after(function () {
        return newValANC;
    });
});