import { LISTITEMS } from "../../data/dummy-data";

const initialState = {
  availablePantryProducts: LISTITEMS.filter((item) => {
    return item.coldStorage === false;
  }),
  userPantryProducts: [],
};

export default (state = initialState, action) => {
  return state;
};
