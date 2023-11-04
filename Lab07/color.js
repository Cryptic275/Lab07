document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const color = document.querySelector('#color').value
        const heading = document.querySelector('h1')
        heading.style.color = color
        return false;
    }
})
