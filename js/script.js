let phaseSector = document.getElementById("phases");

document.getElementById("addPhase").addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("phase");

    let number = document.getElementsByClassName("phase").length
    let phaseNumber = (number + 1) + ".0";
    let phaseCode = document.createElement("h3");
    phaseCode.classList.add("phaseNumber");
    phaseCode.innerHTML = phaseNumber;
    div.appendChild(phaseCode);

    let phaseName = document.createElement("input");
    phaseName.type = "text";
    phaseName.placeholder = "Phase name...";
    phaseName.classList.add("phaseInput");
    phaseName.classList.add("phaseName");
    div.appendChild(phaseName);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete this phase";
    deleteBtn.classList.add("deletePhase");
    div.appendChild(deleteBtn);

    let breakline = document.createElement("div");
    breakline.classList.add("phaseBR");
    div.appendChild(breakline);

    let startLabel = document.createElement("label");
    startLabel.classList.add("dateLabel");
    startLabel.innerHTML = "Start date";
    div.appendChild(startLabel);

    div.appendChild(document.createElement("br"));

    let startDate = document.createElement("input");
    startDate.type = "date";
    startDate.classList.add("phaseInput");
    startDate.classList.add("startDate");
    div.appendChild(startDate);

    let addProduct = document.createElement("button");
    addProduct.innerHTML = "Add a product";
    addProduct.classList.add("addProduct");
    div.appendChild(addProduct);

    let breakl = document.createElement("div");
    breakl.classList.add("phaseBR");
    div.appendChild(breakl);

    let endLabel = document.createElement("label");
    endLabel.classList.add("dateLabel");
    endLabel.innerHTML = "End date";
    div.appendChild(endLabel);

    div.appendChild(document.createElement("br"));

    let endDate = document.createElement("input");
    endDate.type = "date";
    endDate.classList.add("phaseInput");
    endDate.classList.add("endDate");
    div.appendChild(endDate);

    let break2 = document.createElement("div");
    break2.classList.add("phaseBR");
    div.appendChild(break2);

    let statusLabel = document.createElement("label");
    statusLabel.classList.add("statusLabel");
    statusLabel.innerHTML = "Status";
    div.appendChild(statusLabel);

    div.appendChild(document.createElement("br"));

    let status = document.createElement("select");
    status.classList.add("status");

    let statusBegin = document.createElement("option");
    statusBegin.innerHTML = "To Initialise";
    status.appendChild(statusBegin);

    let statusInProgress = document.createElement("option");
    statusInProgress.innerHTML = "In Progress";
    status.appendChild(statusInProgress);

    let statusFinished = document.createElement("option");
    statusFinished.innerHTML = "Finished";
    status.appendChild(statusFinished);
    div.appendChild(status);

    div.appendChild(document.createElement("br"));

    let products = document.createElement("div");
    products.classList.add("products");
    div.appendChild(products);
    
    phaseSector.appendChild(div);

    // Deleting the phase
    let deleteBtnAction = document.getElementsByClassName("deletePhase");

    for(let i = 0; i < deleteBtnAction.length; i++){
        deleteBtnAction[i].addEventListener("click", function() {
            let parent = this.parentNode;
            parent.remove();
        });
    }

    // Adding products to the phase
    let addBtnAction = document.getElementsByClassName("addProduct");
    for(let i = addBtnAction.length - 1; i < addBtnAction.length; i++){
        addBtnAction[i].addEventListener("click", function() {
            let product = this.parentNode.children[17];

            let label = document.createElement("label");
            label.classList.add("productNumber");
            label.innerHTML = "number";
            product.appendChild(label);

            let productName = document.createElement("input");
            productName.type = "text";
            productName.placeholder = "Product name...";
            productName.classList.add("phaseInput");
            productName.classList.add("phaseName");
            product.appendChild(productName);

            let toDeliver = document.createElement("input");
            toDeliver.type = "text";
            toDeliver.placeholder = "Product to deliver";
            toDeliver.classList.add("phaseInput");
            toDeliver.classList.add("phaseName");
            product.appendChild(toDeliver);

            let status = document.createElement("select");
            status.classList.add("status");

            let statusBegin = document.createElement("option");
            statusBegin.innerHTML = "To Initialise";
            status.appendChild(statusBegin);

            let statusInProgress = document.createElement("option");
            statusInProgress.innerHTML = "In Progress";
            status.appendChild(statusInProgress);

            let statusFinished = document.createElement("option");
            statusFinished.innerHTML = "Finished";
            status.appendChild(statusFinished);
            product.appendChild(status);

            product.appendChild(document.createElement("br"));

            let startProductLabel = document.createElement("label");
            startProductLabel.classList.add("productNumber");
            startProductLabel.innerHTML = "Start";
            product.appendChild(startProductLabel);

            let endProductLabel = document.createElement("label");
            endProductLabel.classList.add("productNumber");
            endProductLabel.innerHTML = "End";
            product.appendChild(endProductLabel);

            product.appendChild(document.createElement("br"));

            let startDate = document.createElement("input");
            startDate.type = "date";
            startDate.classList.add("phaseInput");
            startDate.classList.add("dateLabel");
            product.appendChild(startDate);

            let endDate = document.createElement("input");
            endDate.type = "date";
            endDate.classList.add("phaseInput");
            endDate.classList.add("dateLabel");
            product.appendChild(endDate);

            product.appendChild(document.createElement("br"));
        });
    }
});