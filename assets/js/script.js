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
    } else {
        location.replace(newUrl);
    }
})

// Function that replaces the url
function replaceUrl () {
    var link = location.href;
    link = link + "maps/?civil-war-maps&fo=json";
    return link
};

// Renaming the replaceUrl function
var newUrl = replaceUrl();