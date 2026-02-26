import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  // Step 1: State - What data does the form have?
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    newsletter: false,
    notifications: true,
    preferences: [],
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Step 2: Update a field value
  function updateField(field, value) {
    let newData = { ...data };
    newData[field] = value;
    setData(newData);
  }

  // Step 3: Move to next step
  function nextStep() {
    setStep(step + 1);
  }

  // Step 4: Move to previous step
  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  // Step 5: Reset everything
  function resetWorkflow() {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      newsletter: false,
      notifications: true,
      preferences: [],
    });
    setStep(1);
    setErrors({});
  }

  // Step 6: Provide all functions and data to child components
  let value = {
    data: data,
    updateField: updateField,
    step: step,
    nextStep: nextStep,
    previousStep: previousStep,
    errors: errors,
    setErrors: setErrors,
    submitting: submitting,
    setSubmitting: setSubmitting,
    resetWorkflow: resetWorkflow,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

// Use this hook in components
export function useRegistration() {
  let context = useContext(RegistrationContext);
  return context;
}
