// Create check all functions

let checkAll = document.getElementById("select-all-table");
let checkboxesVariant = document.getElementsByClassName("check-stock");

var fullPriceInput = document.getElementById("full-price-variant");
var costInput = document.getElementById("cost-variant");
var instockInput = document.getElementById("in-stock-variant");

var fullPriceTable = document.getElementsByClassName("full-price-table");
var costTable = document.getElementsByClassName("cost-table");
var instockTable = document.getElementsByClassName("in-stock-table");

function checkAllVariants(){
    for (let i = 0; i < checkboxesVariant.length; i++){
        checkboxesVariant[i].checked = true;
    }
}

function uncheckAllVariants(){
    for (let i = 0; i < checkboxesVariant.length; i++){
        checkboxesVariant[i].checked = false;
    }
}

checkAll.addEventListener("click", function(){
    if (checkAll.checked){
        checkAllVariants();
    } else {
        uncheckAllVariants();
    }
})

function applyToSelection(){
    // I want full price, cost, and in-stock to be updated only when clicking "Apply to Selection" button and some variants are checked.
}

// For apply to all variants, there is no issue
function applyToAll(){
    for (let i = 0; i < fullPriceTable.length; i++){
        fullPriceTable[i].value = fullPriceInput.value;
    }

    for (let i = 0; i < costTable.length; i++){
        costTable[i].value = costInput.value;
    }

    for (let i = 0; i < instockTable.length; i++){
        instockTable[i].value = instockInput.value;
    }
}
