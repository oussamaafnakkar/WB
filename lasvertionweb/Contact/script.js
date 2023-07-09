var menuToggle = document.getElementById("menu-toggle");
var navbar = document.querySelector(".navbar");

menuToggle.addEventListener("change", function () {
  if (menuToggle.checked) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
});

// Get the form element
var form = document.getElementById("contact-form");

// Add an event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform form validation
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Perform AJAX request to submit the form data
  var url = "https://script.google.com/macros/s/AKfycbxonX_40D_mPtVJSUHRMMPVmAoxx9GMKvCmdpS-C6jaR4mR_qJxc_MUK0UT-GKLyG5c/exec";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Form submission successful
        var successMessage = document.getElementById("success-message");
        successMessage.textContent = "Thank you for your message!";
        form.reset();
      } else {
        // Form submission failed
        var successMessage = document.getElementById("success-message");
        successMessage.textContent = "An error occurred while submitting the form.";
      }
    }
  };

  // Convert form data to URL-encoded string
  var formData = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);

  xhr.send(formData);
});
