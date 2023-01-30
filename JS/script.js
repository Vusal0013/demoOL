const ui = new UI;

// sehife acildigi zaman ve ya yeniden yulendiyi zaman localStroage-daki datalarin sehifeye yulenmesi ucun
const windowsOnloadData = () => {
    let html = "";
    if (JSON.parse(localStorage.getItem("productList"))) {
        productList = JSON.parse(localStorage.getItem("productList"));
        productList.forEach((item, i) => {
            ++i
            html += `
            <div class="container-items__item">

            <div id="${item.id}" class="name-pics">
            <div>${i}. ${item.name}</div>
            <div>${item.pics}</div>
            </div>
            <div onclick="deleteItem(${item.id})" class="delete">
            del
            </div>
            </div>
            `
            ui.resetBtn.classList.remove("hide")
            ui.confrimAll.classList.remove("hide")
        });

    } else {
        html = `<h1 style="text-align:center"> Sifariş daxil edin </h1>`;
        ui.resetBtn.classList.add("hide")
        ui.confrimAll.classList.add("hide")
    }

    return html;
};

ui.containerListItems.innerHTML = windowsOnloadData();

const deleteBtn = document.querySelectorAll(".delete")
const stylizedPrint = document.querySelectorAll(".container-items__item > .name-pics")


ui.resetBtn.addEventListener("click", () => {
    localStorage.removeItem("productList");
    productList = [];
    ui.containerListItems.innerHTML = windowsOnloadData();
})

ui.inputProductPcs.addEventListener("input", () => {
    if( ui.inputProductPcs.value.startsWith("0")){
        ui.inputProductPcs.value = ui.inputProductPcs.value.slice(1)
    }
    ui.inputProductPcs.value = ui.inputProductPcs.value.slice(0,5)
    ui.inputProductPcs.value = ui.inputProductPcs.value.replace(".", "")
})

addToDatalist(products);

addProductsToProductList(ui.confrimProduct, ui.inputDataOfDatalist, ui.inputProductPcs, ui.containerListItems);

ui.confrimAll.addEventListener("click", () => {
    ui.containerInputs.classList.add("hide");
    ui.confrimAll.classList.add("hide");
    ui.printPage.classList.remove("hide");
    ui.backBtn.classList.remove("hide");
    console.log(deleteBtn)
    console.log(stylizedPrint)
    deleteBtn.forEach(item => item.classList.add("hide"));
    stylizedPrint.forEach(item => item.classList.add("w100"));
})

ui.backBtn.addEventListener("click", () => {
    ui.containerInputs.classList.remove("hide")
    ui.confrimAll.classList.remove("hide")
    ui.printPage.classList.add("hide")
    ui.backBtn.classList.add("hide")
    deleteBtn.forEach(item => item.classList.remove("hide"));
    stylizedPrint.forEach(item => item.classList.remove("w100"));
});