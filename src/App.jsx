import React, { useState, useReducer } from "react";
import { useForm } from "react-hook-form";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressBar from "./ProgressBar";
import * as Validation from "./Validation";

import { formReducer, initialState } from "./formReducer";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { register, getValues } = useForm();

  const nextStep = () => {
    const v = getValues();
                       
 
    if (step === 1) {
      const err =
        Validation.validateUsername(v.username) ||
        Validation.validateEmail(v.email) ||
        Validation.validatePassword(v.password) ||
        Validation.validateMobile(v.mobile) ||
        Validation.validateDOB(v.dob);

      if (err) return alert(err);

      dispatch({ type: "UPDATE_FIELD", field: "username", value: v.username });
      dispatch({ type: "UPDATE_FIELD", field: "email", value: v.email });
      dispatch({ type: "UPDATE_FIELD", field: "password", value: v.password });
      dispatch({ type: "UPDATE_FIELD", field: "mobile", value: v.mobile });
      dispatch({ type: "UPDATE_FIELD", field: "dob", value: v.dob });

      setStep(2);
      return;
    }

    
    if (step === 2) {
      const err =
        Validation.validateDegree(v.degree) ||
        Validation.validateSpecialization(v.specialization) ||
        Validation.validateCGPA(v.cgpa);

      if (err) return alert(err);

      dispatch({ type: "UPDATE_FIELD", field: "degree", value: v.degree });
      dispatch({
        type: "UPDATE_FIELD",
        field: "specialization",
        value: v.specialization
      });
      dispatch({ type: "UPDATE_FIELD", field: "cgpa", value: v.cgpa });

      setStep(3);
      return;
    }


    if (step === 3) {
      const err =
        Validation.validateSkills(v.skills) ||
        Validation.validateResume(v.resume?.[0]);

      if (err) return alert(err);

      dispatch({ type: "UPDATE_FIELD", field: "skills", value: v.skills });
      dispatch({
        type: "UPDATE_FIELD",
        field: "resume",
        value: v.resume[0].name
      });

      setStep(4);
      return;
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="form-container">
      <ProgressBar step={step === 4 ? 3 : step} />

      {step === 1 && <Step1 register={register} />}
      {step === 2 && <Step2 register={register} />}
      {step === 3 && <Step3 register={register} />}

      {step === 4 && (
        <>
          <h3>Final Summary</h3>
          <pre style={{ background: "#eee", padding: 15, borderRadius: 8 }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        </>
      )}

      {step !== 4 && (
        <div style={{ marginTop: 20 }}>
          {step > 1 && (
            <button onClick={prevStep} style={{ marginRight: 10 }}>
              Previous
            </button>
          )}
          <button onClick={nextStep}>{step === 3 ? "Submit" : "Next"}</button>
        </div>
      )}
    </div>
  );
}

export default App;
