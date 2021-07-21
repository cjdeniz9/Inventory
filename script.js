// const dropDownMenu = document.querySelector(".menu_btn");

const productCount = document.querySelector(".product_count");
const totalSpendings = document.querySelector(".total_spendings");
const roi = document.querySelector(".roi");
const totalPercent = document.querySelector(".total_percent");

const openForm = document.querySelector(".open_form");
const closeForm = document.querySelector(".close_form");
const formBackground = document.querySelector(".form_popup_background");
const formPopup = document.querySelector(".form_popup");
const submitForm = document.querySelector(".submit_form");

const inventoryForm = document.querySelector(".inventory_form");

const clearTable = document.querySelector(".clear_table");

const purchaseDate = document.querySelector(".product_date");
const soldDate = document.querySelector(".product_date_sold");
const productName = document.querySelector(".product_name");
const productPrice = document.querySelector(".product_price");
const productSize = document.querySelector(".product_size");
const productRoi = document.querySelector(".product_roi");

// const a = document.forms["Form"]["name"].value;

const tableInventory = document.querySelector(".table_inventory");

const roiHeading = document.querySelector(".roi_heading");

//Only allows numbers
var pattern = /[^0-9.-]+/g;

// Formats numbers into currency
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Checks if menu icon is clicked and displays visible if true
function checkMenuStatus() {
  if (document.querySelector(".menu_btn").checked) {
    document.querySelector(".nav_bar").style.display = "block";
  } else {
    document.querySelector(".nav_bar").style.display = "none";
  }
}

// When clicked input form is visible
openForm.addEventListener("click", () => {
  document.querySelector(".form_popup").style.display = "block";
  document.querySelector(".form_popup_background").style.display = "block";
});
// When clicked input form is not visible
closeForm.addEventListener("click", () => {
  document.querySelector(".form_popup").style.display = "none";
  document.querySelector(".form_popup_background").style.display = "none";
});

// Requires input to be filled out
// function emptyField() {
//   document.querySelector(".product_date").required = true;
//   document.querySelector(".product_date_sold").required = true;
//   document.querySelector(".product_name").required = true;
//   document.querySelector(".product_price").required = true;
//   document.querySelector(".product_size").required = true;
//   document.querySelector(".product_roi").required = true;
// }

// Event Listener for Form
submitForm.addEventListener("click", function (e) {
  //Not needed
  // e.preventDefault();

  // Creates a in row when button is click
  var newRow = tableInventory.insertRow(1);

  // Fills in each cell for new row
  var purchasedCell = newRow.insertCell(0);
  var soldCell = newRow.insertCell(1);
  var nameCell = newRow.insertCell(2);
  var priceCell = newRow.insertCell(3);
  var sizeCell = newRow.insertCell(4);
  var roiCell = newRow.insertCell(-1);

  //Gets input value and places as cell innerHTML
  purchasedCell.innerHTML = purchaseDate.value;
  soldCell.innerHTML = soldDate.value;
  nameCell.innerHTML = productName.value;
  priceCell.innerHTML = `${formatter.format(productPrice.value)}`;
  sizeCell.innerHTML = productSize.value;
  roiCell.innerHTML = `${formatter.format(productRoi.value)}`;

  //Give cell a class name
  purchasedCell.classList.add("date_purchased_td");
  soldCell.classList.add("date_sold_td");
  nameCell.classList.add("product_name_td");
  priceCell.classList.add("product_price");
  sizeCell.classList.add("product_size_td");
  roiCell.classList.add("product_roi");

  //Adds class name to roiCell depending on its value to change text color
  if (productRoi.value >= 1) {
    roiCell.classList.add("profit");
  } else if (productRoi.value == 0) {
    roiCell.classList.add("neutral");
  } else {
    roiCell.classList.add("lost");
  }

  //Created a var to get all td under Price and ROI column
  var priceTd = document.querySelectorAll(".product_price");
  var roiTd = document.querySelectorAll(".product_roi");

  //Created var to each the sum total of each column a base number of 0
  var sumPrice = 0;
  var sumRoi = 0;

  //Goes through each price td to get the sum of total price
  for (var i = 1; i < priceTd.length; i++) {
    sumPrice += parseFloat(priceTd[i].innerHTML.replace(pattern, ""));
  }

  //Sets the totalSpending innerHTML to the sumPrice of table
  //Using formatter to convert value in currency(USD)
  totalSpendings.innerHTML = `${formatter.format(sumPrice)}`;

  //Goes through each roi td to get the sum of roi price
  for (var i = 1; i < roiTd.length; i++) {
    sumRoi += parseFloat(roiTd[i].innerHTML.replace(pattern, ""));
  }

  //Sets the roi innerHTML to the sumRoi of table
  //Using formatter to convert value in currency(USD)
  roi.innerHTML = `${formatter.format(sumRoi)}`;

  //Adds class name to roi depending on its value to change text color
  if (roi.innerHTML.replace(pattern, "") > "1") {
    roi.classList.remove("neutral");
    roi.classList.remove("lost");
    roi.classList.add("profit");
  } else if (roi.innerHTML.replace(pattern, "") < "0") {
    roi.classList.remove("neutral");
    roi.classList.add("lost");
  } else {
    roi.classList.add("neutral");
  }

  // Not need as of now
  // var roiPercent = (parseFloat(sumRoi / sumPrice) * 100).toFixed(2);

  // const roiPercentage = document.createElement("h6");
  // roiPercentage.classList.add("percent");
  // roiPercentage.innerText = `${roiPercent}%`;

  // totalPercent.append(roiPercentage);

  // if (roiPercentage.innerHTML >= "1%") {
  //   roiPercentage.classList.add("profit");
  // } else if (roiPercentage.innerHTML < "0%") {
  //   roiPercentage.classList.add("lost");
  // } else {
  //   roiPercentage.classList.add("neutral");
  // }

  // roi.append(roiPercentage);

  // Not needed as of now
  // if (soldDate.value != "") {
  //   newRow.classList.add("product_sold");
  // }

  // Obtains table length - 1(To exclude table heading) to set product count
  productCount.innerHTML = tableInventory.rows.length - 1;

  // Clears input field on form
  purchaseDate.value = "";
  soldDate.value = "";
  productName.value = "";
  productPrice.value = "";
  productSize.value = "";
  productRoi.value = "";

  // When form is clicked, form display is changed to none
  document.querySelector(".form_popup").style.display = "none";

  // Create delete row button for each row
  const clearRow = document.createElement("button");
  clearRow.classList.add("clear_row");
  // clearRow.classList.add("fas fa-minus-circle");
  clearRow.innerHTML = "-";

  // Deletes selected row from table
  clearRow.addEventListener("click", function (e) {
    if (!e.target.classList.contains("clear_row")) {
      return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
    productCount.innerHTML = tableInventory.rows.length - 1;
    totalSpendings.innerHTML = formatter.format(
      totalSpendings.innerHTML.replace(pattern, "") -
        priceCell.innerHTML.replace(pattern, "")
    );
    roi.innerHTML = formatter.format(
      roi.innerHTML.replace(pattern, "") -
        roiCell.innerHTML.replace(pattern, "")
    );
    if (roi.innerHTML.replace(pattern, "") > "0.00") {
      roi.classList.remove("lost");
      roi.classList.add("profit");
    } else if (roi.innerHTML.replace(pattern, "") < "0") {
      roi.classList.remove("profit");
      roi.classList.add("lost");
    } else {
      roi.classList.remove("profit");
      roi.classList.remove("lost");
      roi.classList.add("neutral");
    }
  });

  // Create delete row button for each row
  const clearRowAll = document.createElement("button");
  clearRowAll.classList.add("clear_row_all");
  // clearRow.classList.add("fas fa-minus-circle");
  clearRowAll.innerHTML = "-";

  // Deletes selected row from table
  clearRowAll.addEventListener("click", function (e) {
    if (!e.target.classList.contains("clear_row_all")) {
      return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
    productCount.innerHTML = tableInventory.rows.length - 1;
    totalSpendings.innerHTML = formatter.format(
      totalSpendings.innerHTML.replace(pattern, "") -
        priceCell.innerHTML.replace(pattern, "")
    );
    roi.innerHTML = formatter.format(
      roi.innerHTML.replace(pattern, "") -
        roiCell.innerHTML.replace(pattern, "")
    );

    if (roi.innerHTML.replace(pattern, "") > "0") {
      roi.classList.remove("lost");
      roi.classList.add("profit");
    } else if (roi.innerHTML.replace(pattern, "") < "0.00") {
      roi.classList.remove("profit");
      roi.classList.add("lost");
    } else {
      roi.classList.remove("profit");
      roi.classList.remove("lost");
      roi.classList.add("neutral");
    }
  });

  // Clear table excluding first row and resets the # of Products count
  clearTable.addEventListener("click", function () {
    while (tableInventory.rows.length > 1) {
      tableInventory.deleteRow(1);
      productCount.innerHTML = 0;
      totalSpendings.innerHTML = "$0";
      roi.innerHTML = "$0";
      roi.classList.remove("lost");
      roi.classList.add("neutral");
    }
  });

  tableInventory.append(newRow);

  // console.log(newRow);

  nameCell.append(clearRow);
  purchasedCell.append(clearRowAll);
  //   tableInventory.innerHTML = newRow;

  document.querySelector(".form_popup_background").style.display = "none";
});
