
var menuToggle = document.getElementById("menu-toggle");
var navbar = document.querySelector(".navbar");
var customerForm = document.getElementById("customer-form");
var successMessage = document.getElementById("success-message");

menuToggle.addEventListener("change", function () {
  if (menuToggle.checked) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
});

customerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form inputs
  var nameInput = document.getElementById("name");
  var sizeInput = document.getElementById("size");
  var phoneInput = document.getElementById("phone");

  // Create a new customer object
  var customer = {
    name: nameInput.value,
    size: sizeInput.value,
    phone: phoneInput.value,
  };

  // Perform AJAX request to submit the form data to Google Sheets
  var url = "https://script.google.com/macros/s/AKfycbyX9yvMS5rL5iqDImyPltS0iqBFRtDn2HoRptQX3kgcbrOzif38HwXYYyeA7HLpxTp6/exec";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Display success message
        successMessage.textContent = "We Will Contact You Soon";

        // Clear the form inputs
        nameInput.value = "";
        sizeInput.value = "";
        phoneInput.value = "";
      } else {
        // Display error message
        successMessage.textContent = "An error occurred while submitting the form.";
      }
    }
  };

  // Convert customer object to URL-encoded string
  var formData = Object.keys(customer)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(customer[key]);
    })
    .join("&");

  xhr.send(formData);
});
