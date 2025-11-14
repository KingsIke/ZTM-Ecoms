import { CATEGORIES_ACTION_TYPES } from "./category.type";
export const CATEGORIES_INITIALIZE_START = {
    categoriesMap: {}
};

export const categoriesReducer = (state = CATEGORIES_INITIALIZE_START, action = {}) => {
    const { type, payload } = action;   
    switch (type) {
        case 'SET_CATEGORIES_MAP':
            return { ...state, categoriesMap: payload };
        default:
            return state;
    }   
};
