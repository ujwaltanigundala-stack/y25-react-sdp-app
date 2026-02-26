export default function ProgressBar({ step }) {
  const percent = (step / 4) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
    </div>
  );
}