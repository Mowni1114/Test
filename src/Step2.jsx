import React from "react";

function Step2({ register }) {
  return (
    <>
      <h3>Step 2 - College Details</h3>

    
      <select {...register("degree")}>
        <option value="">Select Degree</option>
        <option value="B.Tech">B.Tech</option>
        <option value="BE">BE</option>
        <option value="B.Sc">B.Sc</option>
      
      </select>

    
      <select {...register("specialization")}>
        <option value="">Select Specialization</option>
        <option value="IT">IT</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        
      </select>

    
      <input type="text" placeholder="CGPA" {...register("cgpa")} />
    </>
  );
}

export default Step2;
