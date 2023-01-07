const ui = new UI;

// sehife acildigi zaman ve ya yeniden yulendiyi zaman localStroage-daki datalarin sehifeye yulenmesi ucun
const windowsOnloadData = () => {
    let html = "";
    if (JSON.parse(localStorage.getItem("productList")) && productList.length ) {
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
            ui.resetBtn.style.display = "inline-block";
            ui.confrimAll.style.display = "inline-block";
        });
    } else {
        html = `<h1 style="text-align:center"> Sifariş daxil edin </h1>`;
        ui.resetBtn.style.display = "none";
        ui.confrimAll.style.display = "none";
    }

    return html;
};
ui.containerListItems.innerHTML = windowsOnloadData();


ui.resetBtn.addEventListener("click", () => {
    localStorage.removeItem("productList");
    productList = [];
    ui.containerListItems.innerHTML = windowsOnloadData();
})

addToDatalist(products);

addProductsToProductList(ui.confrimProduct, ui.inputDataOfDatalist, ui.inputProductPcs, ui.containerListItems);

ui.confrimAll.addEventListener("click", () => {
    ui.containerInputs.style.display = "none";
    ui.confrimAll.style.display = "none";
    ui.printPage.style.display = "inline-block";
    ui.backBtn.style.display = "inline-block";
})

ui.backBtn.addEventListener("click", () => {
    ui.containerInputs.style.display = "flex";

    ui.confrimAll.style.display = "inline-block";

    ui.printPage.style.display = "none";
    ui.backBtn.style.display = "none";
});


