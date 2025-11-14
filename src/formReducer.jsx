export const initialState = {
  username: "",
  email: "",
  password: "",
  mobile: "",
  dob: "",
  degree: "",
  specialization: "",
  cgpa: "",
  skills: "",
  resume: ""
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    default:
      return state;
  }
}
