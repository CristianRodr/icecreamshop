let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".nav__link--modal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function name(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", function name() {
    modal.classList.toggle("modal-close");

    setTimeout(function name() {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 850)
})

window.addEventListener("click", function name(e) {
    console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");

        setTimeout(function name() {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900)
    }
})