const userName = document.getElementById("username");
const form = document.getElementById("form");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confirmPass = document.getElementById("confirm-pass");
const eyeIcons = document.querySelectorAll(".fa-regular");

const passwordInputs = document.querySelectorAll('input[type="password"]');

eyeIcons.forEach((eye, i) => {
  eye.addEventListener("click", () => {
    if (eye.classList.contains("fa-eye")) {
      passwordInputs[i].type = "text";
      eye.classList.replace("fa-eye", "fa-eye-slash");
      eye.title = "Hide password";
    } else {
      passwordInputs[i].type = "password";
      eye.classList.replace("fa-eye-slash", "fa-eye");
      eye.title = "Show password";
    }
  });
});

console.log(passwordInputs);

let nameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmValid = false;

form.addEventListener("submit", (e) => {
  getInfo();

  if (nameValid && emailValid && passwordValid && confirmValid) {
    nameValid = false;
    emailValid = false;
    passwordValid = false;
    confirmValid = false;
  } else {
    e.preventDefault();
  }
});

function checkInfo(element, message) {
  const inputDiv = element.parentElement;
  const getError = inputDiv.querySelector(".error-msg");

  getError.textContent = message;

  inputDiv.classList.remove("success-border");
  inputDiv.classList.add("error-border");
}

function successInfo(element) {
  const inputDiv = element.parentElement;
  const getError = inputDiv.querySelector(".error-msg");

  getError.textContent = "";
  inputDiv.classList.remove("error-border");
  inputDiv.classList.add("success-border");
}

const emailFormat = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

function getInfo() {
  const userValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  const confirmPassValue = confirmPass.value.trim();

  if (userValue === "") {
    checkInfo(userName, "Name is required.");
  } else {
    successInfo(userName);
    nameValid = true;
  }

  if (emailValue === "") {
    checkInfo(email, "Email is required");
  } else if (!emailFormat(emailValue)) {
    checkInfo(email, "Provide a valid email address");
  } else {
    successInfo(email);
    emailValid = true;
  }

  if (passValue === "") {
    checkInfo(password, "Password is required");
  } else if (passValue.length < 8) {
    checkInfo(password, "Password must be at least 8 characters");
  } else if (passValue !== confirmPassValue) {
    checkInfo(password, "Passwords don't match");
  } else {
    successInfo(password);
    passwordValid = true;
  }
  if (confirmPassValue === "") {
    checkInfo(confirmPass, "Confirm Password");
  } else if (passValue !== confirmPassValue) {
    checkInfo(confirmPass, "Passwords don't match");
  } else {
    successInfo(confirmPass);
    confirmValid = true;
  }
}
