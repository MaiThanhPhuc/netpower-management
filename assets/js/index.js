var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

function validateFunction() {
  if (validateEmail(email)) {
    document.querySelector(".block-right-form-input").classList.add(" error");
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
