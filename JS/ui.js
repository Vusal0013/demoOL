class UI {
    constructor(){
        this.container = document.querySelector(".container"),
        this.datalist = document.getElementById("product-list"),
        this.containerInputs = document.getElementById("inputs-form"),
        this.inputDataOfDatalist = document.getElementById("product"),
        this.inputProductPcs = document.getElementById("product-pics"),  
        this.confrimProduct = document.getElementById("confrim-product"),  
        this.containerListItems = document.querySelector(".container-items"),  
        this.resetBtn = document.getElementById("reset"),
        this.backBtn = document.querySelector(".back"),
        this.confrimAll = document.querySelector(".confrim-all-elements"),
        this.printPage = document.querySelector(".get-print-page"),
        this.errorContainer = document.querySelector(".errors-container")
    }
};
