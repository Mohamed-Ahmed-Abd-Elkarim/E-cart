let toggle = document.querySelector(".toggle");
let section = document.querySelector("section");
let span = document.querySelector(".up");

toggle.onclick = function() {
    toggle.classList.toggle("open");
    section.classList.toggle("open");
};
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 1500) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
span.onclick = function () {
    window.scrollTo ({
        top:0,
    })
};




