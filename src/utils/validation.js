function validateStep1(data) {
  let errors = {};
  
  if (data.firstName === "") {
    errors.firstName = "First name required";
  }
  
  if (data.lastName === "") {
    errors.lastName = "Last name required";
  }
  
  if (!data.email.includes("@")) {
    errors.email = "Valid email required";
  }
  
  if (data.dateOfBirth === "") {
    errors.dateOfBirth = "Date required";
  }
  
  return errors;
}

function validateStep2(data) {
  let errors = {};
  
  if (data.phone === "") {
    errors.phone = "Phone required";
  }
  
  if (data.address === "") {
    errors.address = "Address required";
  }
  
  if (data.city === "") {
    errors.city = "City required";
  }
  
  if (data.state === "") {
    errors.state = "State required";
  }
  
  if (data.zipCode === "") {
    errors.zipCode = "Zip code required";
  }
  
  return errors;
}

function validateStep3(data) {
  let errors = {};
  
  if (data.preferences.length === 0) {
    errors.preferences = "Select at least one";
  }
  
  return errors;
}

function submitForm() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        success: true,
        message: "Registration successful!",
        id: "REG-" + Date.now(),
      });
    }, 1500);
  });
}

export { validateStep1, validateStep2, validateStep3, submitForm };
