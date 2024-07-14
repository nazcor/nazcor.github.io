const contactMe = document.getElementById("contactMe");
const contact = document.getElementById("contact");

function projectDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-option");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

contactMe.addEventListener("click", ()=> {
    contact.scrollIntoView({behavior:"smooth", block:"end"})
});