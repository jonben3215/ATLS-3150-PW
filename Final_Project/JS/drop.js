// Function to toggle the dropdown content visibility
function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  var dropdownIcon = document.getElementById("dropdownIcon");

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    dropdownIcon.innerHTML = "&#9658;"; // Change to ">"
  } else {
    dropdownContent.style.display = "block";
    dropdownIcon.innerHTML = "&#9660;"; // Change to "V"
  }
} 
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }