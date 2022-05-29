export const initialUserState = {
  userToken: null,
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  addressBook: [],
};

export const authReducer = (userDetails, { type, payload }) => {
  console.log(payload)
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

    case "NEW_ADDRESS": {
      const updatedState = {
        ...userDetails,
        addressBook: [...userDetails.addressBook, payload],
      };

      return updatedState;
    }

    case "UPDATE_ADDRESS": {
      const updatedState = {
        ...userDetails,
        addressBook: userDetails.addressBook.map((address) =>
          address._id === payload._id ? ({ ...payload }) : address
        ),
      };

      return updatedState;
    }

    case "DELETE_ADDRESS": {
      const updatedState = {
        ...userDetails,
        addressBook: userDetails.addressBook.filter(
          (address) => address._id !== payload._id
        ),
      };

      return updatedState;
    }
  }
};
