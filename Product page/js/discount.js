let discountPricing = document.getElementById("discount");
let salePricePricing = document.getElementById("sale-price");
let instantDiscountCheckbox = document.getElementById("toggle-instant-discount");

let disabledBaht = document.getElementsByClassName("currency");

// "disabled-baht" class creates the gray background of the currency on the left side of inputs
// When discount section is enabled, "disabled-baht" class will change to white background

function enableDiscount(){
    discountPricing.removeAttribute("disabled","");
    salePricePricing.removeAttribute("disabled","");
    for (let i = 0; i < disabledBaht.length;i++){
        disabledBaht[i].classList.remove("disabled-baht");
    }
}

function disableDiscount(){
    discountPricing.setAttribute("disabled","");
    salePricePricing.setAttribute("disabled","");
    for (let i = 0; i < disabledBaht.length;i++){
        disabledBaht[i].classList.add("disabled-baht");
    }
}

instantDiscountCheckbox.addEventListener("click", function(){
    if (instantDiscountCheckbox.checked){
        enableDiscount();
    } else {
        disableDiscount();
    }
})