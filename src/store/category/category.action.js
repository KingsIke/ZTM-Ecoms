import {createAction} from '../root-action';
import { CATEGORIES_ACTION_TYPES } from "./category.type";
export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);