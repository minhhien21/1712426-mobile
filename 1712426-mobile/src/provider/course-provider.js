import React, {useReducer} from 'react';
import {
  requestDetailCourse,
  requestFavoriteListCourse,
  requestSearchCourse,
  requestTopNewListCourse,
  requestTopRateListCourse,
  requestTopSellListCourse,
} from '../action/courses-action';
import {reducer} from '../reducer/course-reducer';

const CourseContext = React.createContext();
const initialState = {
  isRequestedTopSell: false,
  TopSellListCourse: {
    message: null,
    payload: [],
  },
  isRequestedTopNew: false,
  TopNewListCourse: {
    message: null,
    payload: [],
  },
  isRequestedTopRate: false,
  TopRateListCourse: {
    message: null,
    payload: [],
  },
  isRequestedFavorite: false,
  FavoriteListCourse: {
    message: null,
    payload: [],
  },
  isRequestedDetail: false,
  DetailCourse: {
    message: null,
    payload: {
      id: null,
      title: null,
      subtitle: null,
      price: 1000,
      description: null,
      requirement: [],
      learnWhat: [],
      soldNumber: 0,
      ratedNumber: 0,
      videoNumber: 0,
      totalHours: 0.202,
      formalityPoint: 4.5,
      contentPoint: 4.25,
      presentationPoint: 0,
      imageUrl: null,
      promoVidUrl: null,
      status: null,
      isHidden: false,
      createdAt: null,
      updatedAt: null,
      instructorId: null,
      typeUploadVideoLesson: 1,
      section: [],
      ratings: null,
      averagePoint: 4.3,
      instructor: null,
      coursesLikeCategory: [],
    },
  },
};

const CourseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CourseContext.Provider
      value={{
        state,
        requestTopSellListCourse: requestTopSellListCourse(dispatch),
        requestTopNewListCourse: requestTopNewListCourse(dispatch),
        requestTopRateListCourse: requestTopRateListCourse(dispatch),
        requestFavoriteListCourse: requestFavoriteListCourse(dispatch),
        requestDetailCourse: requestDetailCourse(dispatch),
      }}>
      {children}
    </CourseContext.Provider>
  );
};

export {CourseProvider, CourseContext};
