import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";
import { validateStep2 } from "../utils/validation";

function StepTwo() {
  let navigate = useNavigate();
  let reg = useRegistration();

  function handleSubmit(event) {
    event.preventDefault();
    let errors = validateStep2(reg.data);
    
    if (Object.keys(errors).length === 0) {
      reg.setErrors({});
      reg.nextStep();
      navigate("/step-3");
    } else {
      reg.setErrors(errors);
    }
  }

  function handleBack() {
    reg.previousStep();
    navigate("/step-1");
  }

  return (
    <div className="step-container">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            value={reg.data.phone}
            onChange={(e) => reg.updateField("phone", e.target.value)}
            placeholder="+91 9876543210"
          />
          {reg.errors.phone && <span className="error">{reg.errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            value={reg.data.address}
            onChange={(e) => reg.updateField("address", e.target.value)}
            placeholder="123 Main Street"
          />
          {reg.errors.address && <span className="error">{reg.errors.address}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              value={reg.data.city}
              onChange={(e) => reg.updateField("city", e.target.value)}
              placeholder="New York"
            />
            {reg.errors.city && <span className="error">{reg.errors.city}</span>}
          </div>
          
          <div className="form-group">
            <label>State *</label>
            <input
              type="text"
              value={reg.data.state}
              onChange={(e) => reg.updateField("state", e.target.value)}
              placeholder="NY"
            />
            {reg.errors.state && <span className="error">{reg.errors.state}</span>}
          </div>
          
          <div className="form-group">
            <label>Zip *</label>
            <input
              type="text"
              value={reg.data.zipCode}
              onChange={(e) => reg.updateField("zipCode", e.target.value)}
              placeholder="10001"
            />
            {reg.errors.zipCode && <span className="error">{reg.errors.zipCode}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed" onClick={handleBack}>
            Back
          </button>
          <button type="submit" className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepTwo;