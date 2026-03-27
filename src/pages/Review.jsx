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
      
      <div className="mx-auto mt-6 mb-6 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
          <h3 className="text-2xl font-bold text-white">Review your details</h3>
          <p className="mt-1 text-sm text-blue-100">Confirm everything is correct before submitting.</p>
        </div>

        <div className="space-y-6 px-6 py-5">
          <section className="rounded-xl border border-slate-200 p-5 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h4 className="text-xl font-bold text-slate-900">Personal Information</h4>
            <p className="mt-1 text-sm text-slate-500">Review and validate your name, email, and date of birth.</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3"><span className="font-medium text-slate-600">Name</span><span className="text-slate-800">{data.firstName} {data.lastName}</span></div>
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3"><span className="font-medium text-slate-600">Email</span><span className="text-slate-800">{data.email}</span></div>
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3 sm:col-span-2"><span className="font-medium text-slate-600">Date of Birth</span><span className="text-slate-800">{data.dateOfBirth}</span></div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 p-5 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h4 className="text-xl font-bold text-slate-900">Contact Information</h4>
            <p className="mt-1 text-sm text-slate-500">Confirm your phone, full address, and location details.</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3"><span className="font-medium text-slate-600">Phone</span><span className="text-slate-800">{data.phone}</span></div>
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3 sm:col-span-2"><span className="font-medium text-slate-600">Address</span><span className="text-slate-800">{data.address}</span></div>
              <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3 sm:col-span-2"><span className="font-medium text-slate-600">City / State / Zip</span><span className="text-slate-800">{data.city}, {data.state}, {data.zipCode}</span></div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 p-5 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h4 className="text-xl font-bold text-slate-900">Preferences</h4>
            <p className="mt-1 text-sm text-slate-500">Check the selected preferences that you chose in the previous steps.</p>
            <div className="mt-4 text-sm font-medium text-slate-600">Interests</div>
            <div className="mt-2 rounded-xl bg-slate-50 p-3 text-slate-700 ring-1 ring-slate-200">{prefs}</div>
          </section>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={handleBack}
          disabled={reg.submitting}
        >
          Back
        </button>
        <button
          type="button"
          className="flex-1 py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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