document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("button").addEventListener("click", function () {
        let name = document.getElementById('message')//gets name
        name = name.value;
        alert('Hellow ' + name);//prints Hi (name)
    }, false)
}, false);