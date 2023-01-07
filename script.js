
const container = document.querySelector(".container")
const datalist = document.getElementById("product-list");
const containerInputs = document.getElementById("inputs-form")
const inputDataOfDatalist = document.getElementById("product")
const inputProductPcs = document.getElementById("product-pics");
const confrimProduct = document.getElementById("confrim-product");
const containerListItems = document.querySelector(".container-items");
const resetBtn = document.getElementById("reset");
const backBtn = document.querySelector(".back")
const confrimAll = document.querySelector(".confrim-all-elements");
const printPage = document.querySelector(".get-print-page")

const errorContainer = document.querySelector(".errors-container")

let    products = {
    dvr: ["DS-7104HQHI-K1",
        "DS-7104HGHI-F1",
        "DS-7108HQHI-K1",
        "DS-7108HGHI-K1"],
    nvr: ["DS-7232NI-K2",
        "DS7332NI-K4",
        "DS-7608NI-K2"],
    "ip camera": ["DS-1043"],
    "switch": ["0310HP-E",
        "0109P-E"],
    "analoq camera": ["DS-2CE17D0T-IT3 (2.8mm)",
        "DS-2CE17D0T-IT3 (3.6mm)",
        "DS-2CE56D0T-IRP (2.8mm)",
        "DS-2CE56D0T-IRP (3.6mm)",
        "DS-2CE56D0T-IRM (2.8mm)",
        "DS-2CE56D0T-IRM (3.6mm)",
        "DS-2CE16D0T-IR (2.8mm)",
        "DS-2CE16D0T-IR (3.6mm)"],
    hdd: ["1TB WD",
        "2TB WD",
        "4TB WD",
        "6TB WD",
        "8TB WD",
        "10TB WD"],
    aksesuar: ["BNC 30cm",
        "BNC Purjunlu",
        "DC F",
        "DC M"],
    kabel: ["2+1 (250m)",
        "2+1 (500m)",
        "4+1 (250m)",
        "4+1 (500m)",
        "CAT5E FTP (305m)",
        "CAT6 UTP (305m"],
    ups: ["UPS 600",
        "UPS 800",
        "UPS 1000",
        "UPS 1500",
        "UPS 2000"]
};

let productList = [];

// products obyektindeki elementleri <datalist> daxiline  elave edirik
// (inputboxa focus oldugumuz zaman elementler gorunun ve tapmaq asan olsun deye)
const addToDatalist = (productsIsObj) => {
    let html = ""

    for (const [key, value] of Object.entries(productsIsObj)) {
        html += `<optgroup label="${key}">`
        value.forEach((name) => {
            html += `
            <option value="${name}">${key.toUpperCase()}</option>
            `
        })
        html += `</optgroup>
        `
    }

    datalist.innerHTML = html;
};


// inputBoxlara daxil etdiyimiz deyeri O buttonu ile ve ya Enter vasitesile daxil etmek ucun
const addProductsToProductList = (confrim, itemName, itemPcs, containerListElement) => {
    
    itemName.addEventListener("keypress", (e) => {
        if (e.key == "Enter") confrim.click()
    });

    itemPcs.addEventListener("keypress",
        (e) => {
            if (e.key == "Enter") confrim.click()
        });

    confrim.addEventListener("click",
        () => {
            let itemId = 0;
            for(item of productList){
                for(let item2 of productList){
                    if(itemId == item2.id) itemId++
                }
            }
            let html = "";
            if (itemName.value.replace(/\s/g, '') != "" && itemPcs.value.replace(/\s/g, '') != "") {
                productList.unshift({
            id: itemId,
            name: itemName.value, pics: itemPcs.value
                });
                console.log(productList)
                localStorage.setItem('productList', JSON.stringify(productList));
                // altda kommente aldigim kod blokunu windowsOnloadData() funksiyasi icra edir
                html = windowsOnloadData()
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
                `
                errorContainer.innerHTML += html
                setTimeout(() => errorContainer.firstElementChild.remove(), 1500)
            }
        });
};
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
            resetBtn.style.display = "inline-block";
            confrimAll.style.display = "inline-block";
        });
    } else {
        html = `<h1 style="text-align:center"> Sifariş daxil edin </h1>`;
        resetBtn.style.display = "none";
        confrimAll.style.display = "none";
    }

    return html;
};
containerListItems.innerHTML = windowsOnloadData();

// delete items func


const deleteBtn = document.querySelectorAll(".delete");
const deleteItem = (delValue) => {
    productList = productList.filter(product => product.id != delValue);
    localStorage.setItem('productList', JSON.stringify(productList));
    containerListItems.innerHTML = windowsOnloadData()
}




// delete items func




resetBtn.addEventListener("click", () => {
    localStorage.removeItem("productList");
    productList = [];
    containerListItems.innerHTML = windowsOnloadData();
})





addToDatalist(products);

addProductsToProductList(confrimProduct, inputDataOfDatalist, inputProductPcs, containerListItems);

confrimAll.addEventListener("click", () => {
    containerInputs.style.display = "none";
    confrimAll.style.display = "none";
    printPage.style.display = "inline-block";
    backBtn.style.display = "inline-block";
})

backBtn.addEventListener("click", () => {
    containerInputs.style.display = "flex";

    confrimAll.style.display = "inline-block";

    printPage.style.display = "none";
    backBtn.style.display = "none";
});

// Səhifə print olduğu zaman nəyin print olacağını göstərmək üçün 
const stylizedPrint = document.querySelectorAll(".container-items__item > .name-pics");

printPage.addEventListener("click", () => {
    window.print();
})
    window.addEventListener("beforeprint", () => {
        printPage.style.display = "none";
        backBtn.style.display = "none";
        deleteBtn.forEach(item => item.style.display = "none");
        stylizedPrint.forEach(item => item.style.width = "100%")
    })
    window.addEventListener("afterprint", () => {
        printPage.style.display = "inline-block";
        backBtn.style.display = "inline-block";
        deleteBtn.forEach(item => item.style.display = "inline-block");
        stylizedPrint.forEach(item => item.style.width = "80%")
    })

