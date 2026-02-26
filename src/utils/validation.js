// Validation function for Step 1 - Personal Information
function validateStep1(data) {
  let errors = {};
  
  // Check first name is not empty
  if (data.firstName === "") {
    errors.firstName = "First name required";
  }
  
  // Check last name is not empty
  if (data.lastName === "") {
    errors.lastName = "Last name required";
  }
  
  // Check email has @ symbol
  if (!data.email.includes("@")) {
    errors.email = "Valid email required";
  }
  
  // Check date of birth is not empty
  if (data.dateOfBirth === "") {
    errors.dateOfBirth = "Date required";
  }
  
  return errors;
}

// Validation function for Step 2 - Contact Information
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

// Validation function for Step 3 - Preferences
function validateStep3(data) {
  let errors = {};
  
  // Check if at least one preference is selected
  if (data.preferences.length === 0) {
    errors.preferences = "Select at least one";
  }
  
  return errors;
}

// Submit the form - waits 1.5 seconds then returns success
function submitForm(data) {
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
