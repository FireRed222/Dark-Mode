let darkMode = document.querySelector(".darkMode");
let body = document.body;
let nav = document.querySelector("#nav");
let block = document.querySelector(".block");

let turnDark = () => {
    body.classList.toggle("darkBody");
    darkMode.classList.toggle("active");
    nav.classList.toggle("darkBody");
    block.classList.toggle("darkBody");
}