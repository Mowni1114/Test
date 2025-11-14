import React from "react";

function Step3({ register }) {
  return (
    <>
      <h3>Step 3 - Skills & Resume</h3>

      <label>Select Skills:</label>
      <select {...register("skills")}>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="React">Frontend</option>
      </select>

      <label>Upload Resume (PDF only):</label>
      <input type="file" {...register("resume")} accept=".pdf" />
    </>
  );
}

export default Step3;

