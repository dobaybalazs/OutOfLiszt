import { DEFAULTLISTS } from "../../data/dummy-data";
import { ADD_TO_LIST, ADD_TO_LISTPRODUCTS } from "../actions/lists";

const initialState = {
  availableLists: DEFAULTLISTS,
  userLists: DEFAULTLISTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const addedList = action.listitem;
      return {
        ...state,
        userLists: [...state.userLists, addedList],
      };
    case ADD_TO_LISTPRODUCTS:
      const addedItem = action.pairedIds;
      const editedList = state.userLists.find((list) => {
        return list.id === addedItem.listId;
      });
      if (
        editedList.products.findIndex((item) => {
          return item === addedItem.productId;
        }) === -1
      ) {
        const newProductsList = [...editedList.products, addedItem.productId];
        state.userLists.find((list) => {
          return list.id === addedItem.listId;
        }).products = newProductsList;
        return state;
      }
      return state;
  }
  return state;
};
