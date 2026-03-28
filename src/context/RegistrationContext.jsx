import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
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

  function updateField(field, value) {
    let newData = { ...data };
    newData[field] = value;
    setData(newData);
  }

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

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

// eslint-disable-next-line react-refresh/only-export-components
export function useRegistration() {
  let context = useContext(RegistrationContext);
  return context;
}
