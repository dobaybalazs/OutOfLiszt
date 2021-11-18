import { LISTITEMS } from "../../data/dummy-data";

const initialState = {
  availableFridgeProducts: LISTITEMS.filter((item) => {
    return item.coldStorage === true;
  }),
  userFridgeProducts: [],
};

export default (state = initialState, action) => {
  return state;
};
