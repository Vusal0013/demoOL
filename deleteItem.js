// delete items func


// const deleteBtn = document.querySelectorAll(".delete");
const deleteItem = (delValue) => {
    productList = productList.filter(product => product.id != delValue);
    localStorage.setItem('productList', JSON.stringify(productList));
    ui.containerListItems.innerHTML = windowsOnloadData()
}

// delete items func