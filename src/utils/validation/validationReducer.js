export const initialInputValidation = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const initialErrors = {
  emailError: "",
  lastNameError: "",
  passwordError: "",
  passwordMatchError: "",
  firstNameError: "",
};

export const inputReducer = (state, { type, payload }) => {
  switch (type) {
    case "FIRST_NAME":
      return { ...state, firstName: payload };
    case "LAST_NAME":
      return { ...state, lastName: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };
    case "CLEAR_INPUTS":
      return initialInputValidation;
    default:
      return state;
  }
};

export const errorReducer = (state, { type, payload }) => {
  switch (type) {
    case "FIRST_NAME_ERROR":
      return { ...state, firstNameError: payload };
    case "LAST_NAME_ERROR":
      return { ...state, lastNameError: payload };
    case "EMAIL_ERROR":
      return { ...state, emailError: payload };
    case "PASSWORD_ERROR":
      return { ...state, passwordError: payload };
    case "PASSWORD_MATCH_ERROR":
      return { ...state, passwordMatchError: payload };
    case "CLEAR_ERRORS":
      return initialErrors;
    default:
      return state;
  }
};
