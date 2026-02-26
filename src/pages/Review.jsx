import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";
import { submitForm } from "../utils/validation";

function Review() {
  let navigate = useNavigate();
  let reg = useRegistration();

  function handleBack() {
    reg.previousStep();
    navigate("/step-3");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    reg.setSubmitting(true);
    let result = await submitForm(reg.data);
    reg.setSubmitting(false);
    alert(result.message + "\nID: " + result.id);
    reg.resetWorkflow();
    navigate("/step-1");
  }

  let data = reg.data;
  let prefs = data.preferences.length > 0 ? data.preferences.join(", ") : "None";

  return (
    <div className="step-container">
      <h2>Review & Submit</h2>
      
      <div className="review-container">
        <div className="review-section">
          <h3>Personal Info</h3>
          <div className="review-item">
            <span className="label">Name:</span>
            <span className="value">{data.firstName} {data.lastName}</span>
          </div>
          <div className="review-item">
            <span className="label">Email:</span>
            <span className="value">{data.email}</span>
          </div>
          <div className="review-item">
            <span className="label">Date of Birth:</span>
            <span className="value">{data.dateOfBirth}</span>
          </div>
        </div>

        <div className="review-section">
          <h3>Contact Info</h3>
          <div className="review-item">
            <span className="label">Phone:</span>
            <span className="value">{data.phone}</span>
          </div>
          <div className="review-item">
            <span className="label">Address:</span>
            <span className="value">{data.address}</span>
          </div>
          <div className="review-item">
            <span className="label">City, State, Zip:</span>
            <span className="value">{data.city}, {data.state}, {data.zipCode}</span>
          </div>
        </div>

        <div className="review-section">
          <h3>Preferences</h3>
          <div className="review-item">
            <span className="label">Interests:</span>
            <span className="value">{prefs}</span>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleBack}
          disabled={reg.submitting}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={reg.submitting}
        >
          {reg.submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Review;