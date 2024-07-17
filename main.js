const contact = document.getElementById("contact");
const intro = document.getElementById("intro");
const projects = document.getElementById("projects");
const progressCircles = document.querySelectorAll(".skills-item");

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

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4
}

const callbacks = (progressCircles) => {
    progressCircles.forEach(entry => {
        if (entry.isIntersecting){
            var circleDiv = entry.target.childNodes[1].childNodes[3];
            var percentDiv = entry.target.childNodes[3];
            progressBar(circleDiv, percentDiv);
        }
    });
}

let observer = new IntersectionObserver(callbacks, options);

progressCircles.forEach(element => {
    observer.observe(element);
});

function progressBar (circleDiv, percentDiv) {
    var strokeVal = (3.2 * 100) /  100;
    var progressVal = percentDiv.dataset.progress;
    circleDiv.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    percentDiv.getAttribute("data-progress", progressVal);
    var start = new Date().getTime();

    setTimeout(function() {
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        percentDiv.innerHTML = progressVal / 100 * 100 + '%';
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}