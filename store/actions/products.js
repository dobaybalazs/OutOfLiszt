export const INCREMENT_ITEM_COUNT = "INCREMENT_ITEM_COUNT";
export const DECREASE_ITEM_COUNT = "DECREASE_ITEM_COUNT";

export const incrementItemCount = (productId) => {
  return { type: INCREMENT_ITEM_COUNT, productId: productId };
};
export const decreaseItemCount = (productId) => {
  return { type: DECREASE_ITEM_COUNT, productId: productId };
};
