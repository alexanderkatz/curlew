/* filter.js
 * 
 * Filter portfolio items
 * V1: Only one category can be selected at a time
 */

//  Configure Isotope
var iso = new Isotope( '.portfolio', {
    itemSelector: '.portfolio_item',
    masonry: {
        columnWidth: 235,
        gutter: 18
    }
});

// Add Event Listener to Filter Buttons
var buttons = document.querySelectorAll(".filters button");
forEach(buttons, function(b){
    b.addEventListener("click", filter);   
});

// Filter by button id
function filter(e) {
    forEach(buttons, function (b) {
        b.className='';
    });
    e.target.className = "active";
    if (e.target.id == 'all') {
        iso.arrange({filter: '*'});
    } else {
        iso.arrange({filter: '.'+e.target.id});
    }
}

// forEach
function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i])
    }
}