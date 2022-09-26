const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("step");
  console.log(x);
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("submit_button").innerHTML = "Next";
  } else {
    document.getElementById("submit_button").innerHTML = "Change Password";
  }
}

const nextPrev = (n) => {
  var x = document.getElementsByClassName("step");

  if (n == 1 && recoverStepOne()) {
  }
};

const recoverStepOne = (event) => {
  event.preventDefault();
  var valid = true;
  const email = document.getElementById("email").value;
  const input = document.getElementById("input_email").classList;
  const label = document.getElementById("label_email");

  if (email == "") {
    input.add("error");
    label.innerHTML = "Email is required";
    valid = false;
  } else if (!validateEmail(email)) {
    input.add("error");
    label.innerHTML = "Invalid email";
    valid = false;
  } else if (!checkEmailExists(email)) {
    valid = false;
  }
  return valid;
};

const checkEmailExists = (email) => {
  const input = document.getElementById("input_email").classList;
  const label = document.getElementById("label_email");
  if (email !== "test@netpower.no") {
    input.add("error");
    label.innerHTML = "Email not existed";
    return false;
  } else {
    return true;
  }
};

// else {
//     document.getElementById("step-1").classList.add("display-none");
//     document.getElementById("step-2").classList.remove("display-none");
//     document.getElementById("email").disabled = true;
//     document.getElementById("password").disabled = false;
//     document.getElementById("repassword").disabled = false;
//     document.getElementById("submit-button").innerHTML = "Reset password";
//     document.getElementById("form-submit").onsubmit = () => {
//       recoverStepTwo;
//     };
//   }

const recoverStepTwo = () => {
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;
  const input_repasword = document.getElementById("input_repassword").classList;
  const label_repassword = document.getElementById("label_repassword");
  console.log(password);
  console.log(repassword);
  if (repassword !== password) {
    input_repasword.add("error");
    label_repassword.innerHTML = "Password not mached";
    return false;
  }
  return true;
};
