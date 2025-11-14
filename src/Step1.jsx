import React from "react";

function Step1({ register }) {
  return (
    <>
      <h3>Step 1 - Personal Details</h3>
      <input type="text" placeholder="Username" {...register("username")} />
      <input type="text" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <input type="text" placeholder="Mobile" {...register("mobile")} />
      <input type="date" placeholder="DOB" {...register("dob")} />
    </>
  );
}

export default Step1;
