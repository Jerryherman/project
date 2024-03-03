function toggleSearch() {
    var searchIcon = document.getElementById("searchIcon");
    var icon = searchIcon.querySelector("i");

    // Toggle the visibility of the search icon
    if (icon.style.display === "none" || icon.style.display === "") {
      icon.style.display = "inline";
    } else {
      icon.style.display = "none";
    }
  }