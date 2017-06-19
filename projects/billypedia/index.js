/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        
        
        
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        let $section = $('<section>').attr('id', 'section-rider');
        $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


