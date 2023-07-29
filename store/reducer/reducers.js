import { combineReducers } from "redux";
import { pharmacy_id,U_ID, first,last,cartItem } from "./reducer";
export const reducers = combineReducers({
    pharmaID: pharmacy_id,
    User_ID: U_ID,
    FName: first,
    LName:last,
    Cart:cartItem
})