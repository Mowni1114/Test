import React from "react";

function ProgressBar({ step }) {
  const width = (step / 3) * 100; // 3 steps total
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}

export default ProgressBar;
