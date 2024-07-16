const contact = document.getElementById("contact");
const intro = document.getElementById("intro")
const projects = document.getElementById("projects")

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

window.onclick = function(event) {
    if (event.target.matches('.contactMe')) {
        contact.scrollIntoView({behavior:"smooth", block:"center"});
    }
    if (event.target.matches('#home-btn')) {
        intro.scrollIntoView({behavior:"smooth", block:"center"});
    }
    if (event.target.matches('#projects-btn')) {
        projects.scrollIntoView({behavior:"smooth", block:"center"});
    }
}