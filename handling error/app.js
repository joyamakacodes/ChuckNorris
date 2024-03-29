// Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-valid");
  } else {
    name.classList.remove("is-valid");
  }
}
function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{6}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add("is-valid");
  } else {
    zip.classList.remove("is-valid");
  }
}
function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)(\.[a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phone.value)) {
    phone.classList.add("is-valid");
  } else {
    phone.classList.remove("is-valid");
  }
}


