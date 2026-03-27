import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";
import { validateStep1 } from "../utils/validation";

function StepOne() {
  let navigate = useNavigate();
  let reg = useRegistration();
  

  function handleSubmit(event) {
    event.preventDefault();
    
    
    let errors = validateStep1(reg.data);
    
   
    if (Object.keys(errors).length === 0) {
      reg.setErrors({});
      reg.nextStep();
      navigate("/step-2");
    } else {
    
      reg.setErrors(errors);
    }
  }
  
  return (
    <div className="step-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              value={reg.data.firstName}
              onChange={(e) => reg.updateField("firstName", e.target.value)}
              placeholder="John"
            />
            {reg.errors.firstName && <span className="error">{reg.errors.firstName}</span>}
          </div>
          
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              value={reg.data.lastName}
              onChange={(e) => reg.updateField("lastName", e.target.value)}
              placeholder="Doe"
            />
            {reg.errors.lastName && <span className="error">{reg.errors.lastName}</span>}
          </div>
        </div>
        
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={reg.data.email}
            onChange={(e) => reg.updateField("email", e.target.value)}
            placeholder="john@example.com"
          />
          {reg.errors.email && <span className="error">{reg.errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            value={reg.data.dateOfBirth}
            onChange={(e) => reg.updateField("dateOfBirth", e.target.value)}
          />
          {reg.errors.dateOfBirth && <span className="error">{reg.errors.dateOfBirth}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepOne;