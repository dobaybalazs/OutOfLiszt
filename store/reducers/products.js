import { LISTITEMS } from "../../data/dummy-data";

const initialState = {
  availableProducts: LISTITEMS,
  userProducts: [],
};

export default (state = initialState, action) => {
  return state;
};
