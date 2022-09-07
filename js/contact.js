const form = document.querySelector("form");
const theName = document.querySelector("#the-name");
const theNameError = document.querySelector("#the-name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const contactMessage = document.querySelector(".contact-message");
const button = document.querySelector("button");

function checkIfInputValidated(event) {
  event.preventDefault();

  if (checkLength(theName.value, 1)) {
    theNameError.style.display = "none";
  } else {
    theNameError.style.display = "block";
  }

  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value, 1)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (
    checkLength(theName.value, 1) &&
    checkLength(subject.value, 10) &&
    checkLength(email.value, 1) &&
    checkLength(address.value, 25) &&
    validateEmail(email.value)
  ) {
    contactMessage.innerHTML =
      '<div class="contact-message-success">Your message has been sent</div>';
    form.reset();
  } else {
  }
}

function clearMessage() {
  contactMessage.innerHTML = "";
}
// new form fill - remove success message
theName.addEventListener("keyup", clearMessage);
subject.addEventListener("keyup", clearMessage);
address.addEventListener("keyup", clearMessage);
email.addEventListener("keyup", clearMessage);

form.addEventListener("submit", checkIfInputValidated);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
