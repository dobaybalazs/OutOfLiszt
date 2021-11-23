import { DEFAULTLISTS } from "../../data/dummy-data";
import {
  ADD_TO_LIST,
  ADD_TO_LISTPRODUCTS,
  DELETE_LISTITEM,
  DELETE_ALL_LISTITEMS,
  DELETE_USER,
  ADD_USER,
  DELETE_LIST,
  INCREMENT_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from "../actions/lists";

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
        const newProductsList = [
          ...editedList.products,
          { id: addedItem.productId, count: 1 },
        ];
        return {
          ...state,
          userLists: state.userLists.map((ul) => {
            if (ul.id === addedItem.listId) {
              return { ...ul, products: newProductsList };
            }
            return ul;
          }),
        };
      }
      return state;
    case DELETE_LISTITEM:
      const modList = action.pairedIds;
      const listToEdit = state.userLists.find((list) => {
        return list.id === modList.listId;
      });
      const newProducts = listToEdit.products.filter((product) => {
        return product.id !== modList.productId;
      });
      if (
        listToEdit.products.findIndex((item) => {
          return item.id === modList.productId;
        }) !== -1
      ) {
        return {
          ...state,
          userLists: state.userLists.map((ul) => {
            if (ul.id === modList.listId) {
              return {
                ...ul,
                products: newProducts,
              };
            }
            return ul;
          }),
        };
      }
    case DELETE_ALL_LISTITEMS:
      const listToEmpty = action.listId;
      return {
        ...state,
        userLists: state.userLists.map((ul) => {
          if (ul.id === listToEmpty) {
            return {
              ...ul,
              products: [],
            };
          }
          return ul;
        }),
      };
    case DELETE_USER:
      const deleteListId = action.pairedIds.listId;
      const userIdToDelete = action.pairedIds.userId;
      const listToDeleteFrom = state.userLists.find((list) => {
        return list.id === deleteListId;
      });
      const newUserList = listToDeleteFrom.users.filter(
        (user) => user !== userIdToDelete
      );
      return {
        ...state,
        userLists: state.userLists.map((ul) => {
          if (ul.id === deleteListId) {
            return {
              ...ul,
              users: newUserList,
            };
          }
          return ul;
        }),
      };
    case ADD_USER:
      const searchedUser = action.pairedIds.userId;
      const addUserToListId = action.pairedIds.listId;
      const addUserList = state.userLists.find(
        (list) => list.id === addUserToListId
      );
      const addNewUserList = [...addUserList.users, searchedUser];
      return {
        ...state,
        userLists: state.userLists.map((ul) => {
          if (ul.id === addUserToListId) {
            return {
              ...ul,
              users: addNewUserList,
            };
          }
          return ul;
        }),
      };
    case DELETE_LIST:
      const listToDeleteId = action.listId;
      const newUserLists = state.userLists.filter(
        (list) => list.id !== listToDeleteId
      );
      return {
        ...state,
        userLists: newUserLists,
      };
    case INCREMENT_ITEM_COUNT:
      const listToIncrementIn = action.pairedIds.listId;
      const itemToIncrementId = action.pairedIds.itemId;
      const incrementList = state.userLists.find(
        (list) => list.id === listToIncrementIn
      );
      const newCountProductsList = incrementList.products.map((ul) => {
        if (ul.id === itemToIncrementId) {
          return { id: ul.id, count: ul.count + 1 };
        }
        return ul;
      });
      return {
        ...state,
        userLists: state.userLists.map((list) => {
          if (list.id === listToIncrementIn) {
            return {
              ...list,
              products: newCountProductsList,
            };
          }
          return list;
        }),
      };
    case DECREASE_ITEM_COUNT:
      const listToDecreaseIn = action.pairedIds.listId;
      const itemToDecreaseId = action.pairedIds.itemId;
      const decreaseList = state.userLists.find(
        (list) => list.id === listToDecreaseIn
      );
      const newCountProductsListD = decreaseList.products.map((ul) => {
        if (ul.id === itemToDecreaseId) {
          if (ul.count - 1 < 0) {
            return { id: ul.id, count: 0 };
          }
          return { id: ul.id, count: ul.count - 1 };
        }
        return ul;
      });
      return {
        ...state,
        userLists: state.userLists.map((list) => {
          if (list.id === listToDecreaseIn) {
            return {
              ...list,
              products: newCountProductsListD,
            };
          }
          return list;
        }),
      };
  }
  return state;
};
