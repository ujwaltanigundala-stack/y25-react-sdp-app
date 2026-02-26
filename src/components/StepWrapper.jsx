import ProgressBar from "./ProgressBar";

export default function StepWrapper({ step, children }) {
  return (
    <div className="card">
      <ProgressBar step={step} />
      {children}
    </div>
  );
}