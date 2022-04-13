import axios from "axios";

export const performUserLogin = async (loginCredentials) => {
  return await axios.post("/api/auth/login", loginCredentials);
};

export const performUserSignup = async (signupCredentials) => {
  return await axios.post("/api/auth/signup", signupCredentials);
};

export const performGetProducts = async () => {
    return await axios.get("/api/products")
}
export const performGetCategories = async () => {
    return await axios.get("/api/categories")
}

export const performAddToCart = async (product, userToken) => {
  return await axios.post(
    "/api/user/cart",
    { product },
    { headers: {authorization: userToken} }
  );
};
export const performGetCart = async ( userToken) => {
  return await axios.get(
    "/api/user/cart",
    { headers: {authorization: userToken} }
  );
};
export const performUpdateCartQuantity = async (id, type, userToken) => {
  return await axios.post(
    `/api/user/cart/${id}`,
    { action: { type: type } },
    { headers: {authorization: userToken} }
  );
};
export const performRemoveFromCart = async (id, userToken) => {
  return await axios.delete(`/api/user/cart/${id}`, {
    headers: {authorization: userToken},
  });
};

export const performAddToWishlist = async (product, userToken) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: {authorization: userToken} }
  );
};
export const performGetWishlist = async (userToken) => {
  return await axios.get(
    "/api/user/wishilst",

    { headers: {authorization: userToken} }
  );
};

export const performRemoveFromWishlist = async (id, userToken) => {
  return await axios.delete(`/api/user/wishlist/${id}`, {
    headers: {authorization: userToken},
  });
};
