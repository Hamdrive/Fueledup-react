export const initialUserState = {
  userToken: null,
  userDetails: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
};

export const authReducer = (userDetails, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      const updatedState = {
        ...userDetails,
        userToken: payload.encodedToken,
        userDetails: payload.foundUser,
      };
      localStorage.setItem("userToken", updatedState.userToken);
      localStorage.setItem(
        "userDetails",
        JSON.stringify(updatedState.userDetails)
      );
      return updatedState;
    }

    case "SIGNUP": {
      const updatedState = {
        ...userDetails,
        userToken: payload.encodedToken,
        userDetails: payload.createdUser,
      };
      localStorage.setItem("userToken", updatedState.userToken);
      localStorage.setItem(
        "userDetails",
        JSON.stringify(updatedState.userDetails)
      );
      return updatedState;
    }

    case "LOGOUT": {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      return { ...initialUserState };
    }
  }
};
