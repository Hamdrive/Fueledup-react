import { useReducer } from "react";
import { nameRegex, emailRegex, passwordRegex } from "./regexConstants";
import {
  inputReducer,
  errorReducer,
  initialInputValidation,
  initialErrors,
} from "./validationReducer";

export const useValidation = () => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    initialInputValidation
  );
  const [errorState, errorDispatch] = useReducer(errorReducer, initialErrors);

  const validateLogin = () => {
    let inputValid = true;
    if (!emailRegex.test(inputState.email)) {
      errorDispatch({
        type: "EMAIL_ERROR",
        payload: "Please Enter Valid Email",
      });
      inputValid = false;
    }
    if (!passwordRegex.test(inputState.password)) {
      errorDispatch({
        type: "PASSWORD_ERROR",
        payload: "Password length should contain minimum 8 characters",
      });
      inputValid = false;
    }

    return inputValid;
  };

  const validateInputs = () => {
    let inputValid = true;
    if (!nameRegex.test(inputState.firstName)) {
      errorDispatch({
        type: "FIRST_NAME_ERROR",
        payload: "Enter Valid First Name",
      });
      inputValid = false;
    }
    if (!nameRegex.test(inputState.lastName)) {
      errorDispatch({
        type: "LAST_NAME_ERROR",
        payload: "Enter Valid Last Name",
      });
      inputValid = false;
    }
    if (!emailRegex.test(inputState.email)) {
      errorDispatch({
        type: "EMAIL_ERROR",
        payload: "Please Enter Valid Email",
      });
      inputValid = false;
    }
    if (!passwordRegex.test(inputState.password)) {
      errorDispatch({
        type: "PASSWORD_ERROR",
        payload: "Password length should contain minimum 8 characters",
      });
      inputValid = false;
    }

    if (inputState.password !== inputState.confirmPassword) {
      errorDispatch({
        type: "PASSWORD_MATCH_ERROR",
        payload: "Password does not match",
      });
      inputValid = false;
    }
    return inputValid;
  };

  const resetErrors = () => errorDispatch({ type: "CLEAR_ERRORS" });

  return {
    inputState,
    inputDispatch,
    errorState,
    resetErrors,
    validateInputs,
    validateLogin,
  };
};
