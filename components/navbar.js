const navbar = document.getElementById("navbar");
navbar.addEventListener("click", toggleDropdown);

function toggleDropdown(event) {
  if (event.target.matches("a")) {
    event.preventDefault();
    // toggle the dropdown menu
  }
}
