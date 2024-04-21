
alert("make sure to read the cosole first, then the alert")
alert("open cosole after closing this alert to begin your work-day")

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();


  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  window.location.href = "page2.html";
  
});
