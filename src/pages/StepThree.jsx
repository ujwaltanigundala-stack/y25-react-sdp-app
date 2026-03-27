import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";
import { validateStep3 } from "../utils/validation";

function StepThree() {
  let navigate = useNavigate();
  let reg = useRegistration();
  let interests = ["Technology", "Sports", "Music", "Movies", "Travel"];

  function handleSubmit(event) {
    event.preventDefault();
    let errors = validateStep3(reg.data);
    
    if (Object.keys(errors).length === 0) {
      reg.setErrors({});
      reg.nextStep();
      navigate("/review");
    } else {
      reg.setErrors(errors);
    }
  }

  function handleBack() {
    reg.previousStep();
    navigate("/step-2");
  }

  function togglePreference(pref) {
    let newPrefs = reg.data.preferences;
    
   
    if (newPrefs.includes(pref)) {
    
      newPrefs = newPrefs.filter(p => p !== pref);
    } else {
 
      newPrefs = newPrefs.concat(pref);
    }
    
    reg.updateField("preferences", newPrefs);
  }

  return (
    <div className="step-container">
      <h2>Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={reg.data.newsletter}
              onChange={(e) => reg.updateField("newsletter", e.target.checked)}
            />
            Newsletter
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={reg.data.notifications}
              onChange={(e) => reg.updateField("notifications", e.target.checked)}
            />
            Notifications
          </label>
        </div>

        <div className="form-group">
          <label>Interests (select at least one) *</label>
          <div className="checkbox-group">
            {interests.map((pref) => (
              <label key={pref}>
                <input
                  type="checkbox"
                  checked={reg.data.preferences.includes(pref)}
                  onChange={() => togglePreference(pref)}
                />
                {pref}
              </label>
            ))}
          </div>
          {reg.errors.preferences && <span className="error">{reg.errors.preferences}</span>}
        </div>

        <div className="form-actions">
          <button type="button" className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed" onClick={handleBack}>
            Back
          </button>
          <button type="submit" className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
            Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepThree;