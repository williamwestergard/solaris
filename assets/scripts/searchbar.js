
function searchBar() {
    let searchBarFunction = document.getElementById("search-bar-text");
    let input, filter, ul, li, a, i, txtValue;
    input = searchBarFunction;
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchbar-list");
    li = ul.getElementsByTagName("li");

    if (filter === "") {
        ul.style.display = "none";
        return; 
    } 
    else {
        ul.style.display = "block"; 
    }


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul.style.display = "block";
            li[i].style.display = "block";
        } 
        else {
            li[i].style.display = "none";
        }
    }
    
    // Gömmer listan om användaren klickar utanför den
    document.addEventListener('click', function (event) {
    let searchBarContent = document.getElementById("search-function");
    let ul = document.getElementById("searchbar-list");

    if (!searchBarContent.contains(event.target)) {
        ul.style.display = "none";
    }
});
}

// Gömmer listan efter att användaren har klickat på den
document.getElementById("searchbar-list").addEventListener('click', function () {
    this.style.display = "none";
    document.getElementById("search-bar-text").value ="";
});
