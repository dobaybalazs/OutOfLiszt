import { DEFAULTLISTS } from "../../data/dummy-data";
import {
  ADD_TO_LIST,
  ADD_TO_LISTPRODUCTS,
  DELETE_LISTITEM,
  DELETE_ALL_LISTITEMS,
  DELETE_USER,
  ADD_USER,
  DELETE_LIST,
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
        const newProductsList = [...editedList.products, addedItem.productId];
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
        return product !== modList.productId;
      });
      if (
        listToEdit.products.findIndex((item) => {
          return item === modList.productId;
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
  }
  return state;
};
