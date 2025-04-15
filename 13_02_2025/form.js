function submitForm(e) {
  e.preventDefault();

  let valid = true;

  let lname = document.getElementById("l_name").value;
  let fname = document.getElementById("f_name").value;
  let dob = document.getElementById("dob").value;
  let age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const marital = document.querySelector('input[name="marital"]:checked');
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  const terms = document.getElementById("terms");
  let address = document.getElementById("address").value;

  let lnameError = document.getElementById("lname_error");
  let fnameError = document.getElementById("fname_error");
  let ageError = document.getElementById("age_error");
  let emailError = document.getElementById("email_error");
  let phoneError = document.getElementById("phone_error");
  let addressError = document.getElementById("address_error");
  let genderError = document.getElementById("gender_error");
  let hobbiesError = document.getElementById("hobbies_error");
  let maritalError = document.getElementById("marital_error");
  let termsError = document.getElementById("terms_error");

  fnameError.textContent = "";
  lnameError.textContent = "";
  ageError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  addressError.textContent = "";
  genderError.textContent = "";
  maritalError.textContent = "";
  hobbiesError.textContent = "";
  termsError.textContent = "";

  if (fname.trim() === "") {
    fnameError.textContent = "First name is required.";
    valid = false;
  } else if (fname.length < 3) {
    fnameError.textContent = "First name can not be smaller than 3";
    valid = false;
  }

  if (lname.trim() === "") {
    lnameError.textContent = "Last name is required.";
    valid = false;
  }

  if (!dob) {
    ageError.textContent = "Date of birth is required.";
    valid = false;
  } else if (Number(age) < 18) {
    ageError.textContent = "You must be 18 years or older.";
    valid = false;
  }
  if (!gender) {
    genderError.textContent = "Please select a gender.";
    valid = false;
  }

  if (!marital) {
    maritalError.textContent = "Please select a marital status.";
    valid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  if (phone.trim() === "") {
    phoneError.textContent = "Phone number is required.";
    valid = false;
  }

  const phonePattern =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Please enter a valid phone number.";
    valid = false;
  } else if (phone.length > 10) {
    phoneError.textContent = "phone number length can not be greater than 10";
  }

  if (!terms.checked) {
    termsError.textContent = "You must accept the terms and conditions.";
    valid = false;
  }

  if (address.trim() === "") {
    addressError.textContent = "Address is required.";
    valid = false;
  }
    
  if (phone.length !== 10) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    valid = false;
  }

  const addressPattern = /^[a-zA-Z0-9\s,'\-#]+$/;
  const pincodePattern = /\b\d{6}\b/;

  if (address.trim() === "") {
    addressError.textContent = "Address is required.";
    valid = false;
  } else if (address.length < 10) {
    addressError.textContent = "Address must be at least 10 characters long.";
    valid = false;
  } else if (!addressPattern.test(address)) {
    addressError.textContent =
      "Please enter a valid address (letters, numbers, spaces, and common symbols only).";
    valid = false;
  }

  if (!pincodePattern.test(address)) {
    addressError.textContent = "Address must include a valid 6-digit pincode.";
    valid = false;
  }

  if (!valid) {
    return;
  }
}

document.getElementById("dob").addEventListener("change", function (e) {
  const today = new Date();
  const thisyear = today.getFullYear();
  const thisdate = today.getDate();
  const thismonth = today.getMonth() + 1;

  const birthmonth = new Date(e.target.value).getMonth() + 1;
  const birthdate = new Date(e.target.value).getDate();
  const birthyear = new Date(e.target.value).getFullYear();

  let age = thisyear - birthyear;

  if (thismonth < birthmonth) {
    age = age - 1;
  } else if (thismonth === birthmonth && thisdate < birthdate) {
    age = age - 1;
  }

  document.getElementById("age").value = age;
});
