const deleteAll = (event) => {
  event.preventDefault();
  document.getElementById("email").value = "";
  document.getElementById("input_email").classList.remove("error");
  document.getElementById("label_email").innerHTML = "Email";
};
const hideShowPassword = (event) => {
  event.preventDefault();

  const password = document.getElementById("password");
  const show = document.getElementById("show-password").classList;
  const hide = document.getElementById("hide-password").classList;
  if (password.value == "") {
    return false;
  }
  if (password.type !== "password") {
    show.remove("disable-icon");
    hide.add("disable-icon");
    password.type = "password";
  } else {
    hide.remove("disable-icon");
    show.add("disable-icon");
    password.type = "text";
  }
};
