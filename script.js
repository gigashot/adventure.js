alert("open cosole to begin your work-day")
alert("make sure to read the cosole first, then the alert")

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve username and password from form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  window.location.href = "page2.html"; // Redirect to page2.html
  // Delay showing the alert for 500 milliseconds (adjust as needed)
});
