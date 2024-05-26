


window.addEventListener("DOMContentLoaded", function() {
    let keyHtml = "<p>Hello World!</p>";
    let container = document.getElementById("pianoContainer");
    
    console.log(keyHtml);
    console.log(container);
    console.log(container.innerHTML);
    
    container.innerHTML += keyHtml;
});