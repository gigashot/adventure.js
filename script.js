document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Retrieve username and password from form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    window.location.href = "page2.html";

  });
  