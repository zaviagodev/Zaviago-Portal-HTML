let optionValueBtn = document.getElementById("add-value-btn");
let subvariantBtn = document.getElementById("add-subvariant");
let subvariantInput = document.getElementById("input-subvariant");

subvariantBtn.addEventListener("click", function(){
    subvariantInput.style.display = "flex";
})

subvariantInput.addEventListener("blur", function(){
    if (this.value === ""){
        this.style.display = "none";
    }
})

var optionValuesVariant = document.getElementsByClassName("option-values");
var numOfOptionValues = document.getElementById("option-values-num");

function countNumOfValues(){
    numOfOptionValues.innerText = optionValuesVariant.length;
}


function createValue(e){
    let optionValue = document.getElementById("option-value").value;

    if (optionValue === "" || optionValuesVariant.length >= 20){
        e.preventDefault();
    } else {
        /* else statement creates HTML tag like this when entering or click "Add" button:

        <span class="option-values alert alert-dismissible py-1 rounded-pill">
            <span class="badge rounded-pill p-0 general">
                <span class="circle d-inline-block"></span> 
            </span>
            <span id="value"></span>
            <button type="button" class="btn-close btn-close-sm py-2" data-bs-dismiss="alert" onclick="countNumOfValues()"></button>
        </span>

        */
        const variants = document.createElement("span");
        const createdValue = document.createElement("span");
        const variantValue = document.createTextNode(" " + optionValue);
        const closeBtn = document.createElement("button");

        // For value of variants
        variants.className = "option-values alert alert-dismissible py-1 rounded-pill";
        createdValue.setAttribute("id","value");

        // For circle of variants
        const circle = document.createElement("span");
        circle.className = "badge rounded-pill p-0 general";

        const innerCircle = document.createElement("span");
        innerCircle.className = "circle d-inline-block";

        circle.appendChild(innerCircle);

        // For Close button
        closeBtn.className = "btn-close btn-close-sm py-2";
        closeBtn.setAttribute("data-bs-dismiss","alert");
        closeBtn.setAttribute("onclick", "countNumOfValues()");

        createdValue.appendChild(variantValue);
        variants.appendChild(circle);
        variants.appendChild(createdValue);
        variants.appendChild(closeBtn);

        document.getElementById("added-option").appendChild(variants);
        countNumOfValues();
    }
}

window.onload = function(){countNumOfValues()};
optionValueBtn.addEventListener("click", createValue)

document.getElementById("option-value").addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault();
        createValue();
    }
})