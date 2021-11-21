import { DEFAULTLISTS } from "../../data/dummy-data";
import { ADD_TO_LIST } from "../actions/lists";

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
  }
  return state;
};
