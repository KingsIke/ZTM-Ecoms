import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./category/category.reducer";
export const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
  categories: categoriesReducer
});