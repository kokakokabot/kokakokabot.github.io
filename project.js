document.addEventListener('DOMContentLoaded', function() {
    var projectElems = document.querySelectorAll('.project');

    projectElems.forEach(function(project) {
        project.addEventListener('mouseenter', function() {
            this.querySelector('.project-info').style.display = 'flex';
        });
        project.addEventListener('mouseleave', function() {
            this.querySelector('.project-info').style.display = 'none';
        });
    });
});
