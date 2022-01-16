 let icon = document.querySelector('span.icon')
    let ul = document.querySelector('ul')
    ul.classList.add("none");
    icon.onclick = function() {
        ul.classList.toggle("none");
    }