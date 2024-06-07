document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault(); // prevent form submission
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var progressBar = document.getElementById("progressBar");
  var submitBtn = document.getElementById("submitBtn");

  // Check if the form has already been submitted by this device or IP address
  if (localStorage.getItem("formSubmitted")) {
    // Display an alert message indicating that the form has already been submitted
    alert("Sorry, You have already submitted your wish., not more than 1 wish in the gap between 23 days.");
  } else {
    // Disable submit button
    submitBtn.disabled = true;

    // Reset progress bar
    progressBar.style.width = "0%";
    progressBar.style.display = "block";

    // Simulate form submission (Replace this with actual AJAX request)
    setTimeout(function() {
      // Assuming form submission was successful
      progressBar.style.width = "100%";
      // Save in localStorage that the form has been submitted
      localStorage.setItem("formSubmitted", "true");
      setTimeout(function() {
        // Update submit button text to show success message
        submitBtn.innerText = "Submitted successfully";
      }, 500); // Show success message after a short delay
    }, 1500); // Simulate submission delay
  }

  // Disable form elements after submission
  document.getElementById("name").disabled = true;
  document.getElementById("email").disabled = true;



});
