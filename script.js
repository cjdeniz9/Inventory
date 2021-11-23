const dropDownMenu = document.querySelector(".menu_btn");

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
const btnCancel = document.querySelector(".cancel_btn");
const editRow = document.querySelector(".edit_row");

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
    document.querySelector("nav ul").style.display = "block";
  } else {
    document.querySelector("nav ul").style.display = "none";
  }
}

// const navSlide = () => {
const menu = document.querySelector(".drop_down_menu");
const nav = document.querySelector(".nav_links");
const navBackground = document.querySelector(".menu_background");
const body = document.querySelector("body");

if (menu) {
  menu.addEventListener("click", function () {
    nav.classList.toggle("nav_active");
    navBackground.classList.toggle("nav_active");
    body.classList.toggle("no_scroll");
  });

  navBackground.addEventListener("click", function () {
    nav.classList.toggle("nav_active");
    navBackground.classList.toggle("nav_active");
    body.classList.toggle("no_scroll");
  });
}

const userMenu = document.querySelector(".nav_menu_mobile");
const userNav = document.querySelector(".user_nav_mobile_content");
const userBackground = document.querySelector(".user_menu_background");

if (userMenu) {
  userMenu.addEventListener("click", function () {
    userNav.classList.toggle("user_nav_active");
    userBackground.classList.toggle("user_nav_active");
    body.classList.toggle("no_scroll");
  });

  userBackground.addEventListener("click", function () {
    userNav.classList.toggle("user_nav_active");
    userBackground.classList.toggle("user_nav_active");
    body.classList.toggle("no_scroll");
  });
}
// };

// navSlide();

// const userNavSlide = () => {
//   const navMenu = document.querySelector(".drop_nav");
//   const userNav = document.querySelector(".user_nav");
//   const navBackground = document.querySelector(".menu_background");
//   const body = document.querySelector("body");

//   navMenu.addEventListener("click", function () {
//     userNav.classList.toggle("nav_active");
//     navBackground.classList.toggle("nav_active");
//     body.classList.toggle("no_scroll");
//   });

//   navBackground.addEventListener("click", function () {
//     nav.classList.toggle("nav_active");
//     navBackground.classList.toggle("nav_active");
//     body.classList.toggle("no_scroll");
//   });
// };

// userNavSlide();

// function displayToggle() {
//   if (document.querySelector(".option_container").style.opacity === "0") {
//     document.querySelector(".option_container").style.opacity = "1";
//   } else {
//     document.querySelector(".option_container").style.opacity = "0";
//   }
// }

// When clicked input form is visible
openForm.addEventListener("click", () => {
  productName.value = "";
  productBrand.value = "";
  productSize.value = "";
  productStyleId.value = "";
  productStatus.value = "";
  purchaseDate.value = "";
  soldDate.value = "";
  productPrice.value = "";
  productRoi.value = "";
  productCondition.value = "";
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

// Event Listener for Form
submitForm.addEventListener("click", function (e) {
  //Not needed
  // e.preventDefault();

  // Input fields required
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
  var conditionCell = newRow.insertCell(9);

  // Formats date
  var inputPurchaseDate = new Date(purchaseDate.value);
  var formattedPurchaseDate =
    inputPurchaseDate.getMonth() +
    1 +
    "/" +
    (inputPurchaseDate.getDate() + 1) +
    "/" +
    inputPurchaseDate.getFullYear();

  var inputSoldDate = new Date(soldDate.value);
  var month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][
    inputSoldDate.getMonth()
  ];
  var formattedSoldDate =
    month +
    "/" +
    (inputSoldDate.getDate() + 1) +
    "/" +
    inputSoldDate.getFullYear();

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

  if (soldDate.value == "") {
    soldCell.innerHTML = "";
  }

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

  console.log(productStatus.value);

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

  // roi.appendChild(roiPercentage);

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

  // const btnOptions = document.createElement("button");
  // btnOptions.classList.add("options_btn");
  // btnOptions.setAttribute("onclick", "displayToggle()");
  // btnOptions.innerHTML = "...";

  const optionContainer = document.createElement("div");
  optionContainer.classList.add("option_container");
  // optionContainer.classList.add("hidden");

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("edit_btn");
  btnEdit.innerHTML = `<i class="fas fa-pen"></i>`;

  // Create delete row button for each row
  const clearRowAll = document.createElement("button");
  clearRowAll.classList.add("clear_row_all");
  clearRowAll.classList.add("fas");
  clearRowAll.classList.add("fa-trash");

  newRow.append(optionContainer);

  optionContainer.appendChild(btnEdit);
  optionContainer.appendChild(clearRowAll);

  // btnOptions.addEventListener("click", function () {
  //   if (document.querySelector(".option_container").style.opacity === "0") {
  //     document.querySelector(".option_container").style.opacity = "1";
  //   } else {
  //     document.querySelector(".option_container").style.opacity = "0";
  //   }
  // });

  // btnOptions.addEventListener("click", function () {
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

    noData();
    scrollPosition();
  });

  btnEdit.addEventListener("click", function () {
    var table = document.querySelector(".table_inventory");

    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        rIndex = this.rowIndex;
        productName.value = this.cells[0].innerHTML;
        productBrand.value = this.cells[1].innerHTML;
        productSize.value = this.cells[2].innerHTML;
        productStyleId.value = this.cells[3].innerHTML;
        productStatus.value = this.cells[4].innerHTML;
        var pDateValue = new Date(this.cells[5].innerHTML);
        var formattingPDate =
          pDateValue.getFullYear() +
          "-" +
          ("0" + (pDateValue.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + pDateValue.getDate()).slice(-2);
        purchaseDate.value = formattingPDate;
        var sDateValue = new Date(this.cells[6].innerHTML);
        var formattingSDate =
          sDateValue.getFullYear() +
          "-" +
          ("0" + (sDateValue.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + sDateValue.getDate()).slice(-2);
        soldDate.value = formattingSDate;
        productPrice.value = this.cells[7].innerHTML.replace(pattern, "");
        productRoi.value = this.cells[8].innerHTML.replace(pattern, "");
        productCondition.value = this.cells[9].innerHTML;
      };
    }

    btnCancel.addEventListener("click", function () {
      productName.value = "";
      productBrand.value = "";
      productSize.value = "";
      productStyleId.value = "";
      productStatus.value = "";
      purchaseDate.value = "";
      soldDate.value = "";
      productPrice.value = "";
      productRoi.value = "";
      productCondition.value = "";

      document.querySelector(".form_popup").style.display = "none";
      document.querySelector(".form_popup_background").style.display = "none";
      document.querySelector(".form_heading").style.display = "block";
      document.querySelector(".edit_heading").style.display = "none";
      document.querySelector(".form_buttons").style.display = "flex";
      document.querySelector(".edit_btns").style.display = "none";
    });

    editRow.addEventListener("click", function () {
      table.rows[rIndex].cells[0].innerHTML = productName.value;
      table.rows[rIndex].cells[1].innerHTML = productBrand.value;
      table.rows[rIndex].cells[2].innerHTML = productSize.value;
      table.rows[rIndex].cells[3].innerHTML = productStyleId.value;
      table.rows[rIndex].cells[4].innerHTML = productStatus.value;
      table.rows[rIndex].cells[5].innerHTML = formattedPurchaseDate;
      table.rows[rIndex].cells[6].innerHTML = formattedSoldDate;
      table.rows[rIndex].cells[7].innerHTML = `${formatter.format(
        productPrice.value
      )}`;
      table.rows[rIndex].cells[8].innerHTML = `${formatter.format(
        productRoi.value
      )}`;
      table.rows[rIndex].cells[9].innerHTML = productCondition.value;

      if (soldDate.value == "") {
        soldCell.innerHTML = "";
      }

      if (table.rows[rIndex].cells[8].innerHTML.replace(pattern, "") >= 1) {
        roiCell.classList.add("profit");
      } else if (
        table.rows[rIndex].cells[8].innerHTML.replace(pattern, "") == 0
      ) {
        roiCell.classList.add("neutral");
      } else {
        roiCell.classList.add("lost");
      }

      var updatedPriceTd = document.querySelectorAll(".product_price");
      var updatedRoiTd = document.querySelectorAll(".product_roi");

      var updatedSumPrice = 0;
      var updatedSumRoi = 0;

      //Goes through each price td to get the sum of total price
      for (var i = 1; i < updatedPriceTd.length; i++) {
        updatedSumPrice += parseFloat(
          updatedPriceTd[i].innerHTML.replace(pattern, "")
        );
      }

      //Goes through each roi td to get the sum of roi price
      for (var i = 1; i < updatedRoiTd.length; i++) {
        updatedSumRoi += parseFloat(
          updatedRoiTd[i].innerHTML.replace(pattern, "")
        );
      }

      //Sets the totalSpending innerHTML to the sumPrice of table
      //Using formatter to convert value in currency(USD)
      totalSpendings.innerHTML = `${formatter.format(updatedSumPrice)}`;

      //Sets the roi innerHTML to the sumRoi of table
      //Using formatter to convert value in currency(USD)
      roi.innerHTML = `${formatter.format(updatedSumRoi)}`;

      document.querySelector(".form_heading").style.display = "block";
      document.querySelector(".edit_heading").style.display = "none";
      document.querySelector(".edit_btns").style.display = "none";
      document.querySelector(".form_buttons").style.display = "flex";
      document.querySelector(".form_popup").style.display = "none";
      document.querySelector(".form_popup_background").style.display = "none";
    });

    document.querySelector(".form_popup").style.display = "block";
    document.querySelector(".form_popup_background").style.display = "block";
    document.querySelector(".form_heading").style.display = "none";
    document.querySelector(".edit_heading").style.display = "block";
    document.querySelector(".form_buttons").style.display = "none";
    document.querySelector(".edit_btns").style.display = "flex";
  });

  // });

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
  // clearRowAll.addEventListener("click", function (e) {
  //   if (!e.target.classList.contains("clear_row_all")) {
  //     return;
  //   }
  //   const btn = e.target;
  //   btn.closest("tr").remove();
  //   productCount.innerHTML = tableInventory.rows.length - 1;
  //   totalSpendings.innerHTML = formatter.format(
  //     totalSpendings.innerHTML.replace(pattern, "") -
  //       priceCell.innerHTML.replace(pattern, "")
  //   );
  //   roi.innerHTML = formatter.format(
  //     roi.innerHTML.replace(pattern, "") -
  //       roiCell.innerHTML.replace(pattern, "")
  //   );

  //   if (roi.innerHTML.replace(pattern, "") > "0.00") {
  //     roi.classList.remove("lost");
  //     roi.classList.add("profit");
  //   } else if (roi.innerHTML.replace(pattern, "") < "0.00") {
  //     roi.classList.remove("profit");
  //     roi.classList.add("lost");
  //   } else {
  //     roi.classList.remove("profit");
  //     roi.classList.remove("lost");
  //     roi.classList.add("neutral");
  //   }
  // });

  // Clear table excluding first row and resets the # of Products count
  clearTable.addEventListener("click", function () {
    while (tableInventory.rows.length > 1) {
      tableInventory.deleteRow(1);
      productCount.innerHTML = 0;
      totalSpendings.innerHTML = "$0";
      roi.innerHTML = "$0";
      roiPercentage.innerHTML = "0%";
      roi.classList.add("neutral");
      roiPercentage.add("neutral");
    }

    noData();
    scrollPosition();
  });

  // btnEdit.addEventListener("click", function () {

  //   var table = document.querySelector(".table_inventory"),
  //     rIndex;

  //   for (var i = 1; i < table.rows.length; i++) {
  //     table.rows[i].onclick = function () {
  //       rIndex = this.rowIndex;
  //       productName.value = this.cells[0].innerHTML;
  //       productBrand.value = this.cells[1].innerHTML;
  //       productSize.value = this.cells[2].innerHTML;
  //       productStyleId.value = this.cells[3].innerHTML;
  //       productStatus.value = this.cells[4].innerHTML;
  //       var pDateValue = new Date(this.cells[5].innerHTML);
  //       var formattingPDate =
  //         pDateValue.getFullYear() +
  //         "-" +
  //         ("0" + (pDateValue.getMonth() + 1)).slice(-2) +
  //         "-" +
  //         ("0" + pDateValue.getDate()).slice(-2);
  //       purchaseDate.value = formattingPDate;
  //       var sDateValue = new Date(this.cells[6].innerHTML);
  //       var formattingSDate =
  //         sDateValue.getFullYear() +
  //         "-" +
  //         ("0" + (sDateValue.getMonth() + 1)).slice(-2) +
  //         "-" +
  //         ("0" + sDateValue.getDate()).slice(-2);
  //       soldDate.value = formattingSDate;
  //       productPrice.value = this.cells[7].innerHTML.replace(pattern, "");
  //       productRoi.value = this.cells[8].innerHTML.replace(pattern, "");
  //       productCondition.value = this.cells[9].innerHTML;
  //     };
  //   }

  //   btnCancel.addEventListener("click", function () {
  //     productName.value = "";
  //     productBrand.value = "";
  //     productSize.value = "";
  //     productStyleId.value = "";
  //     productStatus.value = "";
  //     purchaseDate.value = "";
  //     soldDate.value = "";
  //     productPrice.value = "";
  //     productRoi.value = "";
  //     productCondition.value = "";

  //     document.querySelector(".form_popup").style.display = "none";
  //     document.querySelector(".form_popup_background").style.display = "none";
  //     document.querySelector(".form_buttons").style.display = "flex";
  //     document.querySelector(".edit_btns").style.display = "none";
  //   });

  //   //Edit row
  //   editRow.addEventListener("click", function () {
  //     table.rows[rIndex].cells[0].innerHTML = productName.value;
  //     table.rows[rIndex].cells[1].innerHTML = productBrand.value;
  //     table.rows[rIndex].cells[2].innerHTML = productSize.value;
  //     table.rows[rIndex].cells[3].innerHTML = productStyleId.value;
  //     table.rows[rIndex].cells[4].innerHTML = productStatus.value;
  //     table.rows[rIndex].cells[5].innerHTML = purchaseDate.value;
  //     table.rows[rIndex].cells[6].innerHTML = soldDate.value;
  //     table.rows[rIndex].cells[7].innerHTML = productPrice.value;
  //     table.rows[rIndex].cells[8].innerHTML = productRoi.value;
  //     table.rows[rIndex].cells[9].innerHTML = productCondition.value;

  //     document.querySelector(".form_popup").style.display = "none";
  //     document.querySelector(".form_popup_background").style.display = "none";
  //   });

  //   document.querySelector(".form_popup").style.display = "block";
  //   document.querySelector(".form_popup_background").style.display = "block";
  //   document.querySelector(".form_buttons").style.display = "none";
  //   document.querySelector(".edit_btns").style.display = "flex";
  // });

  // [].slice
  //   .call(document.querySelectorAll(".table_inventory tr"), 1)
  //   .forEach(function (row) {
  //     row.addEventListener("click", function () {
  //       var ths = document.querySelectorAll(".table_inventory th");
  //       var obj = [].reduce.call(
  //         ths,
  //         function (obj, th, i) {
  //           obj[th.textContent] = row.cells[i].textContent;
  //           return obj;
  //         },
  //         {}
  //       );
  //       const nameValue = row.cells[0].textContent;
  //       const brandValue = row.cells[1].textContent;
  //       const sizeValue = row.cells[2].textContent;
  //       const styleIdValue = row.cells[3].textContent;
  //       const statusValue = row.cells[4].textContent;
  //       var pDateValue = new Date(row.cells[5].textContent);
  //       var formattingPDate =
  //         pDateValue.getFullYear() +
  //         "-" +
  //         ("0" + (pDateValue.getMonth() + 1)).slice(-2) +
  //         "-" +
  //         ("0" + pDateValue.getDate()).slice(-2);
  //       var sDateValue = new Date(row.cells[6].textContent);
  //       var formattingSDate =
  //         sDateValue.getFullYear() +
  //         "-" +
  //         ("0" + (sDateValue.getMonth() + 1)).slice(-2) +
  //         "-" +
  //         ("0" + sDateValue.getDate()).slice(-2);
  //       const priceValue = row.cells[7].textContent.replace(pattern, "");
  //       const roiValue = row.cells[8].textContent.replace(pattern, "");
  //       const conditionValue = row.cells[9].textContent;

  //       productName.value = nameValue;
  //       productBrand.value = brandValue;
  //       productSize.value = sizeValue;
  //       productStyleId.value = styleIdValue;
  //       productStatus.value = statusValue;
  //       purchaseDate.value = formattingPDate;
  //       soldDate.value = formattingSDate;
  //       productPrice.value = priceValue;
  //       productRoi.value = roiValue;
  //       productCondition.value = conditionValue;

  //       row.document.querySelector(".product_name_td").innerHTML =
  //         productName.value;

  //       sele
  //     });
  //   });

  tableInventory.append(newRow);

  // nameCell.append(clearRow);
  // newRow.append(btnOptions);
  // newRow.appendChild(btnOptions);
  // roiCell.after(deleteRow);
  //   tableInventory.innerHTML = newRow;

  noData();
  scrollPosition();

  document.querySelector(".product_name").style.borderColor = "#d3d3d3";
  document.querySelector(".product_date").style.borderColor = "#d3d3d3";
  document.querySelector(".product_price").style.borderColor = "#d3d3d3";
  document.querySelector(".r_name").style.opacity = "0";
  document.querySelector(".r_date").style.opacity = "0";
  document.querySelector(".r_price").style.opacity = "0";

  document.querySelector(".form_popup_background").style.display = "none";
});

function noData() {
  if (productCount.innerHTML >= 1) {
    document.querySelector(".empty_table").style.display = "none";
  } else {
    document.querySelector(".empty_table").style.display = "block";
  }
}

function scrollPosition() {
  if (productCount.innerHTML >= 1) {
    document.querySelector(".table_scroll").style.paddingBottom = "0rem";
  } else {
    document.querySelector(".table_scroll").style.paddingBottom = "37.5rem";
  }
}

// var selectedRow = null;

// function onFormSubmit() {
//   event.preventDefault();
//   var formData = readFormData();
//   if (selectedRow === null) {
//     insertData(formData);
//   } else {
//     updateRecord(formData);
//   }
// }

// function readFormData() {
//   var formData = {};
//   formData[".product_name"] = document.querySelector(".product_name").value;
//   formData[".product_brand"] = document.querySelector(".product_brand").value;
//   formData[".product_size"] = document.querySelector(".product_size").value;
//   formData[".product_style_id"] =
//     document.querySelector(".product_style_id").value;
//   formData[".product_status"] = document.querySelector(".product_status").value;
//   formData[".product_date"] = document.querySelector(".product_date").value;
//   formData[".product_date_sold"] =
//     document.querySelector(".product_date_sold").value;
//   formData[".product_price"] = document.querySelector(".product_price").value;
//   formData[".product_roi"] = document.querySelector(".product_roi").value;
//   formData[".product_condition"] =
//     document.querySelector(".product_condition").value;
//   return formData;
// }

// function insertNewRecord(data) {
//   var table = document
//     .querySelector(".table_inventory")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   var cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.productName;
//   var cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.productBrand;
//   var cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.productSize;
//   var cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.productStyleId;
//   var cell5 = newRow.insertCell(4);
//   cell51.innerHTML = data.productStatus;
//   var cell6 = newRow.insertCell(5);
//   cell6.innerHTML = data.purchaseDate;
//   var cell7 = newRow.insertCell(6);
//   cell7.innerHTML = data.soldCell;
//   var cell8 = newRow.insertCell(7);
//   cell8.innerHTML = data.productPrice;
//   var cell9 = newRow.insertCell(8);
//   cell9.innerHTML = data.productRoi;
//   var cell10 = newRow.insertCell(9);
//   cell10.innerHTML = data.productCondition;
// }

// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.querySelector(".product_name").value =
//     selectedRow.cells[0].innerHTML;
// }

// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.productName;
// }
