export const ADD_TO_LIST = "ADD_TO_LIST";

export const addToLists = (listitem) => {
  return { type: ADD_TO_LIST, listitem: listitem };
};
