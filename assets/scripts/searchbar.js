
function searchBar() {
    let searchBarFunction = document.getElementById("search-bar-text");
    let searchBarContent = document.getElementById("search-function");
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
    
    document.addEventListener('click', function(event) {
      let isClickInside = searchBarContent.contains(event.target);
      if (isClickInside) {
        ul.style.display = "block";
      } 
      
      else {
        ul.style.display = "none";
      }
});
}

