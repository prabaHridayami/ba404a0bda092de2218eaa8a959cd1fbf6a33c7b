import { priceReducer, itemReducer } from "./addCart";
import { changeLocation } from "./location";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  totalPrice: priceReducer,
  totalItem: itemReducer,
  location: changeLocation,
});

export default allReducers;
