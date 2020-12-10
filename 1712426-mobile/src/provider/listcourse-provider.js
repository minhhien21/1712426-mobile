import React, {useReducer} from 'react';
import {
  requestFavoriteListCourse,
  requestTopNewListCourse,
  requestTopRateListCourse,
  requestTopSellListCourse,
} from '../action/listcourses-action';
import {reducer} from '../reducer/listcourse-reducer';

const ListCourseContext = React.createContext();
const initialState = {
  isRequestedTopSell: false,
  TopSellListCourse: {
    message: null,
    payload: [
      {
        id: null,
        title: null,
        subtitle: null,
        price: 10000,
        description: null,
        requirement: [],
        learnWhat: [],
        soldNumber: 0,
        ratedNumber: 0,
        videoNumber: 6,
        totalHours: 0.016,
        formalityPoint: 0,
        contentPoint: 0,
        presentationPoint: 0,
        imageUrl: null,
        promoVidUrl: null,
        status: null,
        isHidden: false,
        isDeleted: false,
        createdAt: null,
        updatedAt: null,
        instructorId: null,
        typeUploadVideoLesson: 1,
        'instructor.user.id': null,
        'instructor.user.name': null,
      },
    ],
  },
  isRequestedTopNew: false,
  TopNewListCourse: {
    message: null,
    payload: [
      {
        id: null,
        title: null,
        subtitle: null,
        price: 10000,
        description: null,
        requirement: [],
        learnWhat: [],
        soldNumber: 0,
        ratedNumber: 0,
        videoNumber: 6,
        totalHours: 0.016,
        formalityPoint: 0,
        contentPoint: 0,
        presentationPoint: 0,
        imageUrl: null,
        promoVidUrl: null,
        status: null,
        isHidden: false,
        isDeleted: false,
        createdAt: null,
        updatedAt: null,
        instructorId: null,
        typeUploadVideoLesson: 1,
        'instructor.user.id': null,
        'instructor.user.name': null,
      },
    ],
  },
  isRequestedTopRate: false,
  TopRateListCourse: {
    message: null,
    payload: [
      {
        id: null,
        title: null,
        subtitle: null,
        price: 10000,
        description: null,
        requirement: [],
        learnWhat: [],
        soldNumber: 0,
        ratedNumber: 0,
        videoNumber: 6,
        totalHours: 0.016,
        formalityPoint: 0,
        contentPoint: 0,
        presentationPoint: 0,
        imageUrl: null,
        promoVidUrl: null,
        status: null,
        isHidden: false,
        isDeleted: false,
        createdAt: null,
        updatedAt: null,
        instructorId: null,
        typeUploadVideoLesson: 1,
        'instructor.user.id': null,
        'instructor.user.name': null,
      },
    ],
  },
  isRequestedFavorite: false,
  FavoriteListCourse: {
    message: null,
    payload: [
      {
        id: null,
        title: null,
        subtitle: null,
        price: 10000,
        description: null,
        requirement: [],
        learnWhat: [],
        soldNumber: 0,
        ratedNumber: 0,
        videoNumber: 6,
        totalHours: 0.016,
        formalityPoint: 0,
        contentPoint: 0,
        presentationPoint: 0,
        imageUrl: null,
        promoVidUrl: null,
        status: null,
        isHidden: false,
        isDeleted: false,
        createdAt: null,
        updatedAt: null,
        instructorId: null,
        typeUploadVideoLesson: 1,
        'instructor.user.id': null,
        'instructor.user.name': null,
      },
    ],
  },
};

const ListCourseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListCourseContext.Provider
      value={{
        state,
        requestTopSellListCourse: requestTopSellListCourse(dispatch),
        requestTopNewListCourse: requestTopNewListCourse(dispatch),
        requestTopRateListCourse: requestTopRateListCourse(dispatch),
        requestFavoriteListCourse: requestFavoriteListCourse(dispatch),
      }}>
      {children}
    </ListCourseContext.Provider>
  );
};

export {ListCourseProvider, ListCourseContext};
