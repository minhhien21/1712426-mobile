import React, {useReducer} from 'react';
import {
  requestDetailInstructor,
  requestListInstructor,
} from '../action/instructor-action';
import {reducer} from '../reducer/instructor-reducer';

const InstructorContext = React.createContext();
const initialState = {
  isRequestedListInstructor: false,
  ListInstructor: {
    message: null,
    payload: [
      {
        id: null,
        userId: null,
        major: null,
        intro: null,
        skills: [],
        cumulativeTuition: 0,
        isDeleted: false,
        createdAt: null,
        updatedAt: null,
        'user.id': null,
        'user.email': null,
        'user.avatar': null,
        'user.name': null,
        'user.favoriteCategories': [],
        'user.point': 0,
        'user.phone': null,
        'user.type': null,
        'user.isDeleted': false,
        'user.isActivated': true,
        'user.createdAt': null,
        'user.updatedAt': null,
      },
    ],
  },
  isRequestedDetailInstructor: false,
  DetailInstructor: {
    message: null,
    payload: {
      id: null,
      userId: null,
      name: null,
      email: null,
      avatar: null,
      phone: null,
      major: null,
      intro: null,
      skills: [],
      createdAt: null,
      updatedAt: null,
      totalCourse: 2,
      averagePoint: 0,
      countRating: 0,
      ratedNumber: 0,
      soldNumber: 0,
      courses: [
        {
          id: null,
          title: null,
          subtitle: null,
          price: 0,
          description: null,
          requirement: [],
          learnWhat: [],
          soldNumber: 0,
          ratedNumber: 0,
          videoNumber: 6,
          totalHours: 0.014,
          formalityPoint: 0,
          contentPoint: 0,
          presentationPoint: 0,
          imageUrl: null,
          promoVidUrl: null,
          status: null,
          isHidden: false,
          createdAt: null,
          updatedAt: null,
          instructorId: null,
          typeUploadVideoLesson: 1,
        },
      ],
    },
  },
};

const InstructorProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InstructorContext.Provider
      value={{
        state,
        requestListInstructor: requestListInstructor(dispatch),
        requestDetailInstructor: requestDetailInstructor(dispatch),
      }}>
      {children}
    </InstructorContext.Provider>
  );
};

export {InstructorProvider, InstructorContext};
