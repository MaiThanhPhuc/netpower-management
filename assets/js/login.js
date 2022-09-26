const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// var block = document.getElementsByClassName("block-right-form-email");
// console.log(block[0].classList.add("error"));

const login = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  var block_email = document.getElementById("input-email");
  var block_password = document.getElementById("input-password");
  var label_email = document.getElementById("label-email");
  var label_password = document.getElementById("label-password");

  if (email == "" && password == "") {
    block_email.classList.add("error");
    block_password.classList.add("error");
    label_email.innerHTML = "Email is required";
    label_password.innerHTML = "Password is required";
  } else if (email == "" && password !== "") {
    block_email.classList.add("error");
    block_password.classList.remove("error");
    label_password.innerHTML = "Password";
    label_email.innerHTML = "Email is required";
  } else if (!validateEmail(email)) {
    block_email.classList.add("error");
    label_email.innerHTML = "Invalid email";
  } else if (password == "" && email !== "") {
    block_email.classList.remove("error");
    block_password.classList.add("error");
    label_password.innerHTML = "Password is required";
    label_email.innerHTML = "Email ";
  } else {
    auth(email, password);
  }
};

const auth = (email, password) => {
  var block_email = document.getElementById("input-email");
  var block_password = document.getElementById("input-password");
  var label_email = document.getElementById("label-email");
  var label_password = document.getElementById("label-password");
  if (email === "test@netpower.no" && password === "123456") {
    console.log("success");
    window.location.href = "profile.html";
  } else {
    block_email.classList.add("error");
    block_password.classList.add("error");
    label_email.innerHTML = "Wrong email, please fill again";
    label_password.innerHTML = "Wrong password, please fill again";
  }
};
