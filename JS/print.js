
const deleteBtn = document.querySelectorAll(".delete");
const stylizedPrint = document.querySelectorAll(".container-items__item > .name-pics")



window.addEventListener("beforeprint", () => {
    ui.printPage.classList.add("hide")
    ui.backBtn.classList.add("hide")
    deleteBtn.forEach(item => item.classList.add("hide"));
    stylizedPrint.forEach(item => item.classList.add("w100"))
})

ui.printPage.addEventListener("click", () => {
    window.print();
})

window.addEventListener("afterprint", () => {
    ui.printPage.classList.remove("hide")
    ui.backBtn.classList.remove("hide")
    deleteBtn.forEach(item => item.classList.remove("hide"));
    stylizedPrint.forEach(item => item.classList.remove("w100"))
})

