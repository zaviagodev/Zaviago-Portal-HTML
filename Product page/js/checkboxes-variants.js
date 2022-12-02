// Create check all functions

let checkAll = document.getElementById("select-all-table");
let checkboxesVariant = document.getElementsByClassName("check-stock");

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