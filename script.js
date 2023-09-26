const hamburguer = document.querySelector(".hamburguer");
const linksmobile = document.querySelector(".links-rapidos-mobile");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    linksmobile.classList.toggle("active");
})

var i = setInterval(function () {
    clearInterval(i)

    document.getElementById("loader-back").style.display = "none";
    document.getElementById("toda-pagina").style.display = "block";
}, 4000)