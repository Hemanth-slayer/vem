let sections = document.querySelectorAll("hidden");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 20;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        }
        else{
            sec.classList.remove("show-animate");
        }
    })
}
