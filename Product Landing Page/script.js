document.addEventListener("DOMContentLoaded", function() {
    // Get the search input and button elements
    var searchInput = document.querySelector(".search-input");
    var searchButton = document.querySelector(".search-button");

    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
        // Get the value of the search input
        var searchQuery = searchInput.value;

        // Log the search query to the console (replace this with actual search functionality)
        console.log("Search Query:", searchQuery);

        // You can add your search functionality here, such as fetching search results from a server
    });
});
