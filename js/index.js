const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector('#modal');
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () => {
        modal.classList.toggle("hide"); //também pode se usar remove ou add para alternar
})

close.addEventListener("click", () => {
    modal.classList.toggle("hide");
})


