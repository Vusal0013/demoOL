// inputBoxlara daxil etdiyimiz deyeri O buttonu ile ve ya Enter vasitesile daxil etmek ucun
function addProductsToProductList(confrim, itemName, itemPcs, containerListElement) {

    itemName.addEventListener("keypress", (e) => {
        if (e.key == "Enter")
            confrim.click();
    });

    itemPcs.addEventListener("keypress",
        (e) => {
            if (e.key == "Enter")
                confrim.click();
        });

    confrim.addEventListener("click",
        () => {
            let itemId = 0;
            for (item of productList) {
                for (let item2 of productList) {
                    if (itemId == item2.id)
                        itemId++;
                }
            }
            let html = "";
            if (itemName.value.replace(/\s/g, '') != "" && itemPcs.value.replace(/\s/g, '') != "") {
                productList.unshift({
                    id: itemId,
                    name: itemName.value, pics: itemPcs.value
                });
                console.log(productList);
                localStorage.setItem('productList', JSON.stringify(productList));
                // altda kommente aldigim kod blokunu windowsOnloadData() funksiyasi icra edir

                html = windowsOnloadData();

                // productList.forEach((item, i) => {
                //     html += `
                //             <ul>
                //                 <li>${++i}. ${item.name}</li>
                //                 <li>${item.pics}</li>
                //             </ul>
                //     `
                // })
                containerListElement.innerHTML = html;
                itemName.value = "";
                itemPcs.value = "";
            } else {
                html = `
                <div class="error">
                Boş dəyər daxil edilə bilməz
                </ div>
                `;
                ui.errorContainer.innerHTML += html;
                setTimeout(() => ui.errorContainer.firstElementChild.remove(), 1500);
            }
        });
}