// This is the value of the search input
var searchInput = $(".search-input");

// This is the value of the category input
var category = $(".category");

// This is the search button
var search = $(".search-button");

// This is the form validation event listener
search.on("click", function (event) {
    event.preventDefault();
    if(!searchInput.val() || category.val() === "no") {
        window.alert("Please fill out the required items")
    } else if (location.pathname === "/congress-search-tool/search-results.html") {
        searchInput.attr("Value", "It Works")
    } else {
        location.replace("search-results.html")
    }
})

// The button that takes you back to the search page

// Function that replaces the url
function replaceUrl () {

};