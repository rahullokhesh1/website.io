const hintButton = document.getElementById("hintButton");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

hintButton.addEventListener("click", function() {
  passwordField.type = "text";
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "your name" && password === "rahul") {
    message.textContent = "Your name is Husna, Rahul loves you.";
  } else {
    message.textContent = "Invalid login credentials.";
  }
});
