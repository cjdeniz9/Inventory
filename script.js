const dropDownMenu = document.querySelector(".menu_btn");

const email = document.querySelector(".email_input");
const password = document.querySelector(".password_input");
const confirmPassword = document.querySelector(".confirm_password_input");

const signupBtn = document.querySelector(".signup_btn");

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
const productSize = document.querySelector(".product_size");
const productStyleId = document.querySelector(".product_style_id");
const productStatus = document.querySelector(".product_status");
const productRoi = document.querySelector(".product_roi");
const productPrice = document.querySelector(".product_price");
const purchaseDate = document.querySelector(".product_date");
const placeOfPurchase = document.querySelector(".product_place_of_purchase");
const soldDate = document.querySelector(".product_date_sold");
const productPlatform = document.querySelector(".product_platform");
const productBrand = document.querySelector(".product_brand");
const productColorway = document.querySelector(".product_colorway");
const productCondition = document.querySelector(".product_condition");

const tableInventory = document.querySelector(".table_inventory");

const roiHeading = document.querySelector(".roi_heading");

contentBox = document.querySelector(".content_box");
header = document.querySelector(".header");

const homePageContent = document.querySelector(".home_page_content");

if (homePageContent) {
  function myScrollFunc() {
    var y = window.scrollY;
    if (y >= 90) {
      contentBox.classList.add("zoom_in");
      header.classList.add("border");
    } else {
      contentBox.classList.remove("zoom_in");
      header.classList.remove("border");
    }
    if (y >= 9) {
      header.classList.add("border");
    } else {
      header.classList.remove("border");
    }
  }

  window.addEventListener("scroll", myScrollFunc);
}

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    const signupInvalidMessage = document.querySelector(
      ".signup_invalid_message"
    );
    const fieldsBlank = document.querySelector(".fields_blank");
    const emailBlank = document.querySelector(".email_blank");
    const emailInvalidPasswordBlank = document.querySelector(
      ".email_invalid_password_blank"
    );
    const emailBlankPasswordBlankConfirmPasswordInvalidMatch =
      document.querySelector(
        ".email_blank_password_blank_confirm_password_invalid_match"
      );
    const emailInvalid = document.querySelector(".email_invalid");
    const emailInvalidInvalidPasswordRequirements = document.querySelector(
      ".email_invalid_invalid_password_requirements"
    );
    const emailInvalidConfirmPasswordInvalidMatch = document.querySelector(
      ".email_invalid_confirm_password_invalid_match"
    );
    const emailInvalidInvalidPasswordRequirementsConfirmPasswordInvalidMatch =
      document.querySelector(
        ".email_invalid_invalid_password_requirements_confirm_password_invalid_match"
      );
    const emailInvalidInvalidPasswordRequirementsConfirmPasswordBlank =
      document.querySelector(
        ".email_invalid_invalid_password_requirements_confirm_password_blank"
      );
    const emailInvalidPasswordBlankConfirmPasswordInvalidMatch =
      document.querySelector(
        ".email_invalid_password_blank_confirm_password_invalid_match"
      );
    const passwordBlank = document.querySelector(".password_blank");
    const invalidPasswordRequirementsConfirmPasswordBlank =
      document.querySelector(
        ".invalid_password_requirements_confirm_password_blank"
      );
    const invalidPasswordRequirements = document.querySelector(
      ".invalid_password_requirements"
    );
    const confirmPasswordInvalidMatch = document.querySelector(
      ".confirm_password_invalid_match"
    );

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // test.classList.remove(".visible");
    signupInvalidMessage.classList.remove("visible");
    fieldsBlank.classList.remove("visible");
    emailBlank.classList.remove("visible");
    emailInvalidPasswordBlank.classList.remove("visible");
    emailBlankPasswordBlankConfirmPasswordInvalidMatch.classList.remove(
      "visible"
    );
    emailInvalid.classList.remove("visible");
    emailInvalidInvalidPasswordRequirements.classList.remove("visible");
    emailInvalidConfirmPasswordInvalidMatch.classList.remove("visible");
    emailInvalidInvalidPasswordRequirementsConfirmPasswordInvalidMatch.classList.remove(
      "visible"
    );
    emailInvalidInvalidPasswordRequirementsConfirmPasswordBlank.classList.remove(
      "visible"
    );
    emailInvalidPasswordBlankConfirmPasswordInvalidMatch.classList.remove(
      "visible"
    );
    passwordBlank.classList.remove("visible");
    invalidPasswordRequirementsConfirmPasswordBlank.classList.remove("visible");
    invalidPasswordRequirements.classList.remove("visible");
    confirmPasswordInvalidMatch.classList.remove("visible");

    if (
      email.value === "" &&
      password.value === "" &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      fieldsBlank.classList.add("visible");
    } else if (
      email.value === "" &&
      password.value != "" &&
      confirmPassword.value != ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailBlank.classList.add("visible");
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value === "" &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidPasswordBlank.classList.add("visible");
    } else if (
      email.value === "" &&
      password.value === "" &&
      confirmPassword.value != ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailBlankPasswordBlankConfirmPasswordInvalidMatch.classList.add(
        "visible"
      );
    } else if (
      email.value != "" &&
      password.value != "" &&
      confirmPassword.value != "" &&
      !email.value.match(validateEmail)
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalid.classList.add("visible");
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value != "" &&
      password.value.length <= 5 &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidInvalidPasswordRequirements.classList.add("visible");
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value != "" &&
      password.value.length >= 6 &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidConfirmPasswordInvalidMatch.classList.add("visible");
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value != "" &&
      password.value.length <= 5 &&
      confirmPassword.value != ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidInvalidPasswordRequirementsConfirmPasswordInvalidMatch.classList.add(
        "visible"
      );
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value != "" &&
      password.value.length <= 5 &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidInvalidPasswordRequirementsConfirmPasswordBlank.classList.add(
        "visible"
      );
    } else if (
      email.value != "" &&
      !email.value.match(validateEmail) &&
      password.value === "" &&
      confirmPassword.value != "" &&
      password.value != confirmPassword.value
    ) {
      signupInvalidMessage.classList.add("visible");
      emailInvalidPasswordBlankConfirmPasswordInvalidMatch.classList.add(
        "visible"
      );
    } else if (
      email.value != "" &&
      email.value.match(validateEmail) &&
      password.value === "" &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      passwordBlank.classList.add("visible");
    } else if (
      email.value != "" &&
      email.value.match(validateEmail) &&
      password.value != "" &&
      password.value.length <= 5 &&
      confirmPassword.value === ""
    ) {
      signupInvalidMessage.classList.add("visible");
      invalidPasswordRequirementsConfirmPasswordBlank.classList.add("visible");
    } else if (
      email.value != "" &&
      email.value.match(validateEmail) &&
      password.value == "" &&
      password.value.length < 6 &&
      confirmPassword.value != ""
      // password.value == confirmPassword.value
    ) {
      signupInvalidMessage.classList.add("visible");
      invalidPasswordRequirements.classList.add("visible");
    } else if (
      email.value != "" &&
      email.value.match(validateEmail) &&
      password.value != "" &&
      // confirmPassword.value != "" &&
      password.value !== confirmPassword.value
    ) {
      signupInvalidMessage.classList.add("visible");
      confirmPasswordInvalidMatch.classList.add("visible");
    } else {
      window.location.href = "login.html";
    }
  });
}

// const inViewport = (entries, observer) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
//   });
// };

// const Obs = new IntersectionObserver(inViewport);
// const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// // Attach observer to every [data-inviewport] element:
// const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
// ELs_inViewport.forEach((EL) => {
//   Obs.observe(EL, obsOptions);
// });

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

document.getElementById("status_filter").onchange = changeListener;

function changeListener() {
  var statusVal = this.value;

  var txtValue;
  table = document.querySelector(".table_inventory");
  tr = table.getElementsByTagName("tr");

  var regex = /\b(inventory|inventory_2)\b/gi;

  var soldStr = "sold";
  var listedStr = "listed";
  var unlistedStr = "unlisted";

  if (statusVal == "sold") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent.replace(regex, "").replaceAll(/\s/g, "");
        if (txtValue.toUpperCase() == soldStr.toUpperCase()) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } else if (statusVal == "listed") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent.replace(regex, "").replaceAll(/\s/g, "");
        if (txtValue.toUpperCase() == listedStr.toUpperCase()) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } else if (statusVal == "unlisted") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent.replace(regex, "").replaceAll(/\s/g, "");
        if (txtValue.toUpperCase() == unlistedStr.toUpperCase()) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } else if (statusVal == "all") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent.replace(regex, "").replaceAll(/\s/g, "");
        if (txtValue.toUpperCase() != "") {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

// if (selectedValue == "listed") {
//   alert("Please select a card type");
// }

// document.getElementById("status_filter").onchange = changeListener;

// function changeListener() {
//   var statusVal = this.value;

//   var input, filter, table, tr, td, i, txtValue;
// input = document.getElementById(".status_filter");
// filter = input.value.toUpperCase();
//   table = document.querySelector(".table_inventory");
//   tr = table.getElementsByTagName("tr");

//   var regex = /\b(inventory|inventory_2)\b/gi;
//   var word = table.cell[3].textContent
//     .replace(regex, "")
//     .replaceAll(/\s/g, "");

//   if (statusVal == "sold") {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("mylist");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[3];
//       if (td) {
//         if (td.innerHTML.toUpperCase() == "sold") {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   } else if (statusVal == "listed") {
//     document.body.style.background = "blue";
//   }
// }

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
const nav = document.querySelector(".nav_linkss");
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
if (openForm) {
  openForm.addEventListener("click", () => {
    productName.value = "";
    productSize.value = "";
    productStyleId.value = "";
    productStatus.value = "";
    productRoi.value = "";
    productPrice.value = "";
    purchaseDate.value = "";
    placeOfPurchase.value = "";
    soldDate.value = "";
    productPlatform.value = "";
    productBrand.value = "";
    productColorway.value = "";
    productCondition.value = "";
    document.querySelector(".form_popup").style.display = "block";
    document.querySelector(".form_popup_background").style.display = "block";
  });
}

// When clicked input form is not visible
if (closeForm) {
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
}

const size3 = document.querySelector(".size3");
const size35 = document.querySelector(".size35");
const size4 = document.querySelector(".size4");
const size45 = document.querySelector(".size45");
const size5 = document.querySelector(".size5");
const size55 = document.querySelector(".size55");
const size6 = document.querySelector(".size6");
const size65 = document.querySelector(".size65");
const size7 = document.querySelector(".size7");
const size75 = document.querySelector(".size75");
const size8 = document.querySelector(".size8");
const size85 = document.querySelector(".size85");
const size9 = document.querySelector(".size9");
const size95 = document.querySelector(".size95");
const size10 = document.querySelector(".size10");
const size105 = document.querySelector(".size105");
const size11 = document.querySelector(".size11");
const size115 = document.querySelector(".size115");
const size12 = document.querySelector(".size12");
const size125 = document.querySelector(".size125");
const size13 = document.querySelector(".size13");
const size135 = document.querySelector(".size135");

const sizeShoes = document.querySelector(".sizeShoes");
const sizeClothes = document.querySelector(".sizeClothes");
const sizeOther = document.querySelector(".sizeOther");

const shoeSizesFirst = document.querySelector(".shoe_sizes_first");
const shoeSizesSecond = document.querySelector(".shoe_sizes_second");
const clothesSizes = document.querySelector(".clothes_sizes");
const otherSizes = document.querySelector(".other_sizes");

sizeShoes.addEventListener("click", () => {
  sizeClothes.style.borderColor = "rgb(222, 220, 240)";
  sizeOther.style.borderColor = "rgb(222, 220, 240)";
  sizeShoes.style.borderColor = "rgb(29, 52, 183)";
  clothesSizes.style.display = "none";
  otherSizes.style.display = "none";
  shoeSizesFirst.style.display = "flex";
  shoeSizesSecond.style.display = "flex";
});

sizeClothes.addEventListener("click", () => {
  sizeShoes.style.borderColor = "rgb(222, 220, 240)";
  sizeOther.style.borderColor = "rgb(222, 220, 240)";
  sizeClothes.style.borderColor = "rgb(29, 52, 183)";
  shoeSizesFirst.style.display = "none";
  shoeSizesSecond.style.display = "none";
  otherSizes.style.display = "none";
  clothesSizes.style.display = "flex";
});

sizeOther.addEventListener("click", () => {
  sizeShoes.style.borderColor = "rgb(222, 220, 240)";
  sizeClothes.style.borderColor = "rgb(222, 220, 240)";
  sizeOther.style.borderColor = "rgb(29, 52, 183)";
  shoeSizesFirst.style.display = "none";
  shoeSizesSecond.style.display = "none";
  clothesSizes.style.display = "none";
  otherSizes.style.display = "flex";
});

document.querySelector(".size3").addEventListener("click", () => {
  productSize.value = "3";
});

document.querySelector(".size35").addEventListener("click", () => {
  productSize.value = "3.5";
});

document.querySelector(".size4").addEventListener("click", () => {
  productSize.value = "4";
});

document.querySelector(".size45").addEventListener("click", () => {
  productSize.value = "4.5";
});

document.querySelector(".size5").addEventListener("click", () => {
  productSize.value = "5";
});

document.querySelector(".size55").addEventListener("click", () => {
  productSize.value = "5.5";
});

document.querySelector(".size6").addEventListener("click", () => {
  productSize.value = "6";
});

document.querySelector(".size65").addEventListener("click", () => {
  productSize.value = "6.5";
});

document.querySelector(".size7").addEventListener("click", () => {
  productSize.value = "7";
});

document.querySelector(".size75").addEventListener("click", () => {
  productSize.value = "7.5";
});

document.querySelector(".size8").addEventListener("click", () => {
  productSize.value = "8";
});

document.querySelector(".size85").addEventListener("click", () => {
  productSize.value = "8.5";
});

document.querySelector(".size9").addEventListener("click", () => {
  productSize.value = "9";
});

document.querySelector(".size95").addEventListener("click", () => {
  productSize.value = "9.5";
});

document.querySelector(".size10").addEventListener("click", () => {
  productSize.value = "10";
});

document.querySelector(".size105").addEventListener("click", () => {
  productSize.value = "10.5";
});

document.querySelector(".size11").addEventListener("click", () => {
  productSize.value = "11";
});

document.querySelector(".size115").addEventListener("click", () => {
  productSize.value = "11.5";
});

document.querySelector(".size12").addEventListener("click", () => {
  productSize.value = "12";
});

document.querySelector(".size125").addEventListener("click", () => {
  productSize.value = "12.5";
});

document.querySelector(".size13").addEventListener("click", () => {
  productSize.value = "13";
});

document.querySelector(".size135").addEventListener("click", () => {
  productSize.value = "13.5";
});

document.querySelector(".sizeXXS").addEventListener("click", () => {
  productSize.value = "XXS";
});

document.querySelector(".sizeXS").addEventListener("click", () => {
  productSize.value = "XS";
});

document.querySelector(".sizeS").addEventListener("click", () => {
  productSize.value = "S";
});

document.querySelector(".sizeM").addEventListener("click", () => {
  productSize.value = "M";
});

document.querySelector(".sizeL").addEventListener("click", () => {
  productSize.value = "L";
});

document.querySelector(".sizeXL").addEventListener("click", () => {
  productSize.value = "XL";
});

document.querySelector(".sizeXXL").addEventListener("click", () => {
  productSize.value = "XXL";
});

document.querySelector(".sizeXXXL").addEventListener("click", () => {
  productSize.value = "XXXL";
});
document.querySelector(".sizeOS").addEventListener("click", () => {
  productSize.value = "OS";
});

document.querySelector(".sizeNA").addEventListener("click", () => {
  productSize.value = "N/A";
});

// Event Listener for Form
if (submitForm) {
  submitForm.addEventListener("click", function (e) {
    //Not needed
    // e.preventDefault();

    // Input fields required
    // if (
    //   productName.value === "" ||
    //   purchaseDate.value === "" ||
    //   productPrice.value === ""
    // ) {
    //   document.querySelector(".product_name").style.borderColor = "red";
    //   document.querySelector(".product_date").style.borderColor = "red";
    //   document.querySelector(".product_price").style.borderColor = "red";
    //   document.querySelector(".r_name").style.opacity = "1";
    //   document.querySelector(".r_date").style.opacity = "1";
    //   document.querySelector(".r_price").style.opacity = "1";
    //   return false;
    // }

    // Creates a in row when button is click
    var newRow = tableInventory.insertRow(1);

    // Fills in each cell for new row
    var nameCell = newRow.insertCell(0);
    var sizeCell = newRow.insertCell(1);
    var styleidCell = newRow.insertCell(2);
    var statusCell = newRow.insertCell(3);
    var roiCell = newRow.insertCell(4);
    var priceCell = newRow.insertCell(5);
    var purchasedCell = newRow.insertCell(6);
    var placeofCell = newRow.insertCell(7);
    var soldCell = newRow.insertCell(8);
    var platformCell = newRow.insertCell(9);
    var brandCell = newRow.insertCell(10);
    var colorwayCell = newRow.insertCell(11);
    var conditionCell = newRow.insertCell(12);

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
    sizeCell.innerHTML = productSize.value;
    styleidCell.innerHTML = productStyleId.value;
    roiCell.innerHTML = `${formatter.format(productRoi.value)}`;
    priceCell.innerHTML = `${formatter.format(productPrice.value)}`;
    purchasedCell.innerHTML = formattedPurchaseDate;
    placeofCell.innerHTML = placeOfPurchase.value;
    soldCell.innerHTML = formattedSoldDate;
    platformCell.innerHTML = productPlatform.value;
    brandCell.innerHTML = productBrand.value;
    colorwayCell.innerHTML = productColorway.value;
    conditionCell.innerHTML = productCondition.value;

    statusFormat(statusCell);

    //Sold date blank, set innerHTML blank
    if (soldDate.value == "") {
      soldCell.innerHTML = "";
    }

    //Give cell a class name
    nameCell.classList.add("product_name_td");
    sizeCell.classList.add("product_size_td");
    styleidCell.classList.add("product_style_id_td");
    statusCell.classList.add("product_status_td");
    roiCell.classList.add("product_roi");
    priceCell.classList.add("product_price");
    purchasedCell.classList.add("date_purchased_td");
    placeofCell.classList.add("place_of_purchase_td");
    soldCell.classList.add("date_sold_td");
    platformCell.classList.add("product_platform_td");
    brandCell.classList.add("product_brand_td");
    colorwayCell.classList.add("product_colorway_td");
    conditionCell.classList.add("product_condition_td");

    console.log(productStatus.value);

    // if (productStatus.value === "sold" || productStatus.value === "Sold") {
    //   statusCell.classList.add("sold");
    // } else {
    //   statusCell.classList.add("pending");
    // }

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
    // totalSpendings.innerHTML = `${formatter.format(sumPrice)}`;

    //Goes through each roi td to get the sum of roi price
    for (var i = 1; i < roiTd.length; i++) {
      sumRoi += parseFloat(roiTd[i].innerHTML.replace(pattern, ""));
    }

    //Sets the roi innerHTML to the sumRoi of table
    //Using formatter to convert value in currency(USD)
    roi.innerHTML = `${formatter.format(sumRoi)}`;

    //Sets the totalSpending innerHTML to the sumPrice of table
    //Using formatter to convert value in currency(USD)
    var revenue = sumPrice + sumRoi;
    totalSpendings.innerHTML = `${formatter.format(revenue)}`;

    //Adds class name to roi depending on its value to change text color
    roiColor();

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
    btnEdit.innerHTML = `
    <span class="material-icons-two-tone skyblue">
    edit
    </span>`;

    // Create delete row button for each row
    const clearRowAll = document.createElement("button");
    clearRowAll.classList.add("clear_row_all");
    clearRowAll.innerHTML = `
    <span class="material-icons-two-tone clear_td">
    delete
    </span>
    `;
    // clearRowAll.classList.add("fas");
    // clearRowAll.classList.add("fa-trash");

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
      if (!e.target.classList.contains("clear_td")) {
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
      // scrollPosition();
    });

    btnEdit.addEventListener("click", function () {
      var table = document.querySelector(".table_inventory");

      for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
          rIndex = this.rowIndex;
          productName.value = this.cells[0].innerHTML;
          productSize.value = this.cells[1].innerHTML;
          productStyleId.value = this.cells[2].innerHTML;

          var regex = /\b(inventory|inventory_2)\b/gi;
          productStatus.value = this.cells[3].textContent
            .replace(regex, "")
            .replaceAll(/\s/g, "");
          // if (this.cells[3].textContent.replaceAll(/\s/g, "") == "sold") {
          //   console.log("true");
          //   productStatus.value = "sold";
          // } else {
          //   console.log(this.cells[3].textContent.replaceAll(/\s/g, ""));
          // }
          // console.log(this.cells[3].textContent.replaceAll(/\s/g, ""));
          // productStatus.value = this.cells[3].innerHTML;

          productRoi.value = this.cells[4].innerHTML.replace(pattern, "");
          productPrice.value = this.cells[5].innerHTML.replace(pattern, "");

          var pDateValue = new Date(this.cells[6].innerHTML);
          var formattingPDate =
            pDateValue.getFullYear() +
            "-" +
            ("0" + (pDateValue.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + pDateValue.getDate()).slice(-2);
          purchaseDate.value = formattingPDate;

          placeOfPurchase.value = this.cells[7].innerHTML;

          var sDateValue = new Date(this.cells[8].innerHTML);
          var formattingSDate =
            sDateValue.getFullYear() +
            "-" +
            ("0" + (sDateValue.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + sDateValue.getDate()).slice(-2);
          soldDate.value = formattingSDate;

          productPlatform.value = this.cells[9].innerHTML;
          productBrand.value = this.cells[10].innerHTML;
          productColorway.value = this.cells[11].innerHTML;
          productCondition.value = this.cells[12].innerHTML;
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
        var inputPurchaseDate = new Date(purchaseDate.value);
        var formattedPurchaseDate =
          inputPurchaseDate.getMonth() +
          1 +
          "/" +
          (inputPurchaseDate.getDate() + 1) +
          "/" +
          inputPurchaseDate.getFullYear();
        var inputSoldDate = new Date(soldDate.value);
        var month = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ][inputSoldDate.getMonth()];
        var formattedSoldDate =
          month +
          "/" +
          (inputSoldDate.getDate() + 1) +
          "/" +
          inputSoldDate.getFullYear();

        table.rows[rIndex].cells[0].innerHTML = productName.value;
        table.rows[rIndex].cells[1].innerHTML = productSize.value;
        table.rows[rIndex].cells[2].innerHTML = productStyleId.value;
        table.rows[rIndex].cells[4].innerHTML = `${formatter.format(
          productRoi.value
        )}`;
        table.rows[rIndex].cells[5].innerHTML = `${formatter.format(
          productPrice.value
        )}`;
        table.rows[rIndex].cells[6].innerHTML = formattedPurchaseDate;
        table.rows[rIndex].cells[7].innerHTML = placeOfPurchase.value;
        table.rows[rIndex].cells[8].innerHTML = formattedSoldDate;
        table.rows[rIndex].cells[9].innerHTML = productPlatform.value;
        table.rows[rIndex].cells[10].innerHTML = productBrand.value;
        table.rows[rIndex].cells[11].innerHTML = productColorway.value;
        table.rows[rIndex].cells[12].innerHTML = productCondition.value;

        statusFormat(table.rows[rIndex].cells[3]);

        if (table.rows[rIndex].cells[4].innerHTML.replace(pattern, "") >= 1) {
          table.rows[rIndex].cells[4].classList.remove("lost");
          table.rows[rIndex].cells[4].classList.remove("neutral");
          table.rows[rIndex].cells[4].classList.add("profit");
        } else if (
          table.rows[rIndex].cells[4].innerHTML.replace(pattern, "") == 0
        ) {
          table.rows[rIndex].cells[4].classList.remove("lost");
          table.rows[rIndex].cells[4].classList.remove("profit");
          table.rows[rIndex].cells[4].classList.add("neutral");
        } else {
          table.rows[rIndex].cells[4].classList.remove("neutral");
          table.rows[rIndex].cells[4].classList.remove("profit");
          table.rows[rIndex].cells[4].classList.add("lost");
        }

        if (soldDate.value == "") {
          table.rows[rIndex].cells[8].innerHTML = "";
        }

        roiColor();

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
        // totalSpendings.innerHTML = `${formatter.format(updatedSumPrice)}`;

        //Sets the roi innerHTML to the sumRoi of table
        //Using formatter to convert value in currency(USD)
        roi.innerHTML = `${formatter.format(updatedSumRoi)}`;

        var revenue = updatedSumPrice + updatedSumRoi;
        totalSpendings.innerHTML = `${formatter.format(revenue)}`;

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
        // roiPercentage.innerHTML = "0%";
        roi.classList.remove("lost");
        roi.classList.remove("profit");
        roi.classList.add("neutral");
        // roiPercentage.add("neutral");
      }

      noData();
      // scrollPosition();
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
    // scrollPosition();

    document.querySelector(".product_name").style.borderColor = "#d3d3d3";
    document.querySelector(".product_date").style.borderColor = "#d3d3d3";
    document.querySelector(".product_price").style.borderColor = "#d3d3d3";
    document.querySelector(".r_name").style.opacity = "0";
    document.querySelector(".r_date").style.opacity = "0";
    document.querySelector(".r_price").style.opacity = "0";

    document.querySelector(".form_popup_background").style.display = "none";
  });
}

function statusFormat(cellStatus) {
  const soldStr = "sold";
  const listedStr = "listed";

  //Adds icon to Status input
  if (productStatus.value.toUpperCase() === soldStr.toUpperCase()) {
    cellStatus.innerHTML = `
      <div class="status_cell_txt">
      <i class="fas fa-check-circle green" id="status_icon_sold"></i>
      <span class="status_txt green">${productStatus.value}</span>
      </div>`;
  } else if (productStatus.value.toUpperCase() === listedStr.toUpperCase()) {
    cellStatus.innerHTML = `
      <div class="status_cell_txt">
      <span class="material-icons-two-tone" id="status_icon_listed">inventory</span>
      <span class="status_txt skyblue">${productStatus.value}</span>
      </div>`;
  } else if (productStatus.value != "") {
    cellStatus.innerHTML = `
      <div class="status_cell_txt">
      <span class="material-icons-two-tone" id="status_icon_unlisted">inventory_2</span>
      <span class="status_txt grey">${productStatus.value}</span>
      </div>`;
  } else {
    cellStatus.innerHTML = "";
  }
}

function roiColor() {
  if (roi.innerHTML.replace(pattern, "") > "1") {
    roi.classList.remove("neutral");
    roi.classList.remove("lost");
    roi.classList.add("profit");
  } else if (roi.innerHTML.replace(pattern, "") < "0") {
    roi.classList.remove("neutral");
    roi.classList.remove("profit");
    roi.classList.add("lost");
  } else {
    roi.classList.remove("profit");
    roi.classList.remove("lost");
    roi.classList.add("neutral");
  }
}

function noData() {
  if (productCount.innerHTML >= 1) {
    document.querySelector(".empty_table").style.display = "none";
  } else {
    document.querySelector(".empty_table").style.display = "block";
  }
}

// function scrollPosition() {
//   if (productCount.innerHTML >= 1) {
//     document.querySelector(".table_scroll").style.paddingBottom = "0rem";
//   } else {
//     document.querySelector(".table_scroll").style.paddingBottom = "29.5rem";
//   }
// }
