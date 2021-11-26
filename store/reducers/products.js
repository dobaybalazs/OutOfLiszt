import { LinearGradient } from "react-native-svg";
import { LISTITEMS } from "../../data/dummy-data";
import {
  ADD_TO_USERPRODUCTS,
  DELETE_USERPRODUCT,
  INCREMENT_PRODUCT_COUNT,
  DECREASE_PRODUCT_COUNT,
  ADD_TO_PRODUCTS,
} from "../actions/products";

const initialState = {
  availableProducts: LISTITEMS,
  userProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PRODUCTS:
      const newProduct = action.product;
      return {
        ...state,
        availableProducts: [...state.availableProducts, newProduct],
      };
    case ADD_TO_USERPRODUCTS:
      const currentProducts = action.products;
      var addedProductsList = [];
      for (const product of currentProducts) {
        if (!state.userProducts.find((li) => li.id === product.id)) {
          var currentProduct = state.availableProducts.find(
            (ul) => ul.id === product.id
          );
          currentProduct.itemCount = product.count;
          addedProductsList.push(currentProduct);
        } else {
        }
      }
      const ProductsList = state.userProducts.map((ul) => {
        if (currentProducts.find((li) => li.id === ul.id)) {
          return {
            ...ul,
            itemCount:
              ul.itemCount +
              currentProducts.find((li) => li.id === ul.id).count,
          };
        }
        return ul;
      });
      return {
        ...state,
        userProducts: [...ProductsList, ...addedProductsList],
      };
    case DELETE_USERPRODUCT:
      const itemToDeleteId = action.productId;
      const newList = state.userProducts.filter(
        (product) => product.id !== itemToDeleteId
      );
      return {
        ...state,
        userProducts: newList,
      };
    case INCREMENT_PRODUCT_COUNT:
      const ItemToIncrement = action.productId;
      return {
        ...state,
        userProducts: state.userProducts.map((product) => {
          if (product.id === ItemToIncrement) {
            return { ...product, itemCount: product.itemCount + 1 };
          }
          return product;
        }),
      };
    case DECREASE_PRODUCT_COUNT:
      const ItemToDecrease = action.productId;
      return {
        ...state,
        userProducts: state.userProducts.map((product) => {
          if (product.id === ItemToDecrease) {
            if (product.itemCount - 1 < 0) {
              return { ...product, itemCount: 0 };
            }
            return { ...product, itemCount: product.itemCount - 1 };
          }
          return product;
        }),
      };
  }
  return state;
};
