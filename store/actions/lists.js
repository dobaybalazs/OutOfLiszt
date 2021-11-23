export const ADD_TO_LIST = "ADD_TO_LIST";
export const ADD_TO_LISTPRODUCTS = "ADD_TO_LISTPRODUCTS";
export const DELETE_LISTITEM = "DELETE_LISTITEM";
export const DELETE_ALL_LISTITEMS = "DELETE_ALL_LISTITEMS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";

export const addToLists = (listitem) => {
  return { type: ADD_TO_LIST, listitem: listitem };
};

export const addToListProducts = (pairedIds) => {
  return { type: ADD_TO_LISTPRODUCTS, pairedIds: pairedIds };
};
export const deleteListItem = (pairedIds) => {
  return { type: DELETE_LISTITEM, pairedIds: pairedIds };
};
export const deleteAllListItems = (listId) => {
  return { type: DELETE_ALL_LISTITEMS, listId: listId };
};
export const deleteUser = (pairedIds) => {
  return { type: DELETE_USER, pairedIds: pairedIds };
};
export const addUser = (pairedIds) => {
  return { type: ADD_USER, pairedIds: pairedIds };
};
