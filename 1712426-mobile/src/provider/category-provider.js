import React, {useReducer} from 'react';
import { requestGetAllCategory, requestGetListCourseCategory } from '../action/category-action';
import { reducer } from '../reducer/category-reducer';

const CategoryContext = React.createContext();
const initialState = {
  isRequestedGetAllCategory: false,
  ListCategory: {
    message: null,
    payload: [],
  },
  isRequestedGetListCourseCategory: false,
  ListCourseCategory: {
    message: null,
    payload: {
      rows:[],
      count: 0,
    },
  },
};

const CategoryProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider
      value={{
        state,
        requestGetAllCategory: requestGetAllCategory(dispatch),
        requestGetListCourseCategory: requestGetListCourseCategory(dispatch),
      }}>
      {children}
    </CategoryContext.Provider>
  );
};

export {CategoryProvider, CategoryContext};
