const stylizedPrint = document.querySelectorAll(".container-items__item > .name-pics");
console.log(ui.stylizedPrint)
ui.printPage.addEventListener("click", () => {
window.print();
})
window.addEventListener("beforeprint", () => {
    ui.printPage.style.display = "none";
    ui.backBtn.style.display = "none";
    ui.deleteBtn.forEach(item => console.log(item));
    stylizedPrint.forEach(item => item.style.width = "100%")
    console.log(ui.backBtn)
})
window.addEventListener("afterprint", () => {
    ui.printPage.style.display = "inline-block";
    ui.backBtn.style.display = "inline-block";
    ui.deleteBtn.forEach(item => item.style.display = "inline-block");
    stylizedPrint.forEach(item => item.style.width = "80%")
    console.log("after")
})
