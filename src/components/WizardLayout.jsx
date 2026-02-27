import { useRegistration } from "../context/RegistrationContext";
function StepIndicator({ current }) {
  let stepNames = ["Personal", "Contact", "Preferences", "Review"];
  let progress = ((current - 1) / 3) * 100;

  return (
    <div className="step-indicator">
      <div className="steps-container">
        {stepNames.map((name, index) => {
          let stepNum = index + 1;
          let isDone = stepNum < current;
          let isCurrent = stepNum === current;
          let classNames = "step-circle";
          
          if (isDone) classNames += " completed";
          if (isCurrent) classNames += " active";

          return (
            <div key={name} className="step-wrapper">
              <div className={classNames}>
                {isDone ? "✓" : stepNum}
              </div>
              <div className="step-label">{name}</div>
              
              {index < 3 && (
                <div className={`step-connector ${isDone ? "completed" : ""}`} />
              )}
            </div>
          );
        })}
      </div>
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: progress + "%" }} />
      </div>
    </div>
  );
}

export function WizardLayout({ children }) {
  let reg = useRegistration();

  return (
    <div className="container">
      <StepIndicator current={reg.step} />
      {children}
    </div>
  );
}
