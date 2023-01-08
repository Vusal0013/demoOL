// delete items func



// const deleteBtn = document.querySelectorAll(".delete");
const deleteItem = (delValue) => {
    productList = productList.filter(product => product.id != delValue);
    if(productList.length){
        localStorage.setItem('productList', JSON.stringify(productList));
    }else {
        localStorage.removeItem('productList');
    }
    ui.containerListItems.innerHTML = windowsOnloadData()
}

// delete items func