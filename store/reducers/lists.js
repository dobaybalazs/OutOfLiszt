import { DEFAULTLISTS } from "../../data/dummy-data";
import { ADD_TO_LIST } from "../actions/lists";
import DefaultList from "../../models/defaultlist";

const initialState = {
  availableLists: DEFAULTLISTS,
  userLists: DEFAULTLISTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const addedList = action.listitem;
      const listId = addedList.id;
      const listName = addedList.name;
      const listProducts = addedList.products;
      const listUsers = addedList.users;
      const listPriority = addedList.priority;
      const listDateMonth = addedList.dateMonth;
      const listDateDay = addedList.dateDay;

      const newList = new DefaultList(
        listId,
        listName,
        listProducts,
        listUsers,
        listPriority,
        listDateMonth,
        listDateDay
      );
      return {
        ...state,
        userLists: [...state.userLists, newList],
      };
  }
  return state;
};
