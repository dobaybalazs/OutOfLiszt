export const ADD_TO_LIST = "ADD_TO_LIST";
export const ADD_TO_LISTPRODUCTS = "ADD_TO_LISTPRODUCTS";

export const addToLists = (listitem) => {
  return { type: ADD_TO_LIST, listitem: listitem };
};

export const addToListProducts = (pairedIds) => {
  return { type: ADD_TO_LISTPRODUCTS, pairedIds: pairedIds };
};
