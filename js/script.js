let phaseSector = document.getElementById("phases");

// use flexbox to get even alignment without any whitespaces
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

    let br = document.createElement("br");
    div.appendChild(br);

    let startDate = document.createElement("input");
    startDate.type = "date";
    startDate.classList.add("phaseInput");
    startDate.classList.add("startDate");
    div.appendChild(startDate);

    let addProduct = document.createElement("button");
    addProduct.innerHTML = "Add a product";
    addProduct.classList.add("deletePhase");
    div.appendChild(addProduct);

    let breakl = document.createElement("div");
    breakl.classList.add("phaseBR");
    div.appendChild(breakl);

    let endLabel = document.createElement("label");
    endLabel.classList.add("dateLabel");
    endLabel.innerHTML = "End date";
    div.appendChild(endLabel);

    let br2 = document.createElement("br");
    div.appendChild(br2);

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

    let br3 = document.createElement("br");
    div.appendChild(br3);

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
    phaseSector.appendChild(div);
});