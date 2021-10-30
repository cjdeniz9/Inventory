// const dropDownMenu = document.querySelector(".menu_btn");

const navBar = document.querySelector(".inventory_left");

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

const productName = document.querySelector(".product_name");
const productBrand = document.querySelector(".product_brand");
const productSize = document.querySelector(".product_size");
const productStyleId = document.querySelector(".product_style_id");
const productStatus = document.querySelector(".product_status");
const purchaseDate = document.querySelector(".product_date");
const soldDate = document.querySelector(".product_date_sold");
const productPrice = document.querySelector(".product_price");
const productRoi = document.querySelector(".product_roi");
const productCondition = document.querySelector(".product_condition");

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

function searchProduct() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector(".search_product");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table_inventory");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

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
  document.querySelector(".product_name").style.borderColor = "#d3d3d3";
  document.querySelector(".product_date").style.borderColor = "#d3d3d3";
  document.querySelector(".product_price").style.borderColor = "#d3d3d3";
  document.querySelector(".r_name").style.opacity = "0";
  document.querySelector(".r_date").style.opacity = "0";
  document.querySelector(".r_price").style.opacity = "0";
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

  //Input fields required
  if (
    productName.value === "" ||
    purchaseDate.value === "" ||
    productPrice.value === ""
  ) {
    document.querySelector(".product_name").style.borderColor = "red";
    document.querySelector(".product_date").style.borderColor = "red";
    document.querySelector(".product_price").style.borderColor = "red";
    document.querySelector(".r_name").style.opacity = "1";
    document.querySelector(".r_date").style.opacity = "1";
    document.querySelector(".r_price").style.opacity = "1";
    return false;
  }

  // Creates a in row when button is click
  var newRow = tableInventory.insertRow(1);

  // Fills in each cell for new row
  var nameCell = newRow.insertCell(0);
  var brandCell = newRow.insertCell(1);
  var sizeCell = newRow.insertCell(2);
  var styleidCell = newRow.insertCell(3);
  var statusCell = newRow.insertCell(4);
  var purchasedCell = newRow.insertCell(5);
  var soldCell = newRow.insertCell(6);
  var priceCell = newRow.insertCell(7);
  var roiCell = newRow.insertCell(8);
  var conditionCell = newRow.insertCell(-1);

  // Formats date
  var inputPurchaseDate = new Date(purchaseDate.value);
  var month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][
    inputPurchaseDate.getMonth()
  ];
  var formattedPurchaseDate =
    month +
    "/" +
    inputPurchaseDate.getDate() +
    "/" +
    inputPurchaseDate.getFullYear();

  var inputSoldDate = new Date(soldDate.value);
  var month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][
    inputSoldDate.getMonth()
  ];
  var formattedSoldDate =
    month + "/" + inputSoldDate.getDate() + "/" + inputSoldDate.getFullYear();

  //Gets input value and places as cell innerHTML
  nameCell.innerHTML = productName.value;
  brandCell.innerHTML = productBrand.value;
  sizeCell.innerHTML = productSize.value;
  styleidCell.innerHTML = productStyleId.value;
  statusCell.innerHTML = productStatus.value;
  purchasedCell.innerHTML = formattedPurchaseDate;
  soldCell.innerHTML = formattedSoldDate;
  priceCell.innerHTML = `${formatter.format(productPrice.value)}`;
  roiCell.innerHTML = `${formatter.format(productRoi.value)}`;
  conditionCell.innerHTML = productCondition.value;

  //Give cell a class name
  nameCell.classList.add("product_name_td");
  brandCell.classList.add("product_brand_td");
  sizeCell.classList.add("product_size_td");
  styleidCell.classList.add("product_style_id_td");
  statusCell.classList.add("product_status_td");
  purchasedCell.classList.add("date_purchased_td");
  soldCell.classList.add("date_sold_td");
  priceCell.classList.add("product_price");
  roiCell.classList.add("product_roi");
  conditionCell.classList.add("product_condition_td");

  if (productStatus.value === "sold" || productStatus.value === "Sold") {
    statusCell.classList.add("sold");
  } else {
    statusCell.classList.add("pending");
  }

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
  productBrand.value = "";
  productStyleId.value = "";
  productStatus.value = "";
  purchaseDate.value = "";
  soldDate.value = "";
  productName.value = "";
  productPrice.value = "";
  productSize.value = "";
  productRoi.value = "";
  productCondition.value = "";

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
  clearRowAll.innerHTML = "...";

  // const editRow = document.createElement("button");
  // const deleteRow = document.createElement("button");
  // deleteRow.classList.add("delete_row");
  // editRow.innerHTML = "Edit";
  // deleteRow.innerHTML = "Delete";

  // clearRowAll.addEventListener("click", function () {
  //   document.querySelector(".clear_row_all").style.visibility = "hidden";
  //   document.querySelector(".delete_row").style.display = "block";
  // });

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

    if (roi.innerHTML.replace(pattern, "") > "0.00") {
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
      // roi.classList.remove("lost");
      roi.classList.add("neutral");
    }
  });

  tableInventory.append(newRow);

  // console.log(newRow);

  nameCell.append(clearRow);
  conditionCell.after(clearRowAll);
  // roiCell.after(deleteRow);
  //   tableInventory.innerHTML = newRow;

  document.querySelector(".product_name").style.borderColor = "#d3d3d3";
  document.querySelector(".product_date").style.borderColor = "#d3d3d3";
  document.querySelector(".product_price").style.borderColor = "#d3d3d3";
  document.querySelector(".r_name").style.opacity = "0";
  document.querySelector(".r_date").style.opacity = "0";
  document.querySelector(".r_price").style.opacity = "0";

  document.querySelector(".form_popup_background").style.display = "none";
});
