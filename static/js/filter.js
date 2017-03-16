/* filter.js
 * 
 * Filter portfolio items
 * V1: Only one category can be selected at a time
 * categories: dance, design, code
 */
 var elem = document.querySelector('.portfolio');
 var msnry = new Masonry( elem, {
   // options
   itemSelector: '.portfolio_item',
   columnWidth: 50
 });

 // element argument can be a selector string
 //   for an individual element
 // var msnry = new Masonry( '.grid', {
   // options
 // });
 
 
 
// Add Event Listeners to Filter Buttons
document.querySelector(".filters #all").addEventListener("click", filter);
document.querySelector(".filters #dance").addEventListener("click", filter);
document.querySelector(".filters #design").addEventListener("click", filter);
document.querySelector(".filters #code").addEventListener("click", filter);

// selected category
var selected = '';

// filter click event listener
function filter(e) {
    var categories = ['dance', 'design', 'code'];
    selected = e.target.id;
    
    // Show All
    if (selected == 'all') {
        document.querySelector('.portfolio').style.height = "";
        var items = document.querySelectorAll(".portfolio_item");
        forEach(items, show);
    } else {
        // Show Selected Category
        var items = document.querySelectorAll(".portfolio_item." + selected);
        forEach(items, show);
    
        // Adjust height so items are distributed across available coloumns
        // adjustHeight(items.length, selected);
    
        // Hide Other Categories
        var toHide = categoriesToHide(selected, categories);
        var query = '';
        for (i in toHide) {
            query += '.portfolio_item.' + toHide[i];
            query += (i < toHide.length - 1 ? "," : "");
        }
        var items = document.querySelectorAll(query);
        forEach(items, hide);
    }
}

// this needs to be more robust, take into account screen size 
// Use available columns
function adjustHeight(n, selected){
    var portfolio = document.querySelector('.portfolio');
    var style = window.getComputedStyle(portfolio, null);
    var width = parseInt(style.getPropertyValue("width"));
    var gap = parseInt(style.getPropertyValue("column-gap"));
    console.log("gap", gap);
    console.log("portfolio width", width);
    // must select visible item
    var item = document.querySelector('.portfolio_item.'+selected);
    style = window.getComputedStyle(item, null);
    var colWidth = parseInt(style.getPropertyValue("width"));
    console.log(item);
    console.log("column width", colWidth);
    
    // numCols, without taking gap into account
    var numCols = Math.floor(width/colWidth);
    // gap space
    var adj = numCols*gap-gap; 
    // numCols adjusted for gap
    numCols = Math.floor((width-adj)/colWidth);
    if (numCols <= 5) { //or column count;
        document.querySelector('.portfolio').style.height = "500px";    
    }    
}


// Returns an array of elements to hide
function categoriesToHide(category, categories) {
    var items = [];
    for (i in categories) {
        if (selected != categories[i]) {
            items.push(categories[i]);
        }
    }
    return items;
}

function hide(item) {
    item.style.display = "none";
}

function show(item) {
    item.style.display = "inline-block";
}

// forEach
function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i])
    }
}