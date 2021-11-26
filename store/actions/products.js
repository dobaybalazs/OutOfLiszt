export const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";
export const ADD_TO_USERPRODUCTS = "ADD_TO_USERPRODUCTS";
export const DELETE_USERPRODUCT = "DELETE_USERPRODUCT";
export const INCREMENT_PRODUCT_COUNT = "INCREMENT_PRODUCT_COUNT";
export const DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT";

export const addToProducts = (product) => {
  return { type: ADD_TO_PRODUCTS, product: product };
};
export const addToUserProducts = (products) => {
  return { type: ADD_TO_USERPRODUCTS, products: products };
};
export const deleteUserProduct = (productId) => {
  return { type: DELETE_USERPRODUCT, productId: productId };
};
export const incrementProductCount = (productId) => {
  return { type: INCREMENT_PRODUCT_COUNT, productId: productId };
};
export const decreaseProductCount = (productId) => {
  return { type: DECREASE_PRODUCT_COUNT, productId: productId };
};
