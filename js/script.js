let phaseSector = document.getElementById("phases");

const planningObject = {
  Id: 0,
  Name: "phase",
  RequiredBeforeStart: "",
  Status: "",
  Start: new Date(),
  End: new Date()
};

// add new/extra phase
document.getElementById("addPhase").addEventListener("click", function () {
  // unhide convert to .csv button
  document.getElementsByClassName("hidden")[0].style.display = "block";

  let div              = document.createElement("div");
  let number           = document.getElementsByClassName("phase").length;
  let phaseNumber      = number + 1;
  let phaseCode        = document.createElement("h3");
  let phaseName        = document.createElement("input");
  let deleteBtn        = document.createElement("button");
  let breakline        = document.createElement("div");
  let startLabel       = document.createElement("label");
  let endLabel         = document.createElement("label");
  let startDate        = document.createElement("input");
  let addProduct       = document.createElement("button");
  let endDate          = document.createElement("input");
  let break2           = document.createElement("div");
  let status           = document.createElement("select");
  let placeholder      = document.createElement("option");
  let statusBegin      = document.createElement("option");
  let statusInProgress = document.createElement("option");
  let statusFinished   = document.createElement("option");
  let products         = document.createElement("div");

  div.classList.add("phase");

  phaseCode.classList.add("phaseNumber");
  phaseCode.innerHTML = phaseNumber;
  div.appendChild(phaseCode);

  phaseName.type        = "text";
  phaseName.placeholder = "Insert phase name.";
  phaseName.classList.add("phaseInput");
  phaseName.classList.add("phaseName");
  div.appendChild(phaseName);

  deleteBtn.innerHTML = "Delete this phase";
  deleteBtn.classList.add("deletePhase");
  div.appendChild(deleteBtn);

  breakline.classList.add("phaseBR");
  div.appendChild(breakline);

  startLabel.classList.add("dateLabel");
  startLabel.innerHTML = "Start date";
  div.appendChild(startLabel);

  endLabel.classList.add("dateLabel");
  endLabel.innerHTML = "End date";
  div.appendChild(endLabel);

  div.appendChild(document.createElement("br"));

  startDate.type = "date";
  startDate.classList.add("phaseInput");
  startDate.classList.add("startDate");
  div.appendChild(startDate);

  addProduct.innerHTML = "Add a product";
  addProduct.classList.add("addProduct");
  div.appendChild(addProduct);

  endDate.type = "date";
  endDate.classList.add("phaseInput");
  endDate.classList.add("endDate");
  div.appendChild(endDate);

  break2.classList.add("phaseBR");
  div.appendChild(break2);

  status.classList.add("status");

  placeholder.disabled  = true;
  placeholder.selected;
  placeholder.innerHTML = "Select current phase";
  status.appendChild(placeholder);

  statusBegin.innerHTML = "To Initialise";
  status.appendChild(statusBegin);

  statusInProgress.innerHTML = "In Progress";
  status.appendChild(statusInProgress);

  statusFinished.innerHTML = "Finished";
  status.appendChild(statusFinished);
  div.appendChild(status);

  div.appendChild(document.createElement("br"));

  products.classList.add("products");
  div.appendChild(products);

  phaseSector.appendChild(div);

  // Deleting the phase
  let deleteBtnAction = document.getElementsByClassName("deletePhase");

  for (let i = 0; i < deleteBtnAction.length; i++) {
    deleteBtnAction[i].addEventListener("click", function () {
      let parent = this.parentNode;
      parent.remove();
    });
  }

  // Adding products to the phase
  let addBtnAction = document.getElementsByClassName("addProduct");
  for (let i = addBtnAction.length - 1; i < addBtnAction.length; i++) {
    addBtnAction[i].addEventListener("click", function () {
      let product           = this.parentNode.children[13];
      let label             = document.createElement("label");
      let productName       = document.createElement("input");
      let toDeliver         = document.createElement("input");
      let status            = document.createElement("select");
      let placeholder       = document.createElement("option");
      let statusBegin       = document.createElement("option");
      let statusInProgress  = document.createElement("option");
      let statusFinished    = document.createElement("option");
      let startProductLabel = document.createElement("label");
      let endProductLabel   = document.createElement("label");
      let startDate         = document.createElement("input");
      let endDate           = document.createElement("input");
      let break3            = document.createElement("div");

      label.classList.add("productNumber");
      label.innerHTML = productNumber(product);
      product.appendChild(label);

      productName.type        = "text";
      productName.placeholder = "Product name...";
      productName.classList.add("phaseInput");
      productName.classList.add("phaseName");
      product.appendChild(productName);

      product.appendChild(document.createElement("br"));

      toDeliver.type        = "text";
      toDeliver.placeholder = "Required before start:";
      toDeliver.classList.add("phaseInput");
      toDeliver.classList.add("phaseName");
      toDeliver.classList.add("toDeliver");
      product.appendChild(toDeliver);

      status.classList.add("status");

      placeholder.disabled  = true;
      placeholder.selected;
      placeholder.innerHTML = "Select current phase";
      status.appendChild(placeholder);

      statusBegin.innerHTML = "To Initialise";
      status.appendChild(statusBegin);

      statusInProgress.innerHTML = "In Progress";
      status.appendChild(statusInProgress);

      statusFinished.innerHTML = "Finished";
      status.appendChild(statusFinished);
      product.appendChild(status);

      product.appendChild(document.createElement("br"));

      startProductLabel.classList.add("dateLabel");
      startProductLabel.innerHTML = "Start date";
      product.appendChild(startProductLabel);

      endProductLabel.classList.add("dateLabel");
      endProductLabel.innerHTML = "End date";
      product.appendChild(endProductLabel);

      product.appendChild(document.createElement("br"));

      startDate.type = "date";
      startDate.classList.add("phaseInput");
      startDate.classList.add("startDate");
      product.appendChild(startDate);

      endDate.type = "date";
      endDate.classList.add("phaseInput");
      endDate.classList.add("endDate");
      product.appendChild(endDate);

      product.appendChild(document.createElement("br"));

      break3.classList.add("phaseBR");
      div.appendChild(break3);
    });
  }
});

function productNumber(parent) {
  return `${parent.parentNode.children[0].lastChild.data[0]}.${
    1 + parent.childElementCount / 12
  }`;
}

// put all arrays and products in to a convertable array
document.getElementById("export").addEventListener("click", function () {
  let jsonArray = new Array();

  for (let i = 0; i < document.getElementsByClassName("phase").length; i++) {
    let phase  = document.getElementsByClassName("phase")[i];
    let object = Object.create(planningObject);

    object.Id     = parseFloat(phase.children[0].innerHTML);
    object.Name   = phase.children[1].value;
    object.Status = phase.children[11].value;
    object.Start  = phase.children[7].value;
    object.End    = phase.children[9].value;

    jsonArray.push(object);
    let product = phase.children[13].children;
    if(product.length > 0){
      for (let j = 0; j < product.length / 12; j++) {
        let object     = Object.create(planningObject);
        object.Id      = parseFloat(product[(j*12)+0].innerHTML);
        object.Name    = product[(j*12)+1].value;
        object.RequiredBeforeStart = product[(j*12)+3].value;
        object.Status  = product[(j*12)+4].value;
        object.Start   = product[(j*12)+9].value;
        object.End     = product[(j*12)+10].value;

        jsonArray.push(object);
      }
    }
  }

  convertToCSV(jsonArray);
});

// convert the final array to .csv
function convertToCSV(json) {
  json[0]["RequiredBeforeStart"] = "";
  let fields   = Object.keys(json[0]);
  let replacer = function(key, value) { return value === null ? "" : value }
  let csv      = json.map(function(row){
    return fields.map(function(fieldName){
      return JSON.stringify(row[fieldName], replacer)
    }).join(",")
  });
  csv.unshift(fields.join(",")); // add header column
  csv = csv.join("\r\n");

  // download csv file with project name as file name
  let downloadName = document.getElementById("projectName").value;

  let pom = document.createElement("a");
  pom.setAttribute("href", "data:text/csv;charset=utf-8," +
    encodeURIComponent(csv));
  pom.setAttribute("download", downloadName + ".csv");
  pom.click();
}